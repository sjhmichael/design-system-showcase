import React from "react";
import LogoOnly from "./../../../public/icons/LogoOnly.svg";
import Image from "next/image";
import CTAButton from "./CTAButton";
import StarGrid from "./StarGrid";

function CallToAction() {
  return (
    <div className="w-full px-8 justify-center flex border-t-[1px] border-gray-700 relative overflow-hidden">
      <StarGrid />
      <div className="flex flex-col space-y-10 items-center py-24">
        <div className="glass-container w-fit">
          <Image
            src={LogoOnly}
            alt="Logo"
            width={104}
            className="bg-gradient-to-t from-gray-950 to-gray-900 p-4 rounded-lg"
          />
        </div>
        <div className="text-gray-100 text-center">
          <h1 className="font-medium text-4xl text-balance">
            AI Powered, Real-time Data. Available today.
          </h1>
        </div>
        <CTAButton />
      </div>
      <div className="translate-y-[16rem] glow absolute -z-10 aspect-square w-full max-w-[50rem] rounded-full bg-blue-400/20 blur-3xl filter animate-pulse" />
    </div>
  );
}

export default CallToAction;
