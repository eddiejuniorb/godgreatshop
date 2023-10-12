import React from "react";
import Heading from "./Heading";
import shirt from "../assets/images/shirt.png";
import { Link } from "react-router-dom";

function WeekStyle() {
  return (
    <div className="container mx-auto px-5 max-w-6xl">
      <Heading title="Trending Products" />

      <div className="container mx-auto max-w-5xl">
        <div className="mt-10 flex flex-col gap-8 md:flex-row">
          <div className="w-full shadow pb-3">
            {/* image */}
            <div>
              <img
                src={shirt}
                alt=""
                className="w-full rounded-t-2xl max-h-[500px] object-cover"
              />
            </div>
            {/* Des */}
            <div className="p-3 sm:p-8">
              <h1 className="font-sans2 mt-3 text-xl">Affordable Shirt</h1>
              <p className="text-sm mt-3">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Distinctio esse, consequuntur nobis maiores architecto rem odit,
                voluptate aliquid rerum neque quam dignissimos a placeat
                sapiente
              </p>

              <Link className="rounded-full bg-green-900 text-white py-2 px-5 mt-3 block w-fit">
                Buy Now
              </Link>
            </div>
          </div>

          <div className="w-full shadow pb-3">
            {/* image */}
            <div>
              <img
                src={shirt}
                alt=""
                className="w-full rounded-t-2xl max-h-[500px] object-cover"
              />
            </div>
            {/* Des */}
            <div className="p-3 sm:p-8">
              <h1 className="font-sans2 mt-3 text-xl">Affordable Shirt</h1>
              <p className="text-sm mt-3">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Distinctio esse, consequuntur nobis maiores architecto rem odit,
                voluptate aliquid rerum neque quam dignissimos a placeat
                sapiente
              </p>

              <Link className="rounded-full bg-green-900 text-white py-2 px-5 mt-3 block w-fit">
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeekStyle;
