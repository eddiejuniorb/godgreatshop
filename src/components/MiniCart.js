import React from "react";
import { CloseIcon, CloseIcon2 } from "../Icons";
import img from "../assets/images/tshirt4.png";
import { Link } from "react-router-dom";

function MiniCart({ close }) {
  const closeMini = (e) => {
    if (e.target.getAttribute("data")) {
      return close();
    }
  };
  return (
    <div
      className="w-full h-full fixed top-0 left-0 flex justify-end bg-gray-500 bg-opacity-50 z-50 overflow-y-auto overflow-hidden"
      data="me"
      onClick={(e) => {
        closeMini(e);
      }}
    >
      <div className="w-full bg-white max-w-sm h-screen overflow-hidden px-5 pt-14 sm:px-10 absolute right-0 overflow-y-auto flex flex-col items-start">
        {/* Main */}
        <div className="flex-1 w-full">
          <button
            onClick={() => {
              close();
            }}
          >
            <CloseIcon />
          </button>

          {/* Cart Items */}
          <div className="flex flex-col mt-8 gap-5">
            {/* Items */}
            <div className="flex gap-4 items-center py-5">
              {/* Image */}
              <div className="p-1 bg-gray-100">
                <img src={img} alt="" className=" w-16" />
              </div>

              {/* des */}
              <div className="flex-1 relative">
                <h1 className="font-semibold">Men T-Shirt</h1>
                <p className="text-gray-600 text-sm mt-1 font-medium">QTY: 2</p>
                <p className="text-red-600 mt-1 font-semibold">$290</p>

                <button className="absolute top-0 right-0">
                  <CloseIcon2 />
                </button>
              </div>
            </div>
            {/* 2 */}
            <div className="flex gap-4 items-center py-5">
              {/* Image */}
              <div className="p-1 bg-gray-100">
                <img src={img} alt="" className=" w-16" />
              </div>

              {/* des */}
              <div className="flex-1 relative">
                <h1 className="font-semibold">Men T-Shirt</h1>
                <p className="text-gray-600 text-sm mt-1 font-medium">QTY: 2</p>
                <p className="text-red-600 mt-1 font-semibold">$290</p>

                <button className="absolute top-0 right-0">
                  <CloseIcon2 />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 w-full z-40 bg-white py-5">
          <hr className="my-5" />
          <div className="flex justify-between items-center">
            <h1 className="font-bold">Subtotal:</h1>
            <p className="text-red-600 mt-1 font-bold">$290</p>
          </div>

          <Link
            to="/cart"
            className="mt-5 w-full text-center border border-black block py-2.5"
          >
            View Cart
          </Link>

          <Link className="mt-3 w-full text-center border border-black block py-2.5 bg-black text-white">
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MiniCart;
