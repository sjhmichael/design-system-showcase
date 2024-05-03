"use client";

import React from "react";
import Image from "next/image";

function Reviews() {
  const reviews = [
    {
      index: 1,
      name: "John Smith",
      role: "Product Designer",
      image:
        "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      index: 2,
      name: "Mary Sue",
      role: "Founder of ReForm",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing commodo elit at imperdiet dui accumsan sit amet.",
    },
    {
      index: 3,
      name: "Jane Smith",
      role: "Co-founder of Tapal",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing commodo elit at imperdiet dui accumsan sit amet. Amet risus nullam eget felis eget nunc. Ridiculus mus mauris vitae ultricies leo integer malesuada.",
    },
    {
      index: 4,
      name: "William Grant",
      role: "Lead Product Designer",
      image:
        "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=2598&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing commodo elit at imperdiet dui accumsan sit amet. Amet risus nullam eget felis eget nunc. Ridiculus mus mauris vitae ultricies leo integer malesuada.",
    },
    {
      index: 5,
      name: "Jack Henry",
      role: "Lead Product Designer",
      image:
        "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing commodo elit at imperdiet dui accumsan sit amet.",
    },
    {
      index: 6,
      name: "Leslie Nielsen",
      role: "Lead Product Designer",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      index: 7,
      name: "John Smith",
      role: "Product Designer",
      image:
        "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      index: 8,
      name: "Mary Sue",
      role: "Founder of ReForm",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing commodo elit at imperdiet dui accumsan sit amet.",
    },
    {
      index: 9,
      name: "Jane Smith",
      role: "Co-founder of Tapal",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing commodo elit at imperdiet dui accumsan sit amet. Amet risus nullam eget felis eget nunc. Ridiculus mus mauris vitae ultricies leo integer malesuada.",
    },
    {
      index: 10,
      name: "William Grant",
      role: "Lead Product Designer",
      image:
        "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=2598&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing commodo elit at imperdiet dui accumsan sit amet. Amet risus nullam eget felis eget nunc. Ridiculus mus mauris vitae ultricies leo integer malesuada.",
    },
    {
      index: 11,
      name: "Jack Henry",
      role: "Lead Product Designer",
      image:
        "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing commodo elit at imperdiet dui accumsan sit amet.",
    },
    {
      index: 12,
      name: "Leslie Nielsen",
      role: "Lead Product Designer",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <div className="w-full justify-center mb-24">
      <div className="text-center flex flex-col items-center overflow-hidden">
        {/* Header */}
        <div className="flex flex-col items-center space-y-8 px-8 max-w-[1000px]">
          <h1 className="text-gray-100 text-5xl font-medium text-balance">
            Made by{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              Developers
            </span>
            ,
            <br /> for{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              Developers
            </span>
            .
          </h1>
          <h1 className="text-slate-400 text-balance">
            Atomic Design System represents a commitment to crafting tools and
            platforms tailored to the needs of the developer community, ensuring
            intuitive interfaces, robust APIs, and comprehensive documentation.
          </h1>
        </div>

        {/* carousel */}

        <div className="reviews group mx-auto -ml-6 -mr-6 flex w-full items-start gap-8 my-24 relative">
          <div className="absolute left-0 top-0 h-full z-10 lg:w-[300px] w-[64px] bg-gradient-to-r via-[#03040cce] from-[#03040c] ... " />
          <div className="absolute right-0 top-0 h-full z-10 lg:w-[300px] w-[64px] bg-gradient-to-l via-[#03040cce] from-[#03040c] ..." />

          {/* first section */}

          <div className="reviews-slide group-hover:animation-paused flex min-w-full shrink-0 animate-scroll-x items-start justify-around gap-8">
            {reviews.map(({ index, name, role, image, description }) => (
              <React.Fragment key={index}>
                <div className="w-[350px] max-w-full rounded-lg p-4 md:w-[400px] text-gray-300 text-left bg-gradient-to-b from-slate-800 from-10%">
                  <p className="mb-4 text-sm">{description}</p>
                  <div className="flex flex-row gap-4 items-center">
                    <img
                      src={image}
                      alt="profile picture"
                      className="rounded-full object-cover h-10 w-10"
                    />
                    <div className="relative flex flex-col">
                      <h1 className="font-medium">{name}</h1>
                      <h1 className="text-gray-400">{role}</h1>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>

          {/* 2nd section */}

          <div className="reviews-slide group-hover:animation-paused flex min-w-full shrink-0 animate-scroll-x items-start justify-around gap-8">
            {reviews.map(({ index, name, role, image, description }) => (
              <React.Fragment key={index}>
                <div className="w-[350px] max-w-full rounded-lg p-4 md:w-[400px] text-gray-300 text-left bg-gradient-to-b from-slate-800 from-10%">
                  <p className="mb-4 text-sm">{description}</p>
                  <div className="flex flex-row gap-4 items-center">
                    <img
                      src={image}
                      alt="profile picture"
                      className="rounded-full object-cover h-10 w-10"
                    />
                    <div className="relative flex flex-col">
                      <h1 className="font-medium">{name}</h1>
                      <h1 className="text-gray-400">{role}</h1>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
