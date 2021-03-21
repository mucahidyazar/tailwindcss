import React from "react";

export default function index() {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <div className="flex-shrink-0">
        <img src="/logo192.png" alt="React Chat Logo" className="h-12 w-12" />
      </div>
      <div>
        <div className="text-xl font-medium text-black">React Chat Logo</div>
        <div className="text-gray-500">You have a new message</div>
      </div>
    </div>
  );
}
