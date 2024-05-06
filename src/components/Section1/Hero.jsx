"use client";
import { Canvas} from "@react-three/fiber";
import React, { Suspense, useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import { Robo } from "./robo";

const Hero = () => {
  const modelRef = useRef();

  return (
    <div
      className="flex justify-center items-center h-[60vh] md:h-[80%] xl:h-[90%] w-[100%] xl:w-[70%] z-20"
      style={{
        background:
          "radial-gradient(circle, rgba(16, 163, 209, 0.5) 0%, rgba(16, 163, 209, 0) 70%)",
      }}
    >
      <Canvas className="flex justify-center items-center">
        <ambientLight position={[0, 0, 0]} intensity={1000} />
        <pointLight position={[0, 0, 20]} intensity={1000} />
        <pointLight position={[0, 0, -20]} intensity={1000} />
        <pointLight position={[-20, 0, 0]} intensity={500} />
        <pointLight position={[20, 0, 0]} intensity={500} />
        <OrbitControls
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI - Math.PI / 6}
          enableZoom={false}
        />
        <Suspense fallback={null}>
          <group
            ref={modelRef}
            scale={[0.19, 0.19, 0.19]}
            position={[0, -4, 0]}
          >
            <Robo />
          </group>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Hero;
