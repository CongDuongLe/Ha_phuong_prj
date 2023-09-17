import { create } from "zustand";

// useState()  const [stateName, setStateName] = useState(initialState)

// so sanh voi zustand :
// nhung tham so khong di cung voi () => {} : === stateName
// nhung tham so di cung voi () => {} : === setStateName
// gia tri di cung voi nhung tham so khong chua () => {} : === initialState

const useModal = create((set) => ({
  // state
  isModalOpen: false,
  type : '',

  setIsModalOpen: (newStatus) => set({ isModalOpen: newStatus }),

setType: (newType) => set({ type: newType }),
}));

export default useModal;
