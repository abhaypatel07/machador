"use client";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Employeeleave from "../../../public/animations/Employeeleave.json";
import Lottie from "lottie-react";

gsap.registerPlugin(ScrollTrigger);

export default function ProblemIllustration() {
  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#problemIl",
        scrub: true,
        end: "top 10%",
        start: "top 30%",
        pin: true,
      },
    });
    timeline
      .from("#probContainer", { scale: 0 });
  }, []);

  return (
    <div
      className="w-full overflow-hidden flex justify-center items-center p-8 mt-10"
      id="problemIl"
    >
      <div
        className="flex justify-center h-auto flex-col items-center gap-3"
        id="probContainer"
      >
        <div className="md:w-1/2 w-full">
          <Lottie animationData={Employeeleave} loop={true} />
        </div>
        <div
          className="text-xl md:text-2xl font-bold flex flex-col justify-center items-center text-black"
          id="annually"
        >
          <p data-scroll data-scroll-speed="0.7">
            Annually, 20% of critical corporate knowledge is lost.
          </p>
          <p data-scroll data-scroll-speed="0.7">
            When employees leave, valuable insights and expertise go with them.
          </p>
        </div>
      </div>
    </div>
  );
}
