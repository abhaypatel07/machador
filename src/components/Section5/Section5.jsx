import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Josefin_Sans } from "next/font/google";
import ScrollTrigger from "gsap/ScrollTrigger";
import { FaClone, FaLayerGroup, FaCode, FaShieldVirus, FaWrench, FaDatabase  } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const cardsData = [
  {
    title: "AI Automated Answers:",
    image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-2.png",
    description: "Imagine a robot that can answer most of the questions your new employee have. This means you don't have to do it yourself, saving you time."
  },
  {
    title: "Always Available",
    image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-4.png",
    description: "This smart robot doesn't sleep! It can help your employee anytime, making sure they always get the help they need."
  },
  {
    title: "Contextual Suggestions",
    image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-2.png",
    description: "Get AI-powered suggestions based on your writing context."
  },
];

const josefin = Josefin_Sans({
  weight: "700",
  subsets: ["latin"],
});

const Section5 = () => {
  const scrollRef = useRef();
  useGSAP(
    () => {
      gsap.from("#text2", {
        opacity: 0,
        y: 200,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#text2",
          start: "bottom bottom",
          end: "top 70%",
          scrub: true,
        },
      });
    },
    { scope: scrollRef },
    []
  );

  return (
    <div className="w-full min-h-[100vh] p-20" ref={scrollRef}>
      <div className="bg-blue-500 w-full bg-opacity-20 rounded-lg shadow-lg backdrop-blur-md border border-white border-opacity-30 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">SAVE TIME AND MONEY
          </h2>
          <h2
            className={`${josefin.className} font-extrabold text-center text-4xl`}
            id="text2"
          >
          Streamline your onboarding process by resolving up to 80% of inquiries with AI.
          </h2> 
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Experience effortless onboarding and provide round-the-clock assistance to your clients, all without the need for coding.
            </p>  
          </div>
          <div className="mx-auto max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <aside aria-label="Related articles" className="shadow-2xl m-5">
              <div className="p-4 mx-auto max-w-screen-xl">
                  <div className="grid gap-6 grid-cols-3">
                    {
                      cardsData.map((data) => (
                        <article className="max-w-xs">
                            <a href="#">
                                <img src={data.image} className="mb-5 rounded-lg hover:scale-125 transition duration-500 cursor-pointer" alt="Image 1" />
                            </a>
                            <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900">
                                <a href="#">{data.title}</a>
                            </h2>
                            <p className="mb-4 text-gray-800">{data.description}</p>
                        </article>
                      ))
                    }  
                  </div>
              </div>
              <article className="">
                  <a href="#" className="flex justify-center">
                      <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-4.png" className="mb-5 rounded-lg hover:scale-125 transition duration-500 cursor-pointer" width={"60%"} height={"100px"} alt="Image 1" />
                  </a>
                  <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900">
                      <a href="#">Your Clone for you 24/7, In many faces</a>
                  </h2>
                  <p className="mb-4 text-gray-500 p-3">Since the AI handles many of the questions, you don't need to spend as much time and money training new staff on common inquiries.</p>
              </article>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
