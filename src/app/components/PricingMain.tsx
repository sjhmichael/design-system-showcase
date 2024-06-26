"use client";
import React from "react";
import { FaCheck, FaGoogle } from "react-icons/fa6";
import Image from "next/image";
import FAQ from "./FAQ";

import Tuple from "./../../../public/icons/tuple-logo-white";
import TupleSVG from "./../../../public/icons/tuple-logo-white.svg";
import ReformSVG from "./../../../public/icons/reform-logo-white.svg";
import Sameday from "./../../../public/icons/sameday";
import Totvs from "./../../../public/icons/totvs";
import Vercel from "./../../../public/icons/vercel";
import Reform from "./../../../public/icons/reform-logo-white";
import Booth from "./../../../public/icons/booth";
import Infisical from "../../../public/icons/infisical";
import Warp from "./../../../public/icons/warp";
import Koywe from "./../../../public/icons/koywe";
import Lastro from "./../../../public/icons/lastro";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function PricingMain() {
  const container = useRef(null);
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

      tl.fromTo(
        ".hero__header",
        { y: 20 },
        { y: 0, opacity: 1, duration: 1.2 }
      );

      tl.fromTo(
        ".hero__description",
        { y: 20 },
        { y: 0, opacity: 1, duration: 1.2 },
        "-=0.8"
      );

      tl.fromTo(
        ".plan__item",
        { y: 50 },
        {
          duration: 1.3,
          opacity: 1,
          y: 0,
          stagger: 0.1,
          ease: "back.in",
        },
        "-=0.8"
      );

      tl.fromTo(
        ".testimony",
        { y: 20 },
        { y: 0, opacity: 1, duration: 1.2 },
        "-=0.8"
      );

      tl.fromTo(
        ".faq",
        { y: 50 },
        {
          duration: 1.3,
          opacity: 1,
          y: 0,
          stagger: 0.1,
          ease: "back.in",
        },
        "-=0.8"
      );

      gsap.fromTo(
        ".company__name",
        { y: 20 },
        {
          y: 0,
          ease: "power1.in",
          opacity: 1,
          duration: 0.3,
          stagger: {
            grid: [2, 5],
            from: "random",
            amount: 1.5,
          },
          scrollTrigger: {
            trigger: ".company__name",
            toggleActions: "play pause resume reverse",
          },
        }
      );
    },
    { scope: container }
  );

  return (
    <div
      className="w-full flex justify-center items-center px-8"
      ref={container}
    >
      <div className="max-w-[1000px] flex flex-col justify-center md:pt-[200px] pt-[172px]">
        <div className="items-center flex flex-col space-y-8 text-center">
          <h1 className="hero__header text-gray-100 text-5xl font-medium opacity-0">
            Pricing
          </h1>
          <p className="hero__description text-slate-400 text-balance opacity-0">
            Choose your Atomic Design plan. Upgrade to enable unlimited issues,
            enhanced security controls, and additional features.
          </p>
        </div>

        <div className="grid lg:grid-cols-[auto_auto_auto] grid-rows-[auto_auto_auto] gap-6 text-gray-100 mt-16 mb-16">
          <div className="plan__item p-8 border-2 flex justify-start flex-col rounded-3xl border-gray-800 text-balance space-y-6 bg-gradient-to-t from-gray-950/50 to-gray-800/50 hover:bg-gradient-to-t hover:from-gray-950 hover:to-gray-800 opacity-0">
            <h1 className="text-xl font-medium text-gray-100">Basic</h1>
            <p className="text-sm text-slate-400">
              The essentials to provide your best work for clients.
            </p>
            <h1 className="text-slate-400">
              <span className="text-4xl font-bold text-gray-100">$15</span>{" "}
              /month
            </h1>
            <div className="border-t-[1px] border-gray-700" />
            <ul className="flex flex-col space-y-4 text-slate-400 text-sm">
              <li>
                <div className="flex flex-row space-x-4 items-center">
                  <FaCheck className="fill-yellow-500" />
                  <p>5 products</p>
                </div>
              </li>
              <div className="flex flex-row space-x-4 items-center">
                <FaCheck className="fill-yellow-500" />
                <p>Up to 1,000 subscribers</p>
              </div>
              <div className="flex flex-row space-x-4 items-center">
                <FaCheck className="fill-yellow-500" />
                <p>Basic analytics</p>
              </div>
              <div className="flex flex-row space-x-4 items-center">
                <FaCheck className="fill-yellow-500" />
                <p>48-hour support response time</p>
              </div>
            </ul>
            <div className="h-full w-full flex justify-end flex-col">
              <button className="bg-slate-800 rounded-full text-center p-3 hover:bg-slate-700 duration-300">
                Choose Plan
              </button>
            </div>
          </div>
          <div className="plan__item p-8 border-2 flex justify-start flex-col rounded-3xl border-yellow-500 text-balance space-y-6 bg-gradient-to-t from-gray-950/50 to-gray-800/50 hover:bg-gradient-to-t hover:from-gray-950 hover:to-gray-800 opacity-0">
            <div className="flex flex-row items-center justify-between">
              <h1 className="text-xl font-medium text-gray-100">Standard</h1>
              <h1 className="bg-yellow-500 text-gray-900 p-1 px-2 rounded-full text-sm font-medium">
                Most Popular
              </h1>
            </div>
            <p className="text-sm text-slate-400">
              A plan that scales with your rapidly growing business.
            </p>
            <h1 className="text-slate-400">
              <span className="text-4xl font-bold text-gray-100">$30</span>{" "}
              /month
            </h1>
            <div className="border-t-[1px] border-gray-700" />
            <ul className="flex flex-col space-y-4 text-slate-400 text-sm">
              <li>
                <div className="flex flex-row space-x-4 items-center">
                  <FaCheck className="fill-yellow-500" />
                  <p>25 products</p>
                </div>
              </li>
              <div className="flex flex-row space-x-4 items-center">
                <FaCheck className="fill-yellow-500" />
                <p>Up to 10,000 users</p>
              </div>
              <div className="flex flex-row space-x-4 items-center">
                <FaCheck className="fill-yellow-500" />
                <p>Advanced analytics</p>
              </div>
              <div className="flex flex-row space-x-4 items-center">
                <FaCheck className="fill-yellow-500" />
                <p>24-hour support</p>
              </div>
              <div className="flex flex-row space-x-4 items-center">
                <FaCheck className="fill-yellow-500" />
                <p>Marketing automations</p>
              </div>
            </ul>
            <div className="h-full w-full flex justify-end flex-col">
              <button className="bg-slate-800 rounded-full text-center p-3 hover:bg-slate-700 duration-300">
                Choose Plan
              </button>
            </div>
          </div>
          <div className="plan__item p-8 border-2 flex justify-start flex-col rounded-3xl border-gray-800 text-balance space-y-6 bg-gradient-to-t from-gray-950/50 to-gray-800/50 hover:bg-gradient-to-t hover:from-gray-950 hover:to-gray-800 opacity-0">
            <h1 className="text-xl font-medium text-gray-100">Professional</h1>
            <p className="text-sm text-slate-400">
              A plan that scales with your rapidly growing business.
            </p>
            <h1 className="text-slate-400">
              <span className="text-4xl font-bold text-gray-100">$48</span>{" "}
              /month
            </h1>
            <div className="border-t-[1px] border-gray-700" />
            <ul className="flex flex-col space-y-4 text-slate-400 text-sm">
              <li>
                <div className="flex flex-row space-x-4 items-center">
                  <FaCheck className="fill-yellow-500" />
                  <p>Unlimited products</p>
                </div>
              </li>
              <div className="flex flex-row space-x-4 items-center">
                <FaCheck className="fill-yellow-500" />
                <p>Unlimited subscribers</p>
              </div>
              <div className="flex flex-row space-x-4 items-center">
                <FaCheck className="fill-yellow-500" />
                <p>Advanced analytics</p>
              </div>
              <div className="flex flex-row space-x-4 items-center">
                <FaCheck className="fill-yellow-500" />
                <p>1-hour dedicated response time</p>
              </div>
              <div className="flex flex-row space-x-4 items-center">
                <FaCheck className="fill-yellow-500" />
                <p>Marketing automations</p>
              </div>
              <div className="flex flex-row space-x-4 items-center">
                <FaCheck className="fill-yellow-500" />
                <p>Custom reporting tools</p>
              </div>
            </ul>
            <div className="h-full w-full flex justify-end flex-col">
              <button className="bg-slate-800 rounded-full text-center p-3 hover:bg-slate-700 duration-300">
                Choose Plan
              </button>
            </div>
          </div>
        </div>

        <div className="testimony grid md:grid-cols-[auto_auto] grid-rows-[auto_auto] text-gray-100 gap-12 mb-16 opacity-0">
          <div className="flex flex-col space-y-8">
            <Image src={TupleSVG} alt="logo" />
            <p className="text-balance">
              “Amet amet eget scelerisque tellus sit neque faucibus non
              eleifend. Integer eu praesent at a. Ornare arcu gravida natoque
              erat et cursus tortor consequat at. Vulputate gravida sociis enim
              nullam ultricies habitant malesuada lorem ac. Tincidunt urna dui
              pellentesque sagittis.”
            </p>
            <div className="flex flex-row space-x-6">
              <img
                src="https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=2598&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="profile picture"
                className="rounded-full object-cover h-12 w-12"
              />
              <div className="flex flex-col">
                <h1 className="font-medium">John Smith</h1>
                <h1 className="text-slate-400">Founder of Tuple</h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-8">
            <Image src={ReformSVG} alt="logo" />
            <p className="text-balance">
              “Amet amet eget scelerisque tellus sit neque faucibus non
              eleifend. Integer eu praesent at a. Ornare arcu gravida natoque
              erat et cursus tortor consequat at. Vulputate gravida sociis enim
              nullam ultricies habitant malesuada lorem ac. Tincidunt urna dui
              pellentesque sagittis.”
            </p>
            <div className="flex flex-row space-x-6">
              <img
                src="https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=2598&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="profile picture"
                className="rounded-full object-cover h-12 w-12"
              />
              <div className="flex flex-col">
                <h1 className="font-medium">John Smith</h1>
                <h1 className="text-slate-400">Founder of Reform</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center flex flex-col gap-y-8 w-full mb-32">
          <h1 className="text-slate-400 text-sm font-medium ">
            Trusted By the world's leading companies
          </h1>
          <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 shrink-0 gap-8 items-center place-items-center">
            <Reform className="company__name w-40 shrink-0 fill-gray-600 hover:fill-slate-100 duration-300 opacity-0" />
            <Booth className="company__name w-40 shrink-0 fill-gray-600 hover:fill-slate-100 duration-300 opacity-0" />
            <Infisical className="company__name w-40 shrink-0 fill-gray-600 hover:fill-slate-100 duration-300 opacity-0" />
            <Vercel className="company__name w-40 shrink-0 fill-gray-600 hover:fill-slate-100 duration-300 opacity-0" />
            <div className="company__name flex justify-start w-40 opacity-0">
              <Tuple className="w-32 shrink-0 fill-gray-600 hover:fill-slate-100 duration-300" />
            </div>
            <Koywe className="company__name w-40 shrink-0 fill-gray-600 hover:fill-slate-100 duration-300 opacity-0" />
            <Warp className="company__name w-40 shrink-0 fill-gray-600 hover:fill-slate-100 duration-300 opacity-0" />
            <div className="company__name flex justify-start w-40 opacity-0">
              <Lastro className="company__name w-32 shrink-0 fill-gray-600 hover:fill-slate-100 duration-300" />
            </div>
            <Totvs className="company__name w-40 shrink-0 fill-gray-600 hover:fill-slate-100 duration-300 opacity-0" />
            <Sameday className="company__name w-40 shrink-0 fill-gray-600 hover:fill-slate-100 duration-300 opacity-0" />
          </div>
        </div>

        <div className="faq flex flex-col space-y-8 text-gray-100 text-center mb-16 opacity-0">
          <h1 className="text-5xl font-medium">FAQs</h1>
          <p className="text-slate-400">
            Have a different question and can't find the answer you're looking
            for? Contact us{" "}
            <button className="font-medium text-yellow-500">here</button> and
            we'll get back to you as soon as we can.
          </p>
          <FAQ />
        </div>
      </div>
    </div>
  );
}

export default PricingMain;
