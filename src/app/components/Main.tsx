import React from "react";
import CTAButton from "./CTAButton";
import Image from "next/image";
import HeroImage from "./../../../public/HeroImage.png";

const Main = () => {
  return (
    <div className="w-full px-8 h-full">
      <div className="justify-center items-center flex pt-[172px] pb-[140px]">
        <div className="max-w-[1000px] flex flex-col text-center text-balance items-center gap-8">
          {/* Title heading */}
          <h1 className="text-gray-100 text-5xl font-medium">
            Designs that shine with{" "}
            <span className="bg-gradient-to-r from-gray-100 to-yellow-500 bg-clip-text text-transparent">
              dynamic intelligence
            </span>
            .
          </h1>

          <h1 className="text-slate-400">
            Atomic Design System is a carefully crafted UI library with usage
            guidelines and Figma plugin for easier customization. Build and
            prototype your apps faster than ever before.
          </h1>

          <CTAButton />
          <div className="mt-8">
            <div className="glass-container">
              <div className="absolute inset-0 -z-10 bg-blue-500/30 blur-2xl filter animate-pulse" />
              <Image
                className="rounded-lg"
                src={HeroImage}
                alt="hero image"
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
