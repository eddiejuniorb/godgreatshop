import React from "react";
import img from "../assets/images/tshirt2.png";
import { CloseIcon2, MinusIcon, PlusIcon } from "../Icons";

function Cart() {
  return (
    <div className="container mx-auto px-5 max-w-5xl mt-10">
      <div className="flex flex-col gap-16 md:flex-row md:mt-16 md:gap-3">
        <div className="w-full">
          <h1 className="font-sans2 text-lg">Shopping Cart</h1>

          {/* Cart Items */}
          <div className="flex flex-col gap-5 mt-10">
            {/* Item */}
            <div className="w-full flex items-center gap-3 sm:gap-8 sm:justify-between">
              {/* Image */}
              <div className="w-20 p-1 bg-gray-100 sm:w-28">
                <img src={img} alt="" className="w-full" />
              </div>
              {/* Des */}
              <div className="w-full relative">
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-8 md:gap-14">
                  {/* Cart Name */}

                  <h1 className="font-sans2 uppercase ">White T-shirt</h1>
                  <p className="text-gray-600 text-sm font-sansM sm:hidden">
                    QUANTITY: 1
                  </p>

                  {/* Quantity and Price */}
                  <div className="flex justify-between items-center mt-2 sm:gap-8 sm:mt-0 md:gap-14">
                    <h1 className="font-sans2 uppercase ">$23.99</h1>

                    {/* Quantity Change */}
                    <div className="flex items-center gap-3">
                      {/* Minus Button */}
                      <button className="bg-gray-300 p-3 rounded-full w-3 h-3 flex justify-center items-center">
                        <div>
                          <MinusIcon />
                        </div>
                      </button>
                      {/* Quantity Input */}
                      <input type="text" className="w-2" value="1" />
                      {/* Plus Button */}
                      <button className="bg-gray-300 p-3 rounded-full w-3 h-3 flex justify-center items-center">
                        <div>
                          <PlusIcon />
                        </div>
                      </button>
                    </div>

                    {/* Delete Icon */}
                    <button className="hidden sm:block">
                      <CloseIcon2 />
                    </button>
                    {/* Mobile */}
                    <button className="absolute top-0 right-0 sm:hidden">
                      <CloseIcon2 />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Checkout Section */}
        <div className="bg-slate-100 p-5 w-full sm:px-8 md:w-2/3">
          <h1 className="font-sans2 mt-3 md:text-xl">Summary</h1>

          <div className="mt-8 flex-col flex gap-8">
            <div className="flex justify-between items-center">
              <p className="text-gray-900 font-sansM">Total Order:</p>
              <p className="font-sansM">$23.78</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-gray-900 font-sansM">Shipping / Delivery:</p>
              <p className="font-sansM">$23.78</p>
            </div>
            <hr />
            <div className="flex justify-between items-center">
              <p className="text-gray-900 font-sansM">Subtotal:</p>
              <p className="font-sans2 text-xl">$23.78</p>
            </div>

            <div className="mt-8">
              <button className="w-full bg-black text-white py-2.5 rounded-full">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
