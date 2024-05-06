import React from "react";

const Cta = () => {
  return (
    <div className="w-full max-h-screen overflow-hidden flex justify-center items-center p-4">
      <div className="flex justify-center items-center filter brightness-60 overflow-hidden m-4 bg-blue-500 w-full bg-opacity-20 rounded-lg shadow-lg backdrop-blur-md border border-white border-opacity-30 p-5 gap-4">
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div class="mx-auto max-w-screen-sm text-center">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 ">
              Start your free trial today
            </h2>
            <p class="font-light text-gray-500  md:text-lg">
              Join the Future Today! Register for Machador Beta.
            </p>
            <p class="mb-6 font-light text-gray-500  md:text-lg">
              Take the first step towards revolutionizing your knowledge
              management.
            </p>
            <button class="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none ">
              Free trial for 30 days
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
