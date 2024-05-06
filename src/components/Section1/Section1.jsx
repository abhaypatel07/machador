import React from "react";
import Hero from "./Hero";
import { Josefin_Sans } from "next/font/google";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const josefin = Josefin_Sans({
  weight: "400",
  subsets: ["latin"],
});

const Section1 = () => {
  useGSAP(() => {
    gsap.to("#upDown", {
      y: -20,
      duration: 3,
      ease: "power1",
      repeat: -1,
      yoyo: true,
      delay: 1,
    });
    gsap.to("#rotate", {
      rotate: 360,
      duration: 8,
      ease: "power1",
      repeat: -1,
      yoyo: true,
      delay: 1,
    });
    gsap.to("#leftRight", {
      x: -10,
      duration: 3,
      ease: "power1",
      repeat: -1,
      yoyo: true,
      delay: 1,
    });
    gsap.to("#scale", {
      scale: 0.9,
      rotate: 90,
      duration: 3,
      ease: "power1",
      repeat: -1,
      yoyo: true,
      delay: 1,
    });
    gsap.to("#rote", {
      scale: 0.9,
      rotate: 360,
      duration: 9,
      ease: "power1",
      repeat: -1,
      yoyo: true,
      delay: 1,
    });
  }, []);
  return (
    <div className="relative flex flex-col-reverse mt-7 xl:flex-row justify-center items-center w-full xl:h-[100vh] md:p-5 p-2">
      <div className="lg:text-6xl text-4xl tracking-tighter md:ml-16 transition-all xl:ml-28 ml-5 mt-10 z-20">
        <p
          className={`${josefin.className} text-black opacity-50 hover:opacity-70`}
        >
          Empower Your Onboarding Experience
        </p>
        <p
          className={`${josefin.className} text-black opacity-50 hover:opacity-70`}
        >
          with <span className="text-blue-700">AI</span> in Record Time
        </p>

        <p
          className={` text-left tracking-tighter text-base p-2`}
        >
          A single copilot for Any Enterprise Workflow, No AI Expertise
          required!
        </p>
        <button class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-black transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
          <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#10A3D1] group-hover:h-full"></span>
          <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
            <svg
              class="w-5 h-5 text-green-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
            <svg
              class="w-5 h-5 text-green-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span class="relative w-full text-left text-sm transition-colors duration-200 ease-in-out group-hover:text-white tracking-wide">
            CREATE YOUR FIRST ASSISTANT
          </span>
        </button>
      </div>
      <Hero />
      <Image
        src={"/images/pic1.png"}
        alt="element"
        height={70}
        width={70}
        className="absolute top-[20%] left-[20%] opacity-50"
        id="upDown"
      />
      <Image
        src={"/images/pic2.png"}
        alt="element"
        height={80}
        width={80}
        className="absolute top-[80%] left-[30%] hidden md:block opacity-50"
        id="leftRight"
      />
      <Image
        src={"/images/pic3.png"}
        alt="element"
        height={75}
        width={75}
        className="absolute top-[90%] left-[70%] opacity-50"
        id="upDown"
      />
      <Image
        src={"/images/pic4.png"}
        alt="element"
        height={90}
        width={90}
        className="absolute top-[18%] left-[50%] opacity-50"
        id="rote"
      />
      <Image
        src={"/images/pic5.png"}
        alt="element"
        height={100}
        width={100}
        className="absolute top-[70%] left-[10%] hidden md:block opacity-50"
        id="rotate"
      />
      <Image
        src={"/images/pic6.png"}
        alt="element"
        height={100}
        width={100}
        className="absolute top-[50%] left-[85%] opacity-50"
        id="scale"
      />
    </div>
  );
};

export default Section1;
