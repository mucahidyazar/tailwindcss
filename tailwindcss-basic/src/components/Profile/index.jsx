import React from "react";

export default function Profile() {
  return (
    <div className="border rounded-2xl mx-auto shadow-lg px-8 py-4 space-x-16 flex max-w-md">
      <img
        className="rounded-full h-24 object-center"
        src="/img/chicago.jpg"
        alt="Chicago"
      />
      <div className="flex h-24 flex-col justify-around">
        <h4 className="font-bold text-black">Mucahid Yazar</h4>
        <p className="font-semibold text-gray-700 text-md">
          Frontend Developer
        </p>
        <button className="border border-gray-400 text-purple-600 font-semibold text-sm rounded-full py-1 hover:bg-purple-500 hover:text-white transition">
          Message
        </button>
      </div>
    </div>
  );
}

const A = (
  <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
    <img
      className="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0"
      src="/logo192.png"
      alt="Woman's Face"
    />
    <div className="text-center space-y-2 sm:text-left">
      <div className="space-y-0.5">
        <p className="text-lg text-black font-semibold">Erin Lindford</p>
        <p className="text-gray-500 font-medium">Product Engineer</p>
      </div>
      <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
        Message
      </button>
    </div>
  </div>
);
