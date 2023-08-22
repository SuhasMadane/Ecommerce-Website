import React from "react";

const SubCarouselProductCard = () => {
  return (
    <>
      <div
        className="cursor-pointer 
      flex flex-col 
      items-center 
      bg-white rounded-lg 
      shadow-lg overflow-hidden 
      w-[13rem] mx-3"
      >
        <div className="h-[13rem] w-[10rem]">
          <img
            className="object-cover object-top w-full h-full"
            src="https://m.media-amazon.com/images/I/81JHQqoD9gS._AC_UY1100_.jpg"
            alt=""
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium text-gray-900">Nofilter</h3>
          <p className="mt-2 text-sm text-gray-500">
            Men Solid Pure Cotton Staright Kurta
          </p>
        </div>
      </div>
    </>
  );
};

export default SubCarouselProductCard;
