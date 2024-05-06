import React from "react";
import GDRP from "../../../public/animations/GDRP.json";
import Lottie from "lottie-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GDPRCompliance = () => {
  useGSAP(() => {
    gsap.from("#gdrp-par", {
      scale: 0,
      scrollTrigger: {
        trigger: "#gdrp-par",
        end: "bottom 20%",
        start: "top 80%",
        scrub: 1,
      },
    });
  }, []);
  return (
    <div
      className="w-full overflow-hidden flex justify-center items-center p-8"
      id="gdrp-par"
    >
      <div className="flex justify-center flex-col-reverse md:flex-row items-center filter brightness-60 overflow-hidden m-4 bg-blue-500 w-full bg-opacity-20 rounded-lg shadow-lg backdrop-blur-md border border-white border-opacity-30 p-5 gap-4">
        <div className="w-full md:w-1/2">
          <h4 className="mb-[14px] text-3xl font-semibold text-dark self-start">
            GDPR Compliance:
          </h4>

          <p className="text-xl">
            Fully GDPR compliant – your knowledge is secure and protected.
          </p>
          <p className="text-xl">
            Rest assured, your data is handled with the highest level of
            security.
          </p>
        </div>
        <div className="w-full md:w-1/3" id="gdpr-svg">
          <Lottie animationData={GDRP} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default GDPRCompliance;
