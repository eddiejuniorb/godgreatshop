import React from "react";

function Heading({ title }) {
  return (
    <div>
      <h1
        className="font-sans2 text-lg pl-10 relative after:absolute 
      after:w-7 after:h-1 after:bg-black after:left-0 after:top-1/2 after:-translate-y-1/2"
      >
        {title}
      </h1>
    </div>
  );
}

export default Heading;
