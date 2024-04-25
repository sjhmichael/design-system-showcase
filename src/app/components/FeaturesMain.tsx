import React from "react";
import CTAButton from "./CTAButton";
import Image from "next/image";
import TypeScript from "./../../../public/TypeScript.png";
import ExampleImage from "./../../../public/ExampleImage.png";
import { FaFlask, FaMagnifyingGlass, FaImage, FaFilter } from "react-icons/fa6";

function FeaturesMain() {
  return (
    <div className="relative w-full px-8 justify-center flex mb-24">
      <div className="text-gray-100 items-center pt-[172px] max-w-[1000px]">
        {/* Features */}
        <div className="flex md:flex-row flex-col justify-between space-y-12">
          <div className="text-slate-400 flex flex-col space-y-8">
            <h1 className="text-5xl text-gray-100 font-medium">Features</h1>
            <p className="text-balance">
              Access in-depth insights to help you launch new products,
              benchmark your own offering, and optimize your assortment and
              catalog.
            </p>
            <CTAButton />
          </div>

          <div className="glass-container w-11/12">
            <div className="absolute inset-0 -z-10 bg-blue-500/30 blur-2xl filter animate-pulse" />
            <Image src={TypeScript} className="rounded-lg" alt="HeroImage" />
          </div>
        </div>
        {/* Border */}
        <div className="flex flex-row items-center space-x-4 mt-24">
          <h1 className="text-5xl text-gray-100 font-medium">
            Product Research
          </h1>
          <div className="flex-grow border-t border-gray-700"></div>
          <FaFlask className="fill-gray-700" size={40} />
        </div>
        <div className="text-slate-400 text-balance mt-4">
          <p>
            Guide product strategy with real-time market data. Quickly identify
            top-performing products, trends, and market leaders to uncover
            profitable opportunities.
          </p>
        </div>

        <div className="flex flex-row justify-between mt-16">
          <div className="flex flex-col text-gray-100 space-y-4 text-balance">
            <FaMagnifyingGlass
              className="fill-slate-400 pl-4 w-fit"
              size={24}
            />

            <div className="space-y-2">
              <h1 className="text-lg font-medium border-l-2 border-slate-700 pl-4">
                Find Market Leading Products
              </h1>

              <p className="text-slate-400 pl-4 text-balance text-sm">
                Supercharge your growth with a new top-selling product
              </p>
            </div>
          </div>
          <div className="flex flex-col text-gray-100 space-y-4 text-balance">
            <FaImage className="fill-slate-400 pl-4 w-fit" size={24} />

            <div className="space-y-2">
              <h1 className="text-lg font-medium border-l-2 border-slate-700 pl-4">
                Robust Visualizations
              </h1>

              <p className="text-slate-400 pl-4 text-balance text-sm">
                Rich, easy-to-explore, interactive charts for every dataset
              </p>
            </div>
          </div>
          <div className="flex flex-col text-gray-100 space-y-4 text-balance">
            <FaFilter className="fill-slate-400 pl-4 w-fit" size={24} />

            <div className="space-y-2">
              <h1 className="text-lg font-medium border-l-2 border-slate-700 pl-4">
                Powerful Filters
              </h1>

              <p className="text-slate-400 pl-4 text-balance text-sm">
                Zero in on top trends in your market, or any market
              </p>
            </div>
          </div>
        </div>
        <div className="glass-container mt-14">
          <Image src={ExampleImage} alt="test" />
        </div>
      </div>
    </div>
  );
}

export default FeaturesMain;
