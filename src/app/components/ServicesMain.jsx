"use client";

import React, { useEffect } from "react";
import FAQ from "./FAQ";
import AppsIcon from "../../../public/icons/AppsIcon";
import LightningIcon from "../../../public/icons/LightningIcon";

function ServicesMain() {

  const cardContent = [
    {
      index: 0,
      icon: <LightningIcon className="fill-gray-600 w-32" />,
      header: "Lorem Ipsum",
      description: "We offer custom creation or improvement of your Design System."
    },
    {
      index: 1,
      icon: <AppsIcon className="fill-gray-600 w-32" />,
      header: "Lorem Ipsum",
      description: "We offer custom creation or improvement of your Design System."
    },
    {
      index: 2,
      icon: <LightningIcon className="fill-gray-600 w-32" />,
      header: "Lorem Ipsum",
      description: "We offer custom creation or improvement of your Design System."
    },
    {
      index: 3,
      icon: <AppsIcon className="fill-gray-600 w-32" />,
      header: "Lorem Ipsum",
      description: "We offer custom creation or improvement of your Design System."
    },
    {
      index: 4,
      icon: <AppsIcon className="fill-gray-600 w-32" />,
      header: "Lorem Ipsum",
      description: "We offer custom creation or improvement of your Design System."
    },
    {
      index: 5,
      icon: <LightningIcon className="fill-gray-600 w-32" />,
      header: "Lorem Ipsum",
      description: "We offer custom creation or improvement of your Design System."
    },
  ]

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
            <h1 className="p-2 px-6 border-[1px] rounded-full text-lg border-gray-800 w-fit">Enterprise</h1>
            <h1 className="text-5xl font-medium">Have a chat with us!</h1>
            <p className="text-slate-400">
              It doesn't matter if you send millions or hundreds of emails every
              month. You need every guarantee that your messages will arrive on
              time, that your data will be safely stored, and always available.
            </p>
          </div>
          <div className="p-8 border-gray-800 border-[1px] rounded-lg flex flex-col space-y-8 basis-full w-full hover:border-gray-700 duration-300">
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
                placeholder="Describe your request or just send us a message!"
                rows={4}
                className="rounded-md p-2 resize-none"
              />
            </div>
            <button className="p-3 rounded-lg bg-slate-800 hover:bg-slate-700 duration-300">Submit</button>
          </div>
        </div>
        <div className="flex flex-col justify-center text-gray-100 mb-24">
          <div className="flex flex-col justify-center space-y-8 mb-16">
            <h1 className="font-medium text-5xl text-center">
              What can we do for you?
            </h1>
            <p className="text-slate-400 text-center">
              Our goal is to craft an interface that fully encompasses the
              product's scope and to provide detailed requirements for the
              development stage.
            </p>
          </div>
          <div id="cards">
            {cardContent.map(({ header, description, icon, index }) => (
              <React.Fragment key={index}>
                <div class="card">
                  <div class="card-border" />
                  <div class="card-content justify-center">
                    <div className="flex flex-col px-8 text-center gap-y-4 items-center">
                      {icon}
                      <div className="flex-col flex gap-y-2">
                        <h1 className="font-medium text-lg">{header}</h1>
                        <p className="font-sm text-gray-400">{description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ))}
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
