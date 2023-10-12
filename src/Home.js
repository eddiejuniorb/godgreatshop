import React from "react";
import Banner from "./components/Banner";
import SaleOff from "./components/SaleOff";
import Featured from "./components/Featured";
import WeekStyle from "./components/WeekStyle";
import Newsletter from "./components/Newsletter";

function Home() {
  return (
    <div className="">
      <Banner />
      <Featured />
      <WeekStyle />
      <SaleOff />
      <Newsletter />
    </div>
  );
}

export default Home;
