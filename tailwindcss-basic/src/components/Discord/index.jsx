import React from "react";

export default function Discord() {
  return (
    <div className="bg-gray-900 h-screen">
      <header className="text-white p-1 font-bold text-sm">
        <h4>DISCORD</h4>
      </header>
      <div className="grid  grid-cols-12 h-full">
        <div className="col-span-1 flex flex-col items-center">
          {/* CHANNELS */}
          <div className="bg-blue-400 text-white font-semibold text-3xl w-14 h-14 flex items-center justify-center rounded-2xl mb-2 cursor-pointer hover:bg-blue-500 transition duration-300 ease-out">
            M
          </div>
          <div className="h-0.5 w-6/12 bg-gray-600 rounded mb-2"></div>
          <div className="bg-red-400 text-white font-semibold text-3xl w-14 h-14 flex items-center justify-center rounded-full mb-2 cursor-pointer hover:bg-red-500 transition duration-300 ease-out">
            T
          </div>
          <div className="bg-red-400 text-white font-semibold text-3xl w-14 h-14 flex items-center justify-center rounded-full mb-2 cursor-pointer hover:bg-red-500 transition duration-300 ease-out">
            S
          </div>
          <div className="bg-red-400 text-white font-semibold text-3xl w-14 h-14 flex items-center justify-center rounded-full cursor-pointer hover:bg-red-500 transition duration-300 ease-out">
            Y
          </div>
        </div>

        <div className="col-span-11 bg-gray-800 w-full h-full rounded-tl-md">
          {/* RIGHT SIDE */}S
        </div>
      </div>
    </div>
  );
}
