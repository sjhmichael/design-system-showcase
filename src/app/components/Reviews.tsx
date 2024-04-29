import React from "react";
import Image from "next/image";

function Reviews() {
  const reviews = [
    {
      index: 1,
      name: "John Smith",
      role: "Lead Product Designer",
      image:
        "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Atomic Design System represents a commitment to crafting tools and platforms tailored to the needs of the developer community, ensuring intuitive interfaces, robust APIs, and comprehensive documentation.",
    },
    {
      index: 2,
      name: "John Smith 1",
      role: "Lead Product Designer",
      image:
        "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Atomic Design System represents a commitment to crafting tools and platforms tailored to the needs of the developer community, ensuring intuitive interfaces, robust APIs, and comprehensive documentation.",
    },
    {
      index: 3,
      name: "John Smith 2",
      role: "Lead Product Designer",
      image:
        "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Atomic Design System represents a commitment to crafting tools and platforms tailored to the needs of the developer community, ensuring intuitive interfaces, robust APIs, and comprehensive documentation.",
    },
    {
      index: 4,
      name: "John Smith 3",
      role: "Lead Product Designer",
      image:
        "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Atomic Design System represents a commitment to crafting tools and platforms tailored to the needs of the developer community, ensuring intuitive interfaces, robust APIs, and comprehensive documentation.",
    },
    {
      index: 5,
      name: "John Smith 4",
      role: "Lead Product Designer",
      image:
        "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Atomic Design System represents a commitment to crafting tools and platforms tailored to the needs of the developer community, ensuring intuitive interfaces, robust APIs, and comprehensive documentation.",
    },
    {
      index: 6,
      name: "John Smith 5",
      role: "Lead Product Designer",
      image:
        "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Atomic Design System represents a commitment to crafting tools and platforms tailored to the needs of the developer community, ensuring intuitive interfaces, robust APIs, and comprehensive documentation.",
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
        <div className="reviews group mx-auto -ml-6 -mr-6 flex w-full items-start gap-8 my-24 relative">
          <div className="absolute left-0 top-0 h-full z-10 lg:w-[300px] w-[64px] bg-gradient-to-r via-[#03040cce] from-[#03040c] ... " />
          <div className="absolute right-0 top-0 h-full z-10 lg:w-[300px] w-[64px] bg-gradient-to-l via-[#03040cce] from-[#03040c] ..." />
          {/* first section */}

          <div className="reviews-slide group-hover:animation-paused flex min-w-full shrink-0 animate-scroll-x items-start justify-around gap-8">
            <div className="w-[350px] max-w-full rounded-lg p-4 md:w-[400px] text-gray-100 bg-slate-800 text-left">
              <p className="mb-4 text-sm">
                Atomic has truly revolutionized my design process with its
                comprehensive design system library and remarkable attention to
                detail.
              </p>
              <div className="flex flex-row gap-4 items-center">
                <img
                  src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="profile picture"
                  className="rounded-full object-cover h-10 w-10"
                />
                <div className="relative flex flex-col">
                  <h1 className="font-medium">John Smith</h1>
                  <h1 className="text-gray-400">Lead Product Designer</h1>
                </div>
              </div>
            </div>
            <div className="w-[350px] max-w-full rounded-lg p-4 md:w-[400px] text-gray-100 bg-slate-800 text-left">
              <p className="mb-4 text-sm">
                Atomic has truly revolutionized my design process with its
                comprehensive design system library and remarkable attention to
                detail.
              </p>
              <div className="flex flex-row gap-4 items-center">
                <img
                  src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="profile picture"
                  className="rounded-full object-cover h-10 w-10"
                />
                <div className="relative flex flex-col">
                  <h1 className="font-medium">John Smith</h1>
                  <h1 className="text-gray-400">Lead Product Designer</h1>
                </div>
              </div>
            </div>
            <div className="w-[350px] max-w-full rounded-lg p-4 md:w-[400px] text-gray-100 bg-slate-800 text-left">
              <p className="mb-4 text-sm">
                Atomic has truly revolutionized my design process with its
                comprehensive design system library and remarkable attention to
                detail.
              </p>
              <div className="flex flex-row gap-4 items-center">
                <img
                  src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="profile picture"
                  className="rounded-full object-cover h-10 w-10"
                />
                <div className="relative flex flex-col">
                  <h1 className="font-medium">John Smith</h1>
                  <h1 className="text-gray-400">Lead Product Designer</h1>
                </div>
              </div>
            </div>
            <div className="w-[350px] max-w-full rounded-lg p-4 md:w-[400px] text-gray-100 bg-slate-800 text-left">
              <p className="mb-4 text-sm">
                Atomic has truly revolutionized my design process with its
                comprehensive design system library and remarkable attention to
                detail.
              </p>
              <div className="flex flex-row gap-4 items-center">
                <img
                  src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="profile picture"
                  className="rounded-full object-cover h-10 w-10"
                />
                <div className="relative flex flex-col">
                  <h1 className="font-medium">John Smith</h1>
                  <h1 className="text-gray-400">Lead Product Designer</h1>
                </div>
              </div>
            </div>
            <div className="w-[350px] max-w-full rounded-lg p-4 md:w-[400px] text-gray-100 bg-slate-800 text-left">
              <p className="mb-4 text-sm">
                Atomic has truly revolutionized my design process with its
                comprehensive design system library and remarkable attention to
                detail.
              </p>
              <div className="flex flex-row gap-4 items-center">
                <img
                  src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="profile picture"
                  className="rounded-full object-cover h-10 w-10"
                />
                <div className="relative flex flex-col">
                  <h1 className="font-medium">John Smith</h1>
                  <h1 className="text-gray-400">Lead Product Designer</h1>
                </div>
              </div>
            </div>
            <div className="w-[350px] max-w-full rounded-lg p-4 md:w-[400px] text-gray-100 bg-slate-800 text-left">
              <p className="mb-4 text-sm">
                Atomic has truly revolutionized my design process with its
                comprehensive design system library and remarkable attention to
                detail.
              </p>
              <div className="flex flex-row gap-4 items-center">
                <img
                  src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="profile picture"
                  className="rounded-full object-cover h-10 w-10"
                />
                <div className="relative flex flex-col">
                  <h1 className="font-medium">John Smith</h1>
                  <h1 className="text-gray-400">Lead Product Designer</h1>
                </div>
              </div>
            </div>
          </div>
          {/* 2nd section */}
          <div className="reviews-slide group-hover:animation-paused flex min-w-full shrink-0 animate-scroll-x items-start justify-around gap-8">
            <div className="w-[350px] max-w-full rounded-lg p-4 md:w-[400px] text-gray-100 bg-slate-800 text-left">
              <p className="mb-4 text-sm">
                Atomic has truly revolutionized my design process with its
                comprehensive design system library and remarkable attention to
                detail.
              </p>
              <div className="flex flex-row gap-4 items-center">
                <img
                  src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="profile picture"
                  className="rounded-full object-cover h-10 w-10"
                />
                <div className="relative flex flex-col">
                  <h1 className="font-medium">John Smith</h1>
                  <h1 className="text-gray-400">Lead Product Designer</h1>
                </div>
              </div>
            </div>
            <div className="w-[350px] max-w-full rounded-lg p-4 md:w-[400px] text-gray-100 bg-slate-800 text-left">
              <p className="mb-4 text-sm">
                Atomic has truly revolutionized my design process with its
                comprehensive design system library and remarkable attention to
                detail.
              </p>
              <div className="flex flex-row gap-4 items-center">
                <img
                  src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="profile picture"
                  className="rounded-full object-cover h-10 w-10"
                />
                <div className="relative flex flex-col">
                  <h1 className="font-medium">John Smith</h1>
                  <h1 className="text-gray-400">Lead Product Designer</h1>
                </div>
              </div>
            </div>
            <div className="w-[350px] max-w-full rounded-lg p-4 md:w-[400px] text-gray-100 bg-slate-800 text-left">
              <p className="mb-4 text-sm">
                Atomic has truly revolutionized my design process with its
                comprehensive design system library and remarkable attention to
                detail.
              </p>
              <div className="flex flex-row gap-4 items-center">
                <img
                  src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="profile picture"
                  className="rounded-full object-cover h-10 w-10"
                />
                <div className="relative flex flex-col">
                  <h1 className="font-medium">John Smith</h1>
                  <h1 className="text-gray-400">Lead Product Designer</h1>
                </div>
              </div>
            </div>
            <div className="w-[350px] max-w-full rounded-lg p-4 md:w-[400px] text-gray-100 bg-slate-800 text-left">
              <p className="mb-4 text-sm">
                Atomic has truly revolutionized my design process with its
                comprehensive design system library and remarkable attention to
                detail.
              </p>
              <div className="flex flex-row gap-4 items-center">
                <img
                  src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="profile picture"
                  className="rounded-full object-cover h-10 w-10"
                />
                <div className="relative flex flex-col">
                  <h1 className="font-medium">John Smith</h1>
                  <h1 className="text-gray-400">Lead Product Designer</h1>
                </div>
              </div>
            </div>
            <div className="w-[350px] max-w-full rounded-lg p-4 md:w-[400px] text-gray-100 bg-slate-800 text-left">
              <p className="mb-4 text-sm">
                Atomic has truly revolutionized my design process with its
                comprehensive design system library and remarkable attention to
                detail.
              </p>
              <div className="flex flex-row gap-4 items-center">
                <img
                  src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="profile picture"
                  className="rounded-full object-cover h-10 w-10"
                />
                <div className="relative flex flex-col">
                  <h1 className="font-medium">John Smith</h1>
                  <h1 className="text-gray-400">Lead Product Designer</h1>
                </div>
              </div>
            </div>
            <div className="w-[350px] max-w-full rounded-lg p-4 md:w-[400px] text-gray-100 bg-slate-800 text-left">
              <p className="mb-4 text-sm">
                Atomic has truly revolutionized my design process with its
                comprehensive design system library and remarkable attention to
                detail.
              </p>
              <div className="flex flex-row gap-4 items-center">
                <img
                  src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="profile picture"
                  className="rounded-full object-cover h-10 w-10"
                />
                <div className="relative flex flex-col">
                  <h1 className="font-medium">John Smith</h1>
                  <h1 className="text-gray-400">Lead Product Designer</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
