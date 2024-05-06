import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TiThMenu } from "react-icons/ti";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleNav = () => {
    setOpen(!open);
  };
  useGSAP(() => {
    gsap.from("#navBar", {
      y: -100,
      opacity: 0,
      duration: 1.5,
      delay: 0,
    });
  }, []);

  return (
    <div
      className="w-full h-[95px] p-3 flex justify-center fixed z-30"
      id="navBar"
    >
      <div className="w-[95%] lg:w-[90%] rounded-md flex justify-between px-6 items-center bg-white shadow-md">
        <div>
          <Image
            src={"/images/logoo.webp"}
            alt="logo"
            height={50}
            width={200}
            className="contrast-100 brightness-80 hue-rotate-15"
          />
        </div>
        <div className="menus xl:block hidden">
          <ul className="flex gap-5 text-black">
            {["How it Works", "Be a Machador", "Company", "Pricing"].map(
              (item, index) => {
                return (
                  <li key={index}>
                    <Link
                      href={"/"}
                      className="text-gray-500 hover:text-gray-900 font-medium text-sm transition-all"
                    >
                      {item}
                    </Link>
                  </li>
                );
              }
            )}
          </ul>
        </div>
        <div className="last gap-2 xl:flex hidden">
          <button className="bg-transparent text-sm transition-all hover:bg-[#00D5BB] text-blue-700 rounded-full font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent">
            Get in touch
          </button>
          <button className="bg-[#10A3D1] text-sm transition-all hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Login
          </button>
        </div>
        <div className="xl:hidden relative">
          {open ? (
            <IoCloseSharp color="#10A3D1" size={32} onClick={toggleNav} />
          ) : (
            <TiThMenu color="#10A3D1" size={32} onClick={toggleNav} />
          )}
          {open && (
            <div className="menu flex-col gap-3 bg-white absolute top-[180%] right-0 w-[80vw] rounded-md p-5">
              <ul className="flex flex-col gap-5 text-black">
                {["How it Works", "Be a Machador", "Company", "Pricing"].map(
                  (item, index) => {
                    return (
                      <li key={index}>
                        <Link
                          href={"/"}
                          className="text-gray-500 hover:text-gray-900 font-medium text-sm transition-all"
                        >
                          {item}
                        </Link>
                      </li>
                    );
                  }
                )}
              </ul>
              <button className="bg-transparent text-sm transition-all hover:bg-[#00D5BB] text-blue-700 rounded-full font-semibold hover:text-white py-2 px-4 mt-3 border border-blue-500 hover:border-transparent">
                Get in touch
              </button>
              <button className="bg-[#10A3D1] text-sm transition-all ml-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Login
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
