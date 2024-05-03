import React from "react";
import CTAButton from "./CTAButton";
import Image from "next/image";
import HeroImage from "./../../../public/HeroImage.png";
import {
  FaMicrosoft,
  FaMeta,
  FaXTwitter,
  FaAmazon,
  FaFigma,
  FaGoogle,
} from "react-icons/fa6";

function Main() {
  return (
    <div className="w-full px-8 md:mb-[128px] mb-24">
      <div className="justify-center items-center flex pt-[172px]">
        <div className="max-w-[1000px] flex flex-col text-center text-balance items-center space-y-8">
          <div className="flex flex-col lg:flex-row gap-y-2 lg:space-x-4 items-center space-x-0">
            <div className="p-2 px-4 bg-green-500/20 rounded-full text-center">
              <h1 className="text-green-200">
                Free lifetime access to React Components
              </h1>
            </div>

            <div className="p-2 px-4 bg-green-500/20 rounded-full">
              <h1 className="text-green-200">
                Free lifetime access to React Components
              </h1>
            </div>
          </div>

          {/* Title heading */}
          <h1 className="text-gray-100 text-5xl font-medium">
            Designs that shine with{" "}
            <span className="bg-gradient-to-r from-gray-100 to-yellow-500 bg-clip-text text-transparent">
              dynamic intelligence
            </span>
            .
          </h1>
          {/* Caption heading */}
          <p className="text-slate-400">
            Atomic Design System is a carefully crafted UI library with usage
            guidelines and Figma plugin for easier customization. Build and
            prototype your apps faster than ever before.
          </p>

          <CTAButton label="Get Started" />

          <div className="flex flex-col space-y-4 text-center items-center">
            <h1 className="text-sm text-slate-400">
              Empowering teams at the world's leading companies.
            </h1>
            <div className="flex flex-row space-x-6">
              <FaMicrosoft size={24} className="fill-gray-500" />
              <FaMeta size={24} className="fill-gray-500" />
              <FaXTwitter size={24} className="fill-gray-500" />
              <FaAmazon size={24} className="fill-gray-500" />
              <FaFigma size={24} className="fill-gray-500" />
              <FaGoogle size={24} className="fill-gray-500" />
            </div>
          </div>

          <div className="pt-8">
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
}

export default Main;
