"use client";

import React, { useEffect } from "react";
import FAQ from "./FAQ";
import Apps from "../../../public/icons/AppsIcon";
import AppsIcon from "../../../public/icons/AppsIcon";
import LightningIcon from "../../../public/icons/LightningIcon";

function ServicesMain() {

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.getElementById("cards").onmousemove = (e) => {
        for (const card of document.getElementsByClassName("card")) {
          const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;

          card.style.setProperty("--mouse-x", `${x}px`);
          card.style.setProperty("--mouse-y", `${y}px`);
        }
      };
    }
  }, [])

  return (
    <div className="w-full px-8 flex justify-center">
      <div className="max-w-[1000px] flex flex-col justify-center md:pt-[200px] pt-[172px]">
        <div className="flex md:flex-row text-gray-100 items-center mb-32 flex-col">
          <div className="flex flex-col basis-full text-balance space-y-8 mb-8">
            <h1 className="text-5xl font-medium">Have a chat with us!</h1>
            <p>
              It doesn't matter if you send millions or hundreds of emails every
              month. You need every guarantee that your messages will arrive on
              time, that your data will be safely stored, and always available.
            </p>
          </div>
          <div className="p-8 border-gray-800 border-[1px] rounded-lg flex flex-col space-y-8 basis-full w-full">
            <div className="flex flex-col">
              <label>Email Address</label>
              <input
                type="text"
                placeholder="Enter your email"
                className="rounded-md p-2"
              />
            </div>
            <div className="flex flex-col">
              <label>How can we help?</label>
              <textarea
                placeholder="Describe you request or just send us a message!"
                rows={4}
                className="rounded-md p-2"
              />
            </div>
            <button className="p-4 rounded-lg bg-slate-700">Submit</button>
          </div>
        </div>
        <div className="flex flex-col justify-center text-gray-100 mb-24">
          <div className="flex flex-col justify-center space-y-8 mb-8">
            <h1 className="font-medium text-5xl mb-8 text-center">
              What can we do for you?
            </h1>
            <p className="text-gray-400 text-center">
              Our goal is to craft an interface that fully encompasses the
              product's scope and to provide detailed requirements for the
              development stage. We achieve this through wireframing and
              prototyping in Figma and the creation of a comprehensive Component
              Library, all integrated within a Design System.
            </p>
          </div>
          <div id="cards">
            <div class="card">
              <div class="card-border "></div>
              <div class="card-content "></div>
            </div>
            <div class="card">
              <div class="card-border"></div>
              <div class="card-content"></div>
            </div>
            <div class="card">
              <div class="card-border"></div>
              <div class="card-content"></div>
            </div>
            <div class="card">
              <div class="card-border"></div>
              <div class="card-content"></div>
            </div>
            <div class="card">
              <div class="card-border"></div>
              <div class="card-content"></div>
            </div>
            <div class="card">
              <div class="card-border"></div>
              <div class="card-content"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-8 text-gray-100 text-center mb-16">
          <h1 className="text-5xl font-medium">FAQs</h1>
          <FAQ />
        </div>
      </div>
    </div>
  );
}

export default ServicesMain;
