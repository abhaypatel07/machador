import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Josefin_Sans } from "next/font/google";
import ScrollTrigger from "gsap/ScrollTrigger";
import { FaClone, FaLayerGroup, FaCode, FaShieldVirus, FaWrench, FaDatabase  } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const cardsData = [
  {
    title: "Unlimited Clones",
    icon: <FaClone color="#1f2937" size={20} />,
    alt: "Endless Cards",
    description: "Create endless duplicates of your projects or chatbots, allowing you to expand your reach and capabilities without any limits. Perfect for growing your digital presence easily."
  },
  {
    title: "Multiple Platforms Integration",
    icon: <FaLayerGroup color="#1f2937" size={20} />,
    alt: "effortlessly connects your documents",
    description: "This feature effortlessly connects your documents & with a variety of other platforms, such as slack, notion, google drive and more, ensuring a seamless experience across the board for your users.",
  },
  {
    title: "No Code Required",
    icon: <FaCode color="#1f2937" size={20} />,
    alt: "24/7 Support",
    description:
      "Even if you have never written a line of code in your life, you can still use this tool. It is designed with simplicity in mind, enabling you to set everything up with just a few clicks."
  },
  {
    title: "Advanced Security",
    icon: <FaShieldVirus color="#1f2937" size={20} />,
    alt: "Your data is protected",
    description:
      "Your data is protected with the latest in security technology, giving you peace of mind. This means your information is safe from hackers and other online threats."
  },
  {
    title: "Powerful Communication Network",
    icon: <FaWrench color="#1f2937" size={20} />,
    alt: "Communicate more effectively",
    description: "Communicate more effectively than ever with our robust network, ensuring that your messages are delivered quickly and clearly, whether they are to customers, team members, or partners."
  },
  {
    title: "Database Backups",
    icon: <FaDatabase color="#1f2937" size={20} />,
    alt: "Automatically saves copies",
    description:"Automatically saves copies of your important data at regular intervals, meaning you wll never have to worry about losing your work due to a crash or other unexpected problems."
  },
];

const josefin = Josefin_Sans({
  weight: "700",
  subsets: ["latin"],
});

const Section4 = () => {
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
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Perks Of Using Machador</h2>
          <h2
            className={`${josefin.className} font-extrabold text-center text-4xl`}
            id="text2"
          >
          Everything you need under one platform with 100% results
          </h2> 
            <p className="mt-6 text-lg leading-8 text-gray-600">
            We provide you with multiple solutions for your daily workload. You are just one click away from increasing your productivity.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {cardsData.map((card) => (
                <div key={card.title} className="relative pl-16 pt-3 hover:shadow-2xl rounded-md p-2">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-3 top-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-[rgba(16,163,209,1)] to-[rgba(0,213,187,1)]">
                      <div className="text-white">{card.icon}</div>
                    </div>
                    {card.title}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{card.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
