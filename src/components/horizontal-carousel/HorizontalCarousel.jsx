import React from "react";

const HorizontalCarousel = (props) => {
  const { children } = props;
  return <div className="carousel rounded-box">{children}</div>;
};

export default HorizontalCarousel;
