import React from "react";

function Newsletter() {
  return (
    <div className="container mx-auto max-w-5xl px-5 my-24">
      <div className="flex flex-col gap-7 md:flex-row">
        {/* des */}
        <div className="w-full">
          <h1 className="font-sans2 text-2xl sm:text-3xl md:text-4xl">
            Newsletter
          </h1>
          <p className="mt-3 max-w-sm">
            Register now with our newsletter and get the latest updates
            available
          </p>
        </div>
        {/* Form */}
        <div className="w-full">
          <div className="flex flex-col gap-5">
            <input
              type="text"
              className="w-full border-slate-500 border p-2 text-sm max-w-sm placeholder:text-black font-sansM"
              placeholder="Name"
            />

            <div className="flex flex-col gap-4 lg:flex-row">
              <input
                type="email"
                className="w-full border-slate-500 border p-2 text-sm max-w-sm placeholder:text-black font-sansM"
                placeholder="Email"
              />

              <button className="bg-slate-950 w-fit py-2 px-10 text-white">
                send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
