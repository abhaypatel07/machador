import Lottie from "lottie-react";
import React from "react";
import Efficiency from "../../../public/animations/Efficiency.json";
import Onbording from "../../../public/animations/Onbording.json";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const BenefitsAndAdvantages = () => {
  useGSAP(() => {
    gsap.from("#benif-card1", {
      x:300,
      scrollTrigger: {
        trigger: "#benif-card1",
        end: "bottom 50%",
        start: "top 80%",
        scrub: 1,
      },
    });
    gsap.from("#benif-card2", {
      x:-300,
      scrollTrigger: {
        trigger: "#benif-card2",
        end: "bottom 50%",
        start: "top 80%",
        scrub: 1,
      },
    });
  }, []);
  return (
    <div className="w-full mt-6">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark sm:text-4xl md:text-[40px]">
                Benefits And Advantages
              </h2>
              <p className="text-base text-body-color">
                Machador secures and revitalizes your corporate knowledge
                through advanced AI-driven chatbots.
              </p>
              <p className="text-base text-body-color">
                Preserve institutional knowledge and empower your workforce with
                Machador.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center flex-col gap-5 p-5">
        <div class="justify-center h-auto items-center filter brightness-60 overflow-hidden m-4 bg-blue-500 w-full bg-opacity-20 rounded-lg shadow-lg backdrop-blur-md border border-white border-opacity-30 p-5 gap-4 flex flex-col md:flex-row md:max-w-xl hover:scale-110 transition-all" id="benif-card1">
          <Lottie animationData={Efficiency} loop={true} />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              Increase efficiency with Machador's automation and AI-driven
              workflows.
            </h5>
            <p class="mb-3 font-normal text-gray-700">
              Boost your productivity, secure your knowledge, and save costs.
            </p>
          </div>
        </div>
        <div class="justify-center h-auto items-center filter brightness-60 overflow-hidden m-4 bg-blue-500 w-full bg-opacity-20 rounded-lg shadow-lg backdrop-blur-md border border-white border-opacity-30 p-5 gap-4 flex flex-col md:flex-row md:max-w-xl hover:scale-110 transition-all" id="benif-card2">
          <Lottie animationData={Onbording} loop={true} />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              Accelerate onboarding with Machador's AI chatbots and personalized
              training.
            </h5>
            <p class="mb-3 font-normal text-gray-700">
              With Machador, streamline your processes and stay ahead of the
              competition.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsAndAdvantages;
