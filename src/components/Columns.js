import React from "react";

function Columns({ children }) {
  return (
    <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-8 lg:gap-10">
      {children}
    </div>
  );
}

export default Columns;
