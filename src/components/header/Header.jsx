import React from 'react'

const Header = (props) => {

    const { headerText, subTitle, bgColor, onClickHeader } = props;


  return (
    <div onClick={onClickHeader} className={`w-full h-[60px] cursor-pointer ${bgColor}`}>
      {/*  -[] : jit : just in time */}
      <p>{headerText}</p>
      <p>{subTitle}</p>
    </div>
  );
}

export default Header