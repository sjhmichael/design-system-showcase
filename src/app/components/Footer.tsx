import React from "react";
import Logo from "./../../../public/Logo.png";
import Image from "next/image";

function Footer() {
  return (
    <footer className="w-full bg-[#070815] relative justify-center flex border-t-[1px] border-slate-600 mt-24">
      {/* list */}
      <div className="relative flex flex-col px-8 max-w-[1000px] w-full my-8">
        <div className="grid grid-cols-3 gap-4">
          <div className="relative flex flex-row">
            <ul className="flex flex-col gap-6 text-slate-400">
              <li className="font-medium text-xl text-gray-100">Products</li>
              <li>Atomic for Figma</li>
              <li>Atomic for React</li>
              <li>Atomic Design Foundations</li>
              <li>Atomic Icons</li>
            </ul>
          </div>
          <div className="relative flex flex-row">
            <ul className="flex flex-col gap-6 text-slate-400">
              <li className="font-medium text-xl text-gray-100">Services</li>
              <li>Hire Us</li>
              <li>Consultation</li>
            </ul>
          </div>
          <div className="relative flex flex-row">
            <ul className="flex flex-col gap-6 text-slate-400">
              <li className="font-medium text-xl text-gray-100">Help</li>
              <li>Contact Us</li>
              <li>FAQ</li>
              <li>Documentation</li>
            </ul>
          </div>
        </div>
        <div className="mt-16 text-slate-400 flex flex-row justify-between text-sm items-center">
          <Image src={Logo} width={128} height={128} alt="Logo" />
          <div>
            <h1>All rights reserved © Atomic 2024</h1>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
