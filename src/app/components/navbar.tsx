import React from "react";
import WordMark from "./WordMark";

function Navbar() {
  return (
    <div className="w-full flex justify-center py-8 px-8">
      <div className="py-5 px-8 rounded-lg items-center bg-gray-900 drop-shadow-lg w-fit flex flex-row gap-8 justify-between text-gray-300 content-center">
        <WordMark />
        <ul className="flex flex-row gap-8">
          <li>Products</li>
          <li>Resources</li>
          <li>Pricing</li>
          <li>Services</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
