import React from "react";
import Heading from "./Heading";
import Product from "./Product";
import p1 from "../assets/images/kaftan4.png";
import p2 from "../assets/images/kaftan1.png";
import p3 from "../assets/images/tshirt2.png";
import p4 from "../assets/images/tshirt3.png";
import Columns from "./Columns";

function SaleOff() {
  return (
    <div className="w-full container mx-auto px-5 my-16 max-w-6xl">
      <Heading title={"Sale Off"} />

      <div className="mt-10">
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
  );
}

export default SaleOff;
