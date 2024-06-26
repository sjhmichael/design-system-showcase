import React from "react";
import Logo from "./../../../public/icons/Logo.svg";
import Image from "next/image";
import { FaGithub, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full bg-[#070815] relative justify-center flex border-t-[1px] border-slate-600">
      {/* list */}
      <div className="relative flex flex-col px-8 max-w-[1000px] w-full mb-8 mt-12">
        <div className="relative flex flex-col md:flex-row space-y-8 md:space-y-0 justify-between">
          <div className="relative flex w-2/12 items-start min-w-[10rem] mr-8">
            <Image src={Logo} className="object-scale-down" alt="Logo" />
          </div>
          <div className="grid md:grid-cols-3 grid-cols-2 gap-12">
            <div className="relative flex flex-row">
              <ul className="flex flex-col text-sm space-y-6 text-slate-400">
                <li className="font-medium text-xl text-gray-100">Products</li>
                <li>Atomic for Figma</li>
                <li>Atomic for React</li>
                <li>Atomic Design Foundations</li>
                <li>Atomic Icons</li>
              </ul>
            </div>
            <div className="relative flex flex-row">
              <ul className="flex flex-col text-sm gap-6 text-slate-400">
                <li className="font-medium text-xl text-gray-100">Services</li>
                <li>Hire Us</li>
                <li>Consultation</li>
              </ul>
            </div>
            <div className="relative flex flex-row">
              <ul className="flex flex-col text-sm gap-6 text-slate-400">
                <li className="font-medium text-xl text-gray-100">Help</li>
                <li>Contact Us</li>
                <li>FAQ</li>
                <li>Documentation</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 text-slate-400 flex flex-row justify-between text-sm items-center">
          <div>
            <h1>All rights reserved © Atomic 2024</h1>
          </div>
          <div className="flex flex-row space-x-4">
            <FaGithub size={24} />
            <FaTwitter size={24} />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
