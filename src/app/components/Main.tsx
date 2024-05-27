"use client";

import React from "react";
import { useRef } from "react";
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
  FaWandSparkles,
} from "react-icons/fa6";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Main() {
  const container = useRef(null);
  gsap.registerPlugin(useGSAP);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

      //objects will animate in a timeline sequence
      //-=0.8 allows object to skip or move futher ahead in the timeline

      tl.fromTo(
        ".hero__news",
        { scale: 0.5 },
        { scale: 1, opacity: 1, duration: 1.4 }
      );

      tl.fromTo(
        ".hero__heading",
        { scale: 0.5 },
        { scale: 1, opacity: 1, duration: 1.4 },
        "-=0.8"
      );

      tl.fromTo(
        ".hero__body",
        { y: 20 },
        { y: 0, opacity: 1, duration: 1.2 },
        "-=0.8"
      );

      tl.fromTo(
        ".hero__button",
        { scale: 1.5 },
        { scale: 1, opacity: 1, duration: 1.2 },
        "-=0.8"
      );

      tl.fromTo(
        ".company__header",
        { y: 10 },
        { y: 0, duration: 1.2, opacity: 1, stagger: 0.1 },
        "-=0.8"
      );

      tl.fromTo(
        ".company__icons",
        { y: 20 },
        {
          y: 0,
          duration: 1.2,
          from: "center",
          opacity: 1,
          stagger: 0.1,
          ease: "back.in",
        },
        "-=0.8"
      );

      tl.fromTo(
        ".hero__image",
        { y: 100 },
        { y: 0, opacity: 1, duration: 1.2 },
        "-=0.2"
      );

      tl.fromTo(".hero__glow", { scale: 0.5 }, { scale: 1, opacity: 1 });
    },
    { scope: container }
  );

  return (
    <div className="w-full px-8 md:mb-[128px] mb-24" ref={container}>
      <div className="justify-center items-center flex md:pt-[200px] pt-[172px]">
        <div className="max-w-[1000px] flex flex-col text-center text-balance items-center space-y-8">
          <div className="flex flex-col lg:flex-row gap-y-2 lg:space-x-4 items-center space-x-0">
            <div className="hero__news p-2 px-4 bg-slate-400/20 rounded-full flex items-center border-[1px] border-slate-700 gap-x-3 opacity-0">
              <FaWandSparkles className="fill-gray-200" />
              <h1 className="text-gray-200 text-sm">
                AI Assistant features are now available
              </h1>
            </div>
          </div>

          {/* Title heading */}
          <h1 className="hero__heading text-gray-100 text-5xl font-medium opacity-0">
            Designs that shine with{" "}
            <span className="bg-gradient-to-r from-gray-100 to-yellow-500 bg-clip-text text-transparent">
              dynamic intelligence
            </span>
            .
          </h1>
          {/* Caption heading */}
          <p className="hero__body text-slate-400 opacity-0">
            Atomic Design System is a carefully crafted UI library with usage
            guidelines and Figma plugin for easier customization. Build and
            prototype your apps faster than ever before.
          </p>

          <div className="opacity-0 hero__button">
            <CTAButton label="Get Started" />
          </div>

          <div className="company__header flex flex-col space-y-4 text-center items-center opacity-0">
            <h1 className="text-sm text-slate-400">
              Empowering teams at the world's leading companies.
            </h1>
            <div className="flex flex-row space-x-6">
              <FaMicrosoft size={24} className="company__icons fill-gray-500" />
              <FaMeta size={24} className="company__icons fill-gray-500" />
              <FaXTwitter size={24} className="company__icons fill-gray-500" />
              <FaAmazon size={24} className="company__icons fill-gray-500" />
              <FaFigma size={24} className="company__icons fill-gray-500" />
              <FaGoogle size={24} className="company__icons fill-gray-500" />
            </div>
          </div>

          <div className="pt-8">
            <div className="hero__image glass-container opacity-0">
              <div className="hero__glow absolute inset-0 -z-10 bg-blue-500/30 blur-2xl filter animate-pulse opacity-0" />
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
