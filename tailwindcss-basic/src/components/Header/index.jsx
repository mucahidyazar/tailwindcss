import React, { useState } from "react";

export default function Header() {
  const [isMenu, setMenu] = useState(false);

  return (
    <div className="bg-grey-100 text-gray-600 font-nunito grid md:grid-cols-3">
      <div className="md:col-span-1 md:flex md:justify-end">
        <nav className="text-right">
          <div className="flex justify-between items-center border-b border-gray-100">
            <h1 className="font-bold uppercase p-4">
              <a
                href="/"
                className=" hover:text-gray-700 text-green-500 sm:text-red-500 lg:text-blue-500 text-sm md:text-xl"
              >
                Food Ninja
              </a>
            </h1>
            <div
              className="px-4 cursor-pointer md:hidden"
              onClick={() => setMenu((prev) => !prev)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
          </div>
          <ul
            className={`text-sm mt-6 ${isMenu ? "block" : "hidden"} md:block`}
          >
            <li className="text-gray-700 font-bold py-1">
              <a
                href="#"
                className="px-4 flex justify-end border-r-4 border-red-400"
              >
                <span>Home</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </a>
            </li>
            <li className="py-1">
              <a
                href="#"
                className="px-4 flex justify-end border-r-4 border-white"
              >
                <span>About</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </a>
            </li>
            <li className="py-1">
              <a
                href="#"
                className="px-4 flex justify-end border-r-4 border-white"
              >
                <span>Contact</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <main className="px-16 py-6 md:col-span-2">
        <div className="flex justify-center md:justify-start">
          <a
            href="#"
            className="text-red-300 btn border-red-400 border-2 hover:bg-red-400 hover:text-white"
          >
            Log in
          </a>
          <a
            href="#"
            className="text-red-100 ml-2 btn border-red-400 border-2 hover:bg-red-400 hover:text-white"
          >
            Sign up
          </a>
        </div>

        {/* <div className="flex items-center justify-center">
          <div className="bg-green-500 h-4 w-6"></div>
          <div className="bg-red-500 h-8 w-6"></div>
          <div className="bg-blue-500 h-12 w-6"></div>
        </div> */}

        <header>
          <h2 className="text-gray-700 text-6xl font-semibold">Recipes</h2>
          <h3 className="text-2xl font-semibold">For Ninjas</h3>
        </header>

        <div>
          <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
            Latest Recipes
          </h4>
          <div className="mt-8 grid grid-cols-1 gap-2 lg:grid-cols-3">
            {/* Cards go here */}
            <div className="card">
              <img
                className="max-h-40 w-full object-cover"
                src="./img/stew.jpg"
                alt=""
              />
              <div className="flex flex-col p-2">
                <span className="font-bold">5 Bean Chilli Stew</span>
                <span className="font-light text-gray-500 text-sm">
                  Recipe by Mario
                </span>
              </div>
              <div className="badge">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>25 mins</span>
              </div>
            </div>
            <div className="card">
              <img
                className="max-h-40 w-full object-cover"
                src="./img/noodles.jpg"
                alt=""
              />
              <div className="flex flex-col p-2">
                <span className="font-bold">Veg Noodles</span>
                <span className="font-light text-gray-500 text-sm">
                  Recipe by Mario
                </span>
              </div>
              <div className="badge">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>13 mins</span>
              </div>
            </div>
            <div className="card">
              <img
                className="max-h-40 w-full object-cover"
                src="./img/curry.jpg"
                alt=""
              />
              <div className="flex flex-col p-2">
                <span className="font-bold">Tofu Curry</span>
                <span className="font-light text-gray-500 text-sm">
                  Recipe by Mario
                </span>
              </div>
              <div className="badge">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>18 mins</span>
              </div>
            </div>
          </div>

          <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
            Most Popular
          </h4>
          <div className="mt-8">{/* Cards go here */}</div>

          <div className="flex justify-center">
            <div className="btn bg-green-100 text-gray-600 transform hover:scale-125 hover:bg-opacity-50 shadow-md hover:shadow-lg transition ease-out duration-500">
              Load more
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
