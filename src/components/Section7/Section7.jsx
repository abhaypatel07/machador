import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Josefin_Sans } from "next/font/google";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  FaClone,
  FaLayerGroup,
  FaCode,
  FaShieldVirus,
  FaWrench,
  FaDatabase,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const plans = [
  {
    title: "Basic Plan",
    description: "The essentials to provide your best work for clients.",
    pricing: "€8.99",
    steps: [
      "Customized chatbot for company onboarding system",
      "Essential features and functionalities",
      "Email support Suitable for small businesses or startups with minimal onboarding needs or low hiring volumes",
      "20k tokens per month",
    ],
  },
  {
    title: "Standard Plan",
    description: "A plan that scales with your rapidly growing business.",
    pricing: "€15.99",
    steps: [
      "Customized chatbot for company onboarding system",
      "Additional features such as analytics, reporting, and integration options",
      "Priority email support",
      "Suitable for medium-sized businesses with moderate onboarding requirements and average hiring volumes",
      "50k tokens per month",
    ],
  },
  {
    title: "Premium Plan",
    description: "Dedicated support and infrastructure for your company.",
    pricing: "€29.99",
    steps: [
      "Highly customized chatbot tailored to specific client needs",
      "Advanced features like AI-driven decision-making, multi-platform integration, and advanced analytics",
      "Priority email and phone support",
      "Regular performance reviews and optimizations",
      "100k tokens per month",
    ],
  },
];

const josefin = Josefin_Sans({
  weight: "700",
  subsets: ["latin"],
});

const Section7 = () => {
  const [selectedPlan, setSelectedPlan] = useState(plans[0]);
  // const setPlan = (plan) => {
  //   setSelectedPlan(plan);
  // }

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
    <div className="w-full p-10 lg:p-20" ref={scrollRef}>
      <div className="bg-blue-500 w-full bg-opacity-20 rounded-lg shadow-lg backdrop-blur-md border border-white border-opacity-30 lg:py-24 sm:py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600 mt-3">
              Testimonials
            </h2>
            <h2
              className={`${josefin.className} font-extrabold text-center text-4xl`}
              id="text2"
            >
              See What people are saying about us!
            </h2>
          </div>
          <div className="flex justify-center gap-6 mx-auto max-w-2xl sm:mt-10 lg:mt-10 lg:max-w-4xl">
            <div className="w-full p-2 max-w-sm bg-white border border-gray-200 rounded-lg shadow   transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-sky-200 duration-300">
              <div className="flex flex-col items-center pb-10">
                <img
                  className="w-24 h-24 mb-3 rounded-full shadow-lg"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Bonnie image"
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900 ">
                  Bonnie Green
                </h5>
                <span className="text-sm text-gray-500 ">Visual Designer</span>
                <div className="flex mt-4 md:mt-6 justify-center align center">
                  <p className="p-3 text-sm">
                    “Implementing Machador into our existing systems was
                    incredibly smooth, and we saw immediate improvements in our
                    onboarding efficiency. The AI is ability to personalize the
                    process for each new hire is remarkable, ensuring they feel
                    valued and informed from day one.”
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full p-2 max-w-sm bg-white border border-gray-200 rounded-lg shadow  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-sky-200 duration-300">
              <div className="flex flex-col items-center pb-10">
                <img
                  className="w-24 h-24 mb-3 rounded-full shadow-lg"
                  src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80"
                  alt="Jessica image"
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900 ">
                  Jessica J.
                </h5>
                <span className="text-sm text-gray-500">Visual Designer</span>
                <div className="flex mt-4 md:mt-6 justify-center align center">
                  <p className="p-3 text-sm">
                    “Before Machador, our onboarding process was cumbersome and
                    time-consuming. Machador is AI-driven approach has
                    revolutionized how we welcome new team members,
                    significantly reducing manual tasks and allowing us to focus
                    on creating meaningful first experiences. It is a
                    game-changer for our HR department.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section7;
