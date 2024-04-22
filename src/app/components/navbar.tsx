import React from "react";
import Logo from "./../../../public/Logo.svg";
import Image from "next/image";
import { FaGithub, FaTwitter, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  return (
    <div className="w-full flex justify-center py-8 px-8 fixed z-10">
      <div className="py-5 px-8 rounded-lg items-center bg-gray-900 drop-shadow-lg w-fit flex flex-row flex-grow justify-between text-gray-300 content-center max-w-[1000px]">
        <div className="w-[128px]">
          <Image src={Logo} alt="Logo" />
        </div>
        <ul className="hidden gap-10 min-[900px]:flex">
          <li>Products</li>
          <li>Resources</li>
          <li>Pricing</li>
          <li>Services</li>
        </ul>
        <div className="flex gap-6">
          <FaGithub size={24} />
          <FaTwitter size={24} />
          <div className="flex min-[900px]:hidden">
            <FaBars size={24} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
