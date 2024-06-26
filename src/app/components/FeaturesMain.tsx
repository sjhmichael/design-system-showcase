"use client";

import React from "react";
import CTAButton from "./CTAButton";
import Image from "next/image";
import Features from "./../../../public/Features.png";
import Dashboard from "./../../../public/Dashboard.png";
import { FaFlask, FaMagnifyingGlass, FaImage, FaFilter } from "react-icons/fa6";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

function FeaturesMain() {
  const container = useRef(null);
  gsap.registerPlugin(useGSAP);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

      tl.fromTo(
        ".features__main",
        { y: 20 },
        { y: 0, opacity: 1, duration: 1.2 }
      );

      tl.fromTo(
        ".features__productresearch",
        { y: 20 },
        { y: 0, opacity: 1, duration: 1.2 },
        "-=0.8"
      );

      tl.fromTo(
        ".features__competitorresearch",
        { y: 20 },
        { y: 0, opacity: 1, duration: 1.2 },
        "-=0.8"
      );
    },
    { scope: container }
  );

  return (
    <div
      className="relative w-full px-8 justify-center flex mb-24"
      ref={container}
    >
      <div className="text-gray-100 items-center max-w-[1000px] md:pt-[200px] pt-[172px]">
        {/* Features */}
        <div className="features__main features flex md:flex-row flex-col items-center opacity-0">
          <div className="text-slate-400 flex flex-col space-y-8 mb-12 basis-full pr-8">
            <h1 className="text-5xl text-gray-100 font-medium">Features</h1>
            <p className="text-balance">
              Access in-depth insights to help you launch new products,
              benchmark your own offering, and optimize your assortment and
              catalog.
            </p>
            <CTAButton label="Learn More" />
          </div>

          <div className="glass-container basis-full w-full md:w-11/12">
            <div className="absolute inset-0 -z-10 bg-blue-500/30 blur-2xl filter animate-pulse" />
            <Image
              src={Features}
              className="rounded-lg"
              alt="HeroImage"
              quality={100}
            />
          </div>
        </div>

        {/* Border */}

        <div className="features__productresearch opacity-0">
          <div className="flex flex-row items-center space-x-4 mt-40">
            <h1 className="text-5xl text-gray-100 font-medium">
              Product Research
            </h1>
            <div className="flex-grow border-t border-gray-700"></div>
            <FaFlask className="fill-gray-700" size={40} />
          </div>
          <div className="text-slate-400 text-balance mt-4">
            <p>
              Guide product strategy with real-time market data. Quickly
              identify top-performing products, trends, and market leaders to
              uncover profitable opportunities.
            </p>
          </div>

          <div className="flex md:flex-row flex-col justify-between mt-16 md:space-y-0 space-y-8">
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
          <div className="glass-container mt-20">
            <Image
              src={Features}
              className="rounded-lg"
              alt="HeroImage"
              quality={100}
            />
          </div>
        </div>

        <div className="features__productresearch opacity-0">
          <div className="flex flex-row items-center space-x-4 mt-40">
            <h1 className="text-5xl text-gray-100 font-medium">
              Competitor Research
            </h1>
            <div className="flex-grow border-t border-gray-700"></div>
            <FaFlask className="fill-gray-700" size={40} />
          </div>
          <div className="text-slate-400 text-balance mt-4">
            <p>
              Guide product strategy with real-time market data. Quickly
              identify top-performing products, trends, and market leaders to
              uncover profitable opportunities.
            </p>
          </div>

          <div className="flex md:flex-row flex-col justify-between mt-16 md:space-y-0 space-y-8">
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
          <div className="glass-container mt-20">
            <Image
              src={Dashboard}
              className="rounded-lg"
              alt="HeroImage"
              quality={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturesMain;
