"use client";
import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function IntroductoryScene() {
  const background = useRef(null);
  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: true,
        start: "top -20%",
        end: "+=700px",
      },
    });
    timeline
      .from(background.current, { clipPath: `inset(50%)`, x: -500 })
      .from("#text", { scale: 0 });
    gsap.to("#upDown", {
      y: -20,
      rotate:10,
      duration: 3,
      ease: "power1",
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <div className="relative w-full max-h-screen flex justify-center items-center overflow-hidden">
      <div className="w-full flex justify-center items-center h-screen filter brightness-60">
        <Image
          ref={background}
          src={"/images/future.jpg"}
          fill={true}
          alt="background image"
          priority={true}
          className="rounded-xl object-contain shadow-md"
        />
        <Image
          src={"/images/drone.png"}
          id="upDown"
          alt="intro image"
          height={200}
          width={200}
          priority={true}
          className="absolute bottom-0 right-8 rotate-12"
        />
        <div
          className="absolute text-base md:text-2xl font-bold flex flex-col justify-center items-center lg:-translate-y-8 md:p-0 p-5"
          id="text"
        >
          <p data-scroll data-scroll-speed="0.7">
            Welcome to the Future of Knowledge Management.
          </p>
          <p data-scroll data-scroll-speed="0.7">
            In today's fast-paced world, preserving and sharing knowledge is
            more crucial than ever.
          </p>
        </div>
      </div>
    </div>
  );
}
