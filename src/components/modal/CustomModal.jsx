import React from "react";
import useModal from "../../store/useModal";

const CustomModal = (props) => {
  const { children } = props;

  const { isModalOpen } = useModal();

  console.log(isModalOpen);

  if (!isModalOpen) {
    return;
  }

  return (
    <div className="fixed z-10 overflow-y-auto top-0 w-full left-0 " id="modal">
      {children}
    </div>
  );
};

export default CustomModal;
