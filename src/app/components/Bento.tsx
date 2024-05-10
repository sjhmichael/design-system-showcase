import React from "react";
import Image from "next/image";
import TypeScriptImage from "./../../../public/TypeScript.png";
import SmallScreen from "./../../../public/small-screenshot.png";
import { FaReact, FaArrowRight } from "react-icons/fa";
import ForDes from "./../../../public/ForDes.png";
import ForDev from "./../../../public/ForDev.png";
import Dark from "./../../../public/Dark.png";
import Light from "./../../../public/Light.png";
import { FaSun, FaMoon } from "react-icons/fa";

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
        <div className="mt-24 grid max-w-[1000px] grid-rows-[auto_auto] gap-10 justify-center text-gray-100">
          {/* Bento Item 1 */}
          <div className="glass-container col-span-2">
            <div className="bg-gray-950 flex flex-col md:flex-row rounded-lg overflow-hidden">
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
                className="object-contain flex-shrink-0 w-full h-full md:translate-y-[64px] translate-y-0 translate-x-12 drop-shadow-lg hover:scale-105 duration-300"
                src={TypeScriptImage}
                alt="typescript_image"
              />
            </div>
          </div>
          {/* Bento Item 2 */}
          <div className="glass-container grid grid-rows-subgrid bg-gray-950 col-span-2 md:col-span-1">
            <div className="relative overflow-hidden flex w-full">
              <Image
                src={ForDev}
                alt="image"
                className="absolute md:translate-x-20 translate-x-56 md:translate-y-12 translate-y-8 rounded-lg flex-shrink-0 hover:scale-105 duration-300"
              />
            </div>
            <div className="from-20% z-10 bg-gradient-to-t from-gray-950 pointer-events-none" />
            <div className="flex flex-col space-y-8 p-6 text-gray-100 rounded-lg md:mt-72 mt-12 md:p-12 z-10">
              <h1 className="text-3xl font-medium">For Developers</h1>
              <p className="text-balance text-gray-400 max-w-[400px]">
                Comprehensive guide in the Storybook detailing implementation
                instructions
              </p>
              <div className="w-fit group flex flex-row items-center space-x-4 font-medium hover:cursor-pointer">
                <h1>Learn More</h1>
                <FaArrowRight className="group-hover:translate-x-2 duration-300" />
              </div>
            </div>
          </div>

          {/* Bento Item 3 */}
          <div className="glass-container grid grid-rows-subgrid bg-gray-950 col-span-2 md:col-span-1">
            <div className="relative overflow-hidden flex w-full">
              <Image
                src={ForDes}
                alt="image"
                className="absolute md:-translate-x-20 translate-x-56 md:translate-y-12 translate-y-8 rounded-lg flex-shrink-0 hover:scale-105 duration-300"
              />
            </div>
            <div className="from-20% z-10 bg-gradient-to-t from-gray-950 pointer-events-none" />
            <div className="flex flex-col space-y-8 p-6 text-gray-100 rounded-lg md:mt-72 mt-12 md:p-12 z-10">
              <h1 className="text-3xl font-medium">For Designers</h1>
              <p className="text-balance text-gray-400 max-w-[400px]">
                Clear guidelines on how to use Atomic, complete with best
                practices and usage rules.
              </p>
              <div className="w-fit group flex flex-row items-center space-x-4 font-medium hover:cursor-pointer">
                <h1>Learn More</h1>
                <FaArrowRight className="group-hover:translate-x-2 duration-300" />
              </div>
            </div>
          </div>
          {/* Bento Item 4 */}
          <div className="glass-container col-span-2">
            <div className="bg-gray-950 flex flex-row rounded-lg overflow-hidden">
              <div className="md:hidden absolute w-full h-full bg-gradient-to-l from-gray-950 pointer-events-none z-10" />
              <div className="relative p-6 flex flex-col md:justify-between justify-end md:p-12 z-20">
                <div className="hidden md:flex flex-row gap-x-4">
                  <FaMoon size={32} className="fill-gray-700" />
                  <FaSun size={32} className="fill-gray-700" />
                </div>
                <div className="flex flex-col space-y-8">
                  <h1 className="text-3xl font-medium">Dark/Light Modes</h1>
                  <p className="text-gray-400 text-balance w-[300px]">
                    Enhanced type safety, autocompletion, and IDE integration.
                  </p>
                  <div className="w-fit group flex flex-row items-center space-x-4 font-medium hover:cursor-pointer">
                    <h1>Learn More</h1>
                    <FaArrowRight className="group-hover:translate-x-2 duration-300" />
                  </div>
                </div>
              </div>
              <div className="flex flex-row w-4/12 object-contain flex-shrink-0 drop-shadow-lg hover:scale-105 duration-300 rounded-lg -translate-x-32 md:translate-x-0 ">
                <Image
                  className="translate-y-8 md:translate-y-24"
                  src={Dark}
                  alt="Dark"
                  quality={100}
                />
                <Image
                  className="translate-y-8 md:-translate-y-24"
                  src={Light}
                  alt="Light"
                  quality={100}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bento;
