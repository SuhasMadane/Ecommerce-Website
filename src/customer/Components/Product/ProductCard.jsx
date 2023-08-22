import React from "react";
import "./ProductCard.css";

const ProductCard = () => {
  return (
    <div className="productCard w-[13rem] border m-3 transition-all cursor-pointer ">
      <div className="h-[13rem]">
        <img
          className="h-full w-full object-cover object-left-top"
          src="https://trendsthemes.com/wp-content/uploads/2022/12/photo_2022-12-01_22-36-55.jpg"
          alt=""
        />
      </div>
      <div className="textPart bg-white p-3 ">
        <div>
          <p className="font-bold opacity-60">Nofilter</p>
          <p className="">Westside Navy Checkered Slim-Fit Shirt</p>

          <p className="font-semibold opacity-50">Gray</p>
        </div>

        <div className="flex space-x-2 items-center">
          <p className="font-semibold">₹249</p>
          <p className="opacity-50 line-through">₹299</p>
          <p className="text-green-600 font-semibold">25% off</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
