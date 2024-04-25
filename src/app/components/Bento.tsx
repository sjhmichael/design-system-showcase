import React from "react";
import Image from "next/image";
import TypeScriptImage from "./../../../public/TypeScript.png";
import SmallScreen from "./../../../public/small-screenshot.png";
import { FaReact, FaArrowRight } from "react-icons/fa";

function Bento() {
  return (
    <div className="w-full px-8 justify-center flex md:mb-[128px] mb-24">
      <div className="glow absolute -z-10 aspect-square w-full max-w-xl rounded-full bg-blue-400/20 blur-3xl filter animate-pulse" />
      <div className="max-w-[1000px] content-center justify-center flex flex-col relative">
        {/* Header */}
        <div className="text-gray-100 text-center text-balance justify-center space-y-8">
          <h1 className="text-5xl font-medium">
            The new{" "}
            <span className="bg-gradient-to-r from-gray-100 to-yellow-500 bg-clip-text text-transparent">
              Gold Standard
            </span>
            .
          </h1>
          <p className="text-balance text-slate-400">
            Introducing a new way of building components and layouts that leaves
            everything else in the dust.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="mt-24 grid max-w-[1000px] grid-rows-[auto_auto_auto] md:grid-cols-3 gap-10 justify-center text-gray-100">
          {/* Bento Item 1 */}
          <div className="glass-container col-span-3">
            <div className="bg-gray-950 flex flex-col md:flex-row rounded-lg overflow-hidden ">
              <div className="relative p-6 flex flex-col md:justify-between md:p-12">
                <FaReact size={40} className="hidden md:flex fill-[#73d0f0]" />
                <div className="flex flex-col space-y-8">
                  <h1 className="text-3xl font-medium">TypeScript Friendly</h1>
                  <p className="text-gray-400 text-balance w-[300px]">
                    Enhanced type safety, autocompletion, and IDE integration.
                  </p>
                  <div className="w-fit group flex flex-row items-center space-x-4 font-medium hover:cursor-pointer">
                    <h1>Learn More</h1>
                    <FaArrowRight className="group-hover:translate-x-2 duration-300" />
                  </div>
                </div>
              </div>
              <Image
                className="object-contain flex-shrink-0 w-full h-full md:translate-y-[64px] drop-shadow-lg"
                src={TypeScriptImage}
                alt="typescript_image"
              />
            </div>
          </div>
          {/* Bento Item 2 */}
          <div className="col-span-2 glass-container grid grid-rows-subgrid">
            <div className="flex flex-col space-y-4 p-6 bg-gray-950 text-gray-100 rounded-lg md:p-12">
              <h1 className="text-3xl font-medium">
                Ready to use without a Design Project.
              </h1>
              <p className="text-balance text-gray-400">
                Atomic Design System allows you to quickly start designing
                without worries.
              </p>
              <div className="w-fit group flex flex-row items-center space-x-4 font-medium hover:cursor-pointer">
                <h1>Learn More</h1>
                <FaArrowRight className="group-hover:translate-x-2 duration-300" />
              </div>
            </div>
          </div>
          {/* Bento Item 3 */}
          <div className="glass-container grid grid-rows-subgrid">
            <div className="flex flex-col space-y-4 bg-gray-950 text-gray-100 rounded-lg overflow-hidden">
              <Image
                src={SmallScreen}
                alt="smallscreenshot"
                width={384}
                className=""
              />
              <div className="p-12 flex flex-col space-y-4">
                <h1 className="text-3xl font-medium">Ready</h1>
                <p className="text-balance text-gray-400">
                  Atomic Design System allow
                </p>
                <div className="w-fit group flex flex-row items-center space-x-4 font-medium hover:cursor-pointer">
                  <h1>Learn More</h1>
                  <FaArrowRight className="group-hover:translate-x-2 duration-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bento;
