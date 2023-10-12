import React from "react";
import p1 from "../assets/images/kaftan4.png";
import p2 from "../assets/images/kaftan1.png";
import p3 from "../assets/images/tshirt2.png";
import p4 from "../assets/images/tshirt3.png";
import Columns from "./Columns";
import Product from "./Product";

function Shop() {
  return (
    <div className="container max-w-6xl mx-auto mt-10 py-10 px-5">
      <div>
        <h1 className="font-sansM uppercase text-center text-gray-500 md:text-lg">
          Welcome to greatshop
        </h1>

        <p className="mt-10 font-serif text-center font-bold text-3xl sm:text-4xl lg:text-5xl capitalize">
          <sma className="text-green-600">Latest</sma> Products <br />
          that you shouldn't Miss Out
        </p>

        {/* Category */}
        <div className="mt-10">
          <ul className="flex flex-col gap-3 md:flex-row md:justify-center md:gap-8">
            <li className="font-sansM py-2 border-b md:border-none text-green-600">
              <button>All</button>
            </li>
            <li className="font-sansM py-2 border-b md:border-none">
              <button>Kaftan</button>
            </li>
            <li className="font-sansM py-2 border-b md:border-none">
              <button>Shoes</button>
            </li>
            <li className="font-sansM py-2 border-b md:border-none">
              <button>Shirts</button>
            </li>
          </ul>
        </div>

        {/* Products */}

        <div className="mt-16">
          <Columns>
            <Product
              productname="Men Kaftan"
              price={98}
              discount={10}
              image={p1}
            />

            <Product
              productname="Kaftan Blue"
              price={150}
              discount={5}
              image={p2}
            />

            <Product productname="T-Shirt White" price={45} image={p3} />

            <Product productname="T-Shirt Black" price={10} image={p4} />
          </Columns>
        </div>
      </div>
    </div>
  );
}

export default Shop;
