import { Button, IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
const CartItem = () => {
  return (
    <>
      <div className="p-5 shadow-lg border rounded-md ">
        <div className="flex items-center">
          <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem] ">
            <img
              className="w-full h-full object-cover object-top"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_5D0B38Ok1EdivOOC_VQAxFzg-cNS9rvXhg&usqp=CAU"
              alt=""
            />
          </div>
          <div className="ml-5 space-y-1">
            <p className="font-semibold">Men Slim Mid Rise Black Jeans</p>
            <p className="opacity-70">Size: L,White</p>
            <p className="opacity-70 mt-2">Seller: Crishtaliyo 2fashion</p>
            <div className="flex space-x-2 items-center  text-gray-900 pt-6">
              <p className="opacity-50 line-through">₹211</p>
              <p className="font-semibold text-lg">₹199</p>
              <p className="text-green-600 font-semibold">5% off</p>
            </div>
          </div>
        </div>
        <div>
          <div className="lg:flex items-center lg:space-x-10 pt-4">
            <div className="flex items-center space-x-2 ">
              <IconButton color="primary" aria-label="add an alarm">
                <RemoveCircleOutlineIcon />
              </IconButton>

              <span className="py-1 px-7 border rounded-sm">3</span>
              <IconButton color="primary" aria-label="add an alarm">
                <AddCircleOutlineIcon />
              </IconButton>
            </div>
            <div className="flex text-sm lg:text-base mt-5 lg:mt-0">
              <Button variant="text">Remove </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
