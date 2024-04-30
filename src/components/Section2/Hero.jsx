"use client";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import { Modelfirst } from "../Robot";

const Hero = () => {
  const modelRef = useRef();

  return (
    <div
      className="flex justify-center items-center lg:h-[50vh] w-[80vw] lg:w-[30%]">
      <Canvas className="flex justify-center items-center w-[100%]">
        <ambientLight position={[0, 0, 0]} intensity={1} />
        <OrbitControls
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI - Math.PI / 6}
          enableZoom={false}
        />
        <Suspense fallback={null}>
          <group
            ref={modelRef}
            scale={[1.9, 1.9, 1.9]}
            position={[0, -1, 0]}
          >
            <Modelfirst />
          </group>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Hero;
