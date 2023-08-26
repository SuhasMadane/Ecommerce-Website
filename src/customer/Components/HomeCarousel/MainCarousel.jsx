import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import mainCarouselData from "../../Data/MainCarouselData";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const MainCarousel = () => {
  const items = mainCarouselData.map((item) => (
    <img
      key={item.id} //Added unique key for each item in the array
      className="cursor-pointer"
      role="presentation"
      src={item.image}
      alt="Image Not Found"
    />
  ));

  return (
    <AliceCarousel
      items={items}
      disableButtonsControls
      autoPlay // used to move carousel images automatically
      autoPlayInterval={1000} //setted time interval of 1 sec
      infinite // used to move carousel images automatically again & again for infinite time
    />
  );
};

export default MainCarousel;
