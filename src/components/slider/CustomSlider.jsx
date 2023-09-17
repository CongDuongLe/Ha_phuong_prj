import React, { useMemo, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import useModal from "../../store/useModal";
import useSelectGesture from "../../store/useSelectGesture";

const CustomSlider = (props) => {
  const { isModalOpen, setIsModalOpen, setType } = useModal();
  const { setSelectedItem } = useSelectGesture();

  const { slides } = props;
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides?.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides?.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-[1400px] h-[580px] w-full m-auto py-16 px-4 relative group">
      <button
        onClick={() => {
          setIsModalOpen(!isModalOpen);
          setType("EDIT");
          setSelectedItem(slides[currentIndex]);
        
        }}
        className="btn btn-sm absolute top-[84px] right-4 z-20"
      >
        Edit
      </button>
      <div className="w-full h-full rounded-2xl bg-center bg-cover duration-500">
        <video
          src={slides[currentIndex]?.videoUrl}
          className="w-full h-full rounded-2xl"
          autoPlay
          loop
          muted
        ></video>
      </div>

      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides?.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomSlider;
