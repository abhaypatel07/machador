import React, { useRef, useState } from "react";

const Section8 = () => {

  return (
    <footer className="bg-white rounded-sm shadow m-4 ">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-900 sm:text-center">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-900 sm:mt-0">
          <li>
              <a href="#" className="hover:underline me-4 md:me-6">About</a>
          </li>
          <li>
              <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
          </li>
          <li>
              <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
          </li>
          <li>
              <a href="#" className="hover:underline">Contact</a>
          </li>
      </ul>
      </div>
  </footer>
  );
};

export default Section8;
