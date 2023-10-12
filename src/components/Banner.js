import React from "react";
import bg from "../assets/images/bg.jpg";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div
      className="bg-slate-50 px-5 flex w-full py-16 bg-no-repeat bg-cover h-full items-center xl:h-auto xl:py-40"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="">
          {/* Banner Content */}

          <div className="mt-5 md:w-full">
            <h1 className="font-sans2 text-2xl sm:text-3xl md:text-4xl lg:text-6xl max-w-2xl">
              New Kaftan for Men
            </h1>
            <p className="mt-2 text-sm sm:text-base max-w-md sm:mt-7 lg:text-lg lg:max-w-lg ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, beatae adipisicing elit.
            </p>

            <Link className="bg-green-900 py-2 text-white w-40 text-center px-10 mt-5 block md:mt-14">
              Shop
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
