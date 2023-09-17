import React, { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  deleteField,
  updateDoc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../firebase/firebase.config";
import CustomModal from "../modal/CustomModal";
import useModal from "../../store/useModal";
import CustomSlider from "../slider/CustomSlider";
import useSelectGesture from "../../store/useSelectGesture";
import { BsSquare } from "react-icons/bs";

const Gesture = () => {
  const [gestures, setGestures] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [addGesture, setAddGesture] = useState({
    name: "",
    description: "",
    videoUrl: "",
    id: "",
  });

  const { isModalOpen, setIsModalOpen, setType, type } = useModal();

  const { selectedItem, setSelectedItem } = useSelectGesture();

  // B1 : tao 1 bien de collect data
  const gestureRef = collection(db, "gestures");

  // B2 : tao 1 function de get data

  const getGestures = async () => {
    setIsLoading(true);
    const gesturesDocument = await getDocs(gestureRef);
    const gesturesData = gesturesDocument.docs.map((doc) => doc.data()); // nhan lai data tu firebase
    const collectionId = gesturesDocument.docs.map((doc) => doc.id); // lay id ung voi moi doc()
    const gesturesDataWithId = gesturesData.map((item, index) => {
      // them id vao moi item trong array nhan duoc tu gesturesData
      return {
        ...item,
        id: collectionId[index],
      };
    });

    if (gesturesDataWithId.length > 0) {
      setGestures(gesturesDataWithId);
      setIsLoading(false);
    } else {
      setGestures([]);
      setIsLoading(false);
    }
  };

  const removeGesture = async (id) => {
    setGestures(gestures.filter((item) => item.id !== id));
  };

  useEffect(() => {
    getGestures();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleAddNewGesture = async (e) => {
    e.preventDefault();

    try {
      const result = await addDoc(gestureRef, addGesture);
      if (result) {
        setAddGesture({
          name: "",
          description: "",
          videoUrl: "",
        });
        setIsModalOpen(!isModalOpen);
        setGestures([...gestures, { ...addGesture, id: result.id }]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const turnOffModal = () => {
    setIsModalOpen(!isModalOpen);
    setType("");
  };

  const handleUpdateGesture = async (e) => {
    e.preventDefault();
    try {
      // post => k co response
      await updateDoc(doc(db, "gestures", selectedItem.id), {
        name: selectedItem.name,
        description: selectedItem.description,
        videoUrl: selectedItem.videoUrl,
      });

      setIsModalOpen(!isModalOpen);
      setGestures(
        gestures.map((item) =>
          item.id === selectedItem.id
            ? {
                ...item,
                name: selectedItem.name,
                description: selectedItem.description,
                videoUrl: selectedItem.videoUrl,
              }
            : item
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  console.log(selectedItem);

  return (
    <div>
      <div className="relative flex h-[580px]">
        <CustomSlider slides={gestures ?? []} />
        <button
          onClick={() => {
            setIsModalOpen(!isModalOpen);
            setType("ADD");
          }}
          className="inline-flex items-center gap-2 justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px] absolute bottom-0 right-4 "
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </span>
          <span>Add Gesture </span>
        </button>
      </div>

      {/* add new */}
      <CustomModal>
        {type === "ADD" ? (
          <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div
                onClick={turnOffModal}
                className="absolute inset-0 bg-gray-900 opacity-75"
              />
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
              &#8203;
            </span>
            <div
              className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <label>Gesture name</label>
                <input
                  value={addGesture.name}
                  type="text"
                  className="w-full bg-gray-100 p-2 mt-2 mb-3 rounded-lg outline-none"
                  placeholder="Enter song name"
                  onChange={(e) =>
                    setAddGesture({ ...addGesture, name: e.target.value })
                  }
                />
                <label>Description</label>
                <input
                  type="text"
                  className="w-full bg-gray-100 p-2 mt-2 mb-3 rounded-lg outline-none"
                  placeholder="Enter song singer"
                  onChange={(e) =>
                    setAddGesture({
                      ...addGesture,
                      description: e.target.value,
                    })
                  }
                  value={addGesture.description}
                />
                <label>Video Url</label>
                <input
                  type="text"
                  className="w-full bg-gray-100 p-2 mt-2 mb-3 rounded-lg outline-none"
                  placeholder="Enter song album"
                  value={addGesture.videoUrl}
                  onChange={(e) =>
                    setAddGesture({ ...addGesture, videoUrl: e.target.value })
                  }
                />
              </div>
              <div className="bg-gray-200 px-4 py-3 text-right">
                <button
                  type="button"
                  className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2"
                  onClick={turnOffModal}
                >
                  Cancel
                </button>
                <button
                  onClick={(e) => handleAddNewGesture(e)}
                  type="button"
                  className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 mr-2"
                >
                  Create new item
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div
                onClick={turnOffModal}
                className="absolute inset-0 bg-gray-900 opacity-75"
              />
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
              &#8203;
            </span>
            <div
              className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <label>Gesture id</label>
                <input
                  value={selectedItem.id}
                  type="text"
                  className="w-full bg-gray-300 p-2 mt-2 mb-3 rounded-lg outline-none"
                  placeholder="Enter song name"
                  disabled
                />
                <label>Gesture name</label>
                <input
                  value={selectedItem.name}
                  type="text"
                  className="w-full bg-gray-100 p-2 mt-2 mb-3 rounded-lg outline-none"
                  placeholder="Enter song name"
                  onChange={(e) =>
                    setSelectedItem({ ...selectedItem, name: e.target.value })
                  }
                />
                <label>Description</label>
                <input
                  type="text"
                  className="w-full bg-gray-100 p-2 mt-2 mb-3 rounded-lg outline-none"
                  placeholder="Enter song singer"
                  onChange={(e) =>
                    setSelectedItem({
                      ...selectedItem,
                      description: e.target.value,
                    })
                  }
                  value={selectedItem.description}
                />
                <label>Video Url</label>
                <input
                  type="text"
                  className="w-full bg-gray-100 p-2 mt-2 mb-3 rounded-lg outline-none"
                  placeholder="Enter song album"
                  value={selectedItem.videoUrl}
                  onChange={(e) =>
                    setSelectedItem({
                      ...selectedItem,
                      videoUrl: e.target.value,
                    })
                  }
                />
              </div>
              <div className="bg-gray-200 px-4 py-3 text-right">
                <button
                  type="button"
                  className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2"
                  onClick={turnOffModal}
                >
                  Cancel
                </button>
                <button
                  onClick={(e) => handleUpdateGesture(e)}
                  type="button"
                  className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 mr-2"
                >
                  Update Item
                </button>
              </div>
            </div>
          </div>
        )}
      </CustomModal>
    </div>
  );
};

export default Gesture;
