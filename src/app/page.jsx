"use client";
import BenefitsAndAdvantages from "@/components/BenefitsAndAdvantages/BenefitsAndAdvantages";
import Footer from "@/components/Footer/Footer";
import GDPRCompliance from "@/components/GDPRCompliance/GDPRCompliance";
import IntroductoryScene from "@/components/IntroductoryScene/IntroductoryScene";
import MachadorSolution from "@/components/MachadorSolution/MachadorSolution";
import Navbar from "@/components/Navbar";
import ProblemIllustration from "@/components/ProblemIllustration/ProblemIllustration";
import Section1 from "@/components/Section1/Section1";
import Section6 from "@/components/Section6/Section6";
import { Poppins } from "next/font/google";
import { useEffect } from "react";

const poppins = Poppins({
  weight: "500",
  subsets: ["latin"],
});

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <main
      className={`${poppins.className} max-w-[100vw] overflow-hidden w-full text-black" id="mainBox`}
    >
      <Navbar />
      <Section1 />
      <IntroductoryScene />
      <ProblemIllustration />
      <MachadorSolution />
      <GDPRCompliance />
      <BenefitsAndAdvantages />
      <Section6 />
      <Footer />
    </main>
  );
}

// bg-[#10A3D1]
// bg-[#00D5BB]
