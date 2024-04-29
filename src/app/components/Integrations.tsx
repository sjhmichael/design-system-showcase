"use client";

import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import LogoOnly from "./../../../public/icons/LogoOnly.svg";
import Image from "next/image";

import {
  FaDigitalOcean,
  FaCloudflare,
  FaNpm,
  FaGithub,
  FaFly,
  FaFigma,
} from "react-icons/fa6";
import clsx from "clsx";

export default function AnimatedContent() {
  //   const container = useRef(null);
  //   const prefersReducedMotion = usePrefersReducedMotion();
  //   gsap.registerPlugin(useGSAP);

  const icons = {
    cloudflare: <FaCloudflare />,
    digitalocean: <FaDigitalOcean />,
    npm: <FaNpm />,
    github: <FaGithub />,
    fly: <FaFly />,
    figma: <FaFigma />,
  };

  const items = [
    { index: 1, icon: icons.cloudflare },
    { index: 2, icon: icons.digitalocean },
    { index: 3, icon: icons.npm },
    { index: 5, icon: icons.github },
    { index: 6, icon: icons.fly },
    { index: 7, icon: icons.figma },
  ];

  useGSAP(() => {
    const tl = gsap.timeline({
      //repeat forever
      repeat: -1,
      defaults: { ease: "power2.inOut" },
    });

    tl.to(".pulsing-logo", {
      keyframes: [
        {
          filter: "brightness(2)",
          opacity: 1,
          duration: 0.4,
          ease: "power2.in",
        },
        {
          filter: "brightness(1)",
          opacity: 0.7,
          duration: 0.9,
        },
      ],
    });

    tl.to(
      ".signal-line",
      {
        keyframes: [
          { backgroundPosition: "0% 0%" },
          {
            backgroundPosition: "100% 100%",
            //stagger to ensure everything animates in order
            stagger: { from: "center", each: 0.3 },
            duration: 1,
          },
        ],
      },
      "-=1.4"
    );

    tl.to(
      ".pulsing-icon",
      {
        keyframes: [
          {
            opacity: 1,
            stagger: {
              from: "center",
              each: 0.3,
            },
            duration: 1,
          },
          {
            opacity: 0.4,
            duration: 1,
            stagger: {
              from: "center",
              each: 0.3,
            },
          },
        ],
      },
      "-=2"
    );
  }, {});

  return (
    <div className="md:my-64 mb-24 px-8 flex flex-col space-y-12">
      <div className="text-gray-100 flex flex-col space-y-8 justify-center items-cente text-center text-balance">
        <h1 className="text-5xl font-medium">
          <span className="bg-gradient-to-r from-sky-500 to-indigo-500 text-transparent bg-clip-text">
            Integrations
          </span>{" "}
          galore.
        </h1>
        <p className="text-slate-400">
          The integrations your team needs to be productive at scale with no
          impact on your burn rate.
        </p>
      </div>
      <div className="md:mb-[128px] flex flex-col items-center md:flex-row justify-center">
        {items.map((icon, index) => (
          <React.Fragment key={index}>
            {index === Math.floor(items.length) / 2 && (
              <>
                <div className="pulsing-icon flex aspect-square shrink-0 items-center justify-center rounded-full border border-blue-50/30 bg-blue-50/25 p-3 text-3xl text-blue-100 opacity-80 md:text-4xl lg:text-5xl">
                  <div className="w-[96px]">
                    <Image src={LogoOnly} alt="Logo" />
                  </div>
                </div>

                {/* check globals.css for signal life class */}
                {/* rotate-180 for mobile, gradient bottom to top for mobile */}
                <div className="signal-line rotate-180 bg-gradient-to-t" />
              </>
            )}
            <div className="pulsing-icon flex aspect-square shrink-0 items-center justify-center rounded-full border border-blue-50/30 bg-blue-50/25 p-3 text-3xl text-blue-100 opacity-40 md:text-4xl lg:text-5xl">
              {icon.icon}
            </div>
            {index !== items.length - 1 && (
              <div
                className={clsx(
                  "signal-line",
                  index >= Math.floor(items.length / 2)
                    ? "rotate-180"
                    : "rotate-0"
                )}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
