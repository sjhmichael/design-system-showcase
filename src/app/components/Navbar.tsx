"use client";

import React from "react";
import Logo from "./../../../public/icons/Logo.svg";
import Image from "next/image";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { useState, useEffect } from "react";

function Navbar() {
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 900px)");
    const handleResize = () => {
      setNav(false);
    };
    mediaQuery.addListener(handleResize);
    return () => {
      mediaQuery.removeListener(handleResize);
    };
  }, []);

  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full flex justify-center py-8 px-8 fixed z-10">
      {/* desktop menu */}
      <div
        className={
          !nav
            ? "flex py-5 px-8 rounded-lg items-center bg-gray-900 drop-shadow-lg w-fit flex-row flex-grow justify-between text-gray-300 content-center max-w-[1000px]"
            : "hidden"
        }
      >
        <Link href="/">
          <div className="w-[128px]">
            <Image src={Logo} alt="Logo" />
          </div>
        </Link>
        <ul className="hidden space-x-10 min-[900px]:flex">
          <li>
            <Link href="/features" className="hover:text-gray-100 duration-300">
              Features
            </Link>
          </li>
          <li>
            <Link href="/features" className="hover:text-gray-100 duration-300">
              Resources
            </Link>
          </li>
          <li>
            <Link href="/pricing" className="hover:text-gray-100 duration-300">
              Pricing
            </Link>
          </li>
          <li>
            {" "}
            <Link href="/features" className="hover:text-gray-100 duration-300">
              Services
            </Link>
          </li>
        </ul>
        <div className="flex gap-6">
          <FaGithub size={24} />
          <FaXTwitter size={24} />
          <div
            onClick={handleClick}
            className="flex min-[900px]:hidden hover:cursor-pointer"
          >
            <FaBars size={24} />
          </div>
        </div>
      </div>

      {/* mobile menu */}
      <div
        className={
          !nav
            ? "-translate-x-full absolute w-full h-screen top-0 left-0 bg-[#03040c] flex flex-col justify-start space-y-8 z-10 duration-300 p-10"
            : "absolute w-full h-screen top-0 left-0 bg-[#03040c] flex flex-col justify-start space-y-8 z-10 duration-300 p-10"
        }
      >
        <div className="flex flex-row w-full items-center justify-between">
          <Link href="/" onClick={handleClick}>
            <div className="w-[128px]">
              <Image src={Logo} alt="Logo" />
            </div>
          </Link>
          <FaTimes
            size={24}
            onClick={handleClick}
            className="fill-gray-300 hover:fill-gray-100 hover:scale-[1.2] duration-300"
          />
        </div>

        <ul className="space-y-10 text-gray-300">
          <li>
            <Link
              onClick={handleClick}
              className="hover:text-gray-100 duration-300"
              href="/features"
            >
              Features
            </Link>
          </li>
          <li>
            {" "}
            <Link
              onClick={handleClick}
              href="/features"
              className="hover:text-gray-100 duration-300"
            >
              Resources
            </Link>
          </li>
          <li>
            {" "}
            <Link
              onClick={handleClick}
              href="/pricing"
              className="hover:text-gray-100 duration-300"
            >
              Pricing
            </Link>
          </li>
          <li>
            {" "}
            <Link
              onClick={handleClick}
              href="/features"
              className="hover:text-gray-100 duration-300"
            >
              Services
            </Link>
          </li>
        </ul>
        <div className="border-t border-gray-700"></div>
        <div className="flex gap-6 ">
          <FaGithub className="fill-gray-300" size={24} />
          <FaXTwitter className="fill-gray-300" size={24} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
