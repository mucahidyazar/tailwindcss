import React from "react";

export default function Card() {
  return (
    <div className="bg-gray-300">
      <div className="bg-gray-100 lg:grid grid-cols-2 2xl:grid-cols-5">
        <div className="px-8 py-12 max-w-md bg-gray-100 sm:bg-yellow-300 md:bg-green-300 lg:bg-pink-300 xl:bg-blue-300 2xl:bg-red-300 sm:max-w-xl lg:max-w-full mx-auto lg:px-12 lg:py-24 xl:mr-0 2xl:col-span-2">
          <div className="xl:max-w-xl">
            <img className="h-10" src="/img/logo.svg" alt="Workcation" />
            <img
              className="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover object-center lg:hidden"
              src="/img/beach-work.jpg"
              alt="Woman workcationing on the beach"
            />
            <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">
              You can work from anywhere.
              <br class="hidden lg:inline" />
              <span class="text-indigo-500">Take advantage of it.</span>
            </h1>
            <p className="mt-6 text-gray-600 sm:mt-4 sm:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              facilis provident, culpa laborum praesentium nesciunt, repudiandae
              facere sequi dolorem a perspiciatis odit illum mollitia sit id
              commodi ex quibusdam eum, placeat corporis consequatur dicta
              consectetur. Quibusdam beatae minus suscipit ea reprehenderit
              aliquam impedit, molestiae similique quos architecto consectetur,
              rerum illo.
            </p>

            <div className="mt-4 sm:mt-6">
              <a
                href="#"
                className="inline-block bg-indigo-500 text-white px-5 py-3 shadow-lg rounded-lg uppercase font-semibold text-sm tracking-wider sm:text-base"
              >
                Book Yoor Escape
              </a>
            </div>
          </div>
        </div>
        <div className="hidden relative lg:block 2xl:col-span-3">
          <img
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/img/beach-work.jpg"
            alt="Woman workcationing on the beach"
          />
        </div>
      </div>
    </div>
  );
}
