import React from "react";
import load from "../assets/images/loading.gif";

function LoadingComponent() {
  return (
    <div className="my-3 flex items-center justify-center">
      <img src={load} alt="" className="w-4" />
    </div>
  );
}

export default LoadingComponent;
