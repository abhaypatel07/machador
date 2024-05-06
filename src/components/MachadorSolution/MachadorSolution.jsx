import Lottie from "lottie-react";
import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import security from "../../../public/animations/security.json";
import knowledge from "../../../public/animations/knowledge.json";
import workflow from "../../../public/animations/workflow.json";
import employe from "../../../public/animations/employe.json";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const Service = () => {
  useGSAP(() => {
    gsap.from("#solution", {
      scale: 0.5,
      scrollTrigger: {
        trigger: "#solution",
        scrub:1,
        start: "top 100%",
          end: "top 80%",
        pin: true,
      },
    });
  }, []);
  return (
    <div
      className="relative w-full overflow-hidden flex justify-center items-center p-8"
      id="solution"
    >
      <section className="pb-12 pt-20 lg:pb-[90px] lg:pt-[120px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap mb-9">
            <div className="w-full px-4">
              <div
                className="mx-auto mb-5max-w-[510px] text-center"
                id="sol-heading"
              >
                <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark sm:text-4xl md:text-[40px]">
                  How does Machador solve this?
                </h2>
                <p className="text-base text-body-color">
                  Machador secures and revitalizes your corporate knowledge
                  through advanced AI-driven chatbots.
                </p>
                <p className="text-base text-body-color">
                  Preserve institutional knowledge and empower your workforce
                  with Machador.
                </p>
              </div>
            </div>
          </div>

          <div
            className="h-auto grid grid-cols-1 lg:grid-cols-2 grid-rows-2 gap-4 px-0 lg:px-32"
            id="card-par"
          >
            <div className="h-auto px-4 w-auto" id="sol-card">
              <div className="mb-9 shadow-md rounded-[20px] overflow-hidden  flex justify-center items-center flex-col bg-white p-10 shadow-2 hover:shadow-lg md:px-7 xl:px-10">
                <div className="mb-8 w-[300px] overflow-hidden flex items-center justify-center rounded-2xl">
                  <Lottie animationData={knowledge} loop={true} />
                </div>
                <h4 className="mb-[14px] text-2xl font-semibold text-dark self-start">
                  Knowledge Preservation
                </h4>
                <p className="text-body-color">
                  With Machador, your company's institutional knowledge is
                  safeguarded and easily accessible. Say goodbye to lost
                  expertise and fragmented information.
                </p>
              </div>
            </div>
            <div className="h-auto px-4 w-full" id="sol-card-2">
              <div className="mb-9 w-full rounded-[20px] overflow-hidden  flex justify-center items-center flex-col bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
                <div className="mb-8 flex w-[300px] items-center justify-center rounded-2xl bg-primary">
                  <Lottie animationData={security} loop={true} />
                </div>
                <h4 className="mb-[14px] text-2xl font-semibold text-dark self-start">
                  Data Security
                </h4>
                <p className="text-body-color">
                  Machador secures your company's knowledge with advanced
                  encryption and security protocols, ensuring that your data
                  remains safe and protected at all times.
                </p>
              </div>
            </div>
            <div className="h-auto px-4 w-auto" id="sol-card-3">
              <div className="mb-9 shadow-md rounded-[20px] overflow-hidden  flex justify-center items-center flex-col bg-white p-10 shadow-2 hover:shadow-lg md:px-7 xl:px-10">
                <div className="mb-8 flex w-[300px] items-center justify-center rounded-2xl bg-primary">
                  <Lottie animationData={workflow} loop={true} />
                </div>
                <h4 className="mb-[14px] text-2xl font-semibold text-dark self-start">
                  Workflow Automation
                </h4>
                <p className="text-body-color">
                  Machador automates repetitive tasks and streamlines your
                  workflows, allowing your team to focus on high-value
                  activities and innovation.
                </p>
              </div>
            </div>
            <div className="h-auto px-4 w-auto" id="sol-card-4">
              <div className="mb-9 shadow-md rounded-[20px] overflow-hidden  flex justify-center items-center flex-col bg-white p-10 shadow-2 hover:shadow-lg md:px-7 xl:px-10">
                <div className="mb-8 flex w-[300px] items-center justify-center rounded-2xl bg-primary">
                  <Lottie animationData={employe} loop={true} />
                </div>
                <h4 className="mb-[14px] text-2xl font-semibold text-dark self-start">
                  Employee Empowerment
                </h4>
                <p className="text-body-color">
                  Empower your employees with Machador's intuitive interface and
                  AI-driven insights. Foster a culture of continuous learning
                  and growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
