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
    description: "Essential features for streamlined knowledge management.",
    pricing: "€8.99",
    steps: [
      "Customized chatbot for company onboarding system",
      "Essential features and functionalities",
      "Email support",
      "Suitable for small businesses or startups with minimal onboarding needs or low hiring volumes",
      "20k tokens per month",
    ],
  },
  {
    title: "Standard Plan",
    description: "Unlock enhanced features for seamless knowledge management.",
    pricing: "€15.99",
    steps: [
      "Advanced chatbot customization options",
      "Expanded features and functionalities",
      "Priority email and chat support",
      "Suitable for growing businesses or mid-sized companies with moderate onboarding requirements and hiring volumes",
      "50k tokens per month",
    ],
  },
  {
    title: "Premium Plan",
    description:
      "Experience the full power of Machador for comprehensive knowledge management.",
    pricing: "€29.99",
    steps: [
      "Fully customizable chatbot with AI-driven capabilities",
      "Extensive features and functionalities tailored to your needs",
      "Dedicated 24/7 support with a dedicated account manager",
      "Suitable for enterprises or large organizations with complex onboarding processes and high hiring volumes",
      "Unlimited tokens per month",
    ],
  },
];

const josefin = Josefin_Sans({
  weight: "700",
  subsets: ["latin"],
});

const Section6 = () => {
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
      gsap.from("#price-card", {
        opacity: 0.5,
        y: 200,
        scrollTrigger: {
          trigger: "#price-card",
          start: "top 100%",
          end: "top 80%",
          scrub: true,
        },
      });
    },
    { scope: scrollRef },
    []
  );

  return (
    <div className="w-full min-h-[100vh] p-10 lg:p-20" ref={scrollRef}>
      <div className="bg-blue-500 w-full bg-opacity-20 rounded-lg shadow-lg backdrop-blur-md border border-white border-opacity-30 lg:py-24 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div
            className="mx-auto max-w-2xl lg:text-center text-center"
            id="text2"
          >
            <h2 className="text-base font-semibold leading-7 text-indigo-600 mt-3">
              Pricing
            </h2>
            <h2
              className={`${josefin.className} font-extrabold text-center text-4xl`}
            >
              Tailored plans to suit your business needs
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Find the perfect plan to fit your budget and scale your operations
              effortlessly with Machador.{" "}
            </p>
          </div>
          <div
            className="mx-auto max-w-2xl sm:mt-10 lg:mt-10 lg:max-w-4xl"
            id="price-card"
          >
            <aside
              aria-label="Related articles"
              className="p-5 bg-blue-500 w-full bg-opacity-20 rounded-lg shadow-lg backdrop-blur-md border border-white border-opacity-30"
            >
              <div className="mx-auto max-w-screen-xl">
                <div class="md:flex">
                  <ul class="mt-4 flex-column space-y space-y-4 text-sm font-medium text-gray-500  md:me-4 mb-4 md:mb-0">
                    {plans.map((planData) => (
                      <li>
                        <button
                          onClick={() => {
                            setSelectedPlan(planData);
                          }}
                          class={`inline-flex items-center px-4 py-3 text-white  rounded-lg active w-full ${
                            planData.title === selectedPlan.title
                              ? `bg-blue-700`
                              : `bg-blue-400`
                          }`}
                          aria-current="page"
                        >
                          {planData.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                  <div class="p-2 text-medium text-gray-500  rounded-lg w-full">
                    <div className="mx-auto max-w-2xl rounded-3xl ring-1 ring-gray-200 lg:flex lg:max-w-none bg-white">
                      <div className="mx-auto">
                        <div className="mx-auto max-w-2xl rounded-3xl ring-1 ring-gray-200 lg:flex lg:max-w-none">
                          <div className="p-8 sm:p-10 lg:flex-auto">
                            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                              {selectedPlan.title}
                            </h3>
                            <p className="mt-6 text-base leading-7 text-gray-600">
                              {selectedPlan.description}
                            </p>
                            <div className="mt-10 flex items-center gap-x-4">
                              <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
                                What’s included
                              </h4>
                              <div className="h-px flex-auto bg-gray-100"></div>
                            </div>
                            <ul
                              role="list"
                              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                            >
                              {selectedPlan.steps.map((step) => (
                                <li className="flex">
                                  <svg
                                    className="h-6 w-5 flex-none text-indigo-600"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                  {step}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                              <div className="mx-auto max-w-xs px-8">
                                <p className="text-base font-semibold text-gray-600">
                                  Pay once, own it forever
                                </p>
                                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                  <span className="text-5xl font-bold tracking-tight text-gray-900">
                                    {selectedPlan.pricing}
                                  </span>
                                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                                    USD
                                  </span>
                                </p>
                                <a
                                  href="#"
                                  className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                  Get access
                                </a>
                                <p className="mt-6 text-xs leading-5 text-gray-600">
                                  Invoices and receipts available for easy
                                  company reimbursement
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
