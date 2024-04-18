import React from "react";
import CTAButton from "./CTAButton";
import Image from "next/image";
import HeroImage from "./../../../public/hero-image.png";

const Main = () => {
  return (
    <div className="w-full min-h-screen px-8">
      <div className="h-full justify-center items-center flex pt-[184px]">
        <div className="max-w-[1000px] flex flex-col text-center text-balance items-center gap-8">
          <h1 className="text-gray-100 text-5xl font-medium">
            Designs that shine with{" "}
            <span className="bg-gradient-to-r from-gray-100 to-yellow-500 bg-clip-text text-transparent">
              dynamic intelligence
            </span>
            .
          </h1>

          <h1 className="text-slate-400">
            Cube Design System is a carefully crafted UI library with usage
            guidelines and Figma plugin for easier customization. Build and
            prototype your apps faster than ever before.
          </h1>

          <CTAButton />
          <div className="mt-8">
            <div className="glass-container">
              <Image className="rounded-lg" src={HeroImage} alt="hero image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
