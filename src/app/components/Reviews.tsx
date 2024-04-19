import React from "react";
import Image from "next/image";

function Reviews() {
  return (
    <div className="w-full min-h-[1000px] px-8 justify-center flex">
      <div className="w-full h-full max-w-[1000px] text-center flex flex-col">
        {/* Header */}
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-gray-100 text-5xl font-medium text-balance">
            Made by Developers,
            <br /> for Developers.
          </h1>
          <h1 className="text-slate-400 text-balance">
            Atomic Design System is a carefully crafted UI library with usage
            guidelines and Figma plugin for easier customization. Build and
            prototype your apps faster than ever before.
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
          {/* FIRST GRID COL */}
          <div className="gap-4 mt-24 flex flex-col relative">
            {/* Sub grid item */}
            <div className="bg-gray-800 text-gray-300 relative flex row flex-col lg:w-fit text-balance text-left p-4 drop-shadow-md rounded-lg w-full h-fit">
              <div className="flex flex-row gap-4 items-center">
                <img
                  src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="profile picture"
                  className="rounded-full object-cover h-12 w-12"
                ></img>
                <div className="relative flex flex-col">
                  <h1 className="text-xl font-medium">John Smith</h1>
                  <h1 className="text-base text-gray-400">
                    Lead Product Designer
                  </h1>
                </div>
              </div>
              <p className="mt-6">
                Tetrisly has truly revolutionized my design process with its
                comprehensive design system library and remarkable attention to
                detail.
              </p>
            </div>
            {/* Sub grid item */}
            <div className="bg-gray-800 text-gray-300 relative flex row flex-col lg:w-fit text-balance text-left p-4 drop-shadow-md rounded-lg w-full h-fit">
              <div className="flex flex-row gap-4 items-center">
                <img
                  src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="profile picture"
                  className="rounded-full object-cover h-12 w-12"
                ></img>
                <div className="relative flex flex-col">
                  <h1 className="text-xl font-medium">John Smith</h1>
                  <h1 className="text-base text-gray-400">
                    Lead Product Designer
                  </h1>
                </div>
              </div>
              <p className="mt-6">
                What sets Tetrisly's design system apart, in my view, is its
                approach to streamlining the design process while adhering to
                best practices in usability and ensuring design consistency.
                Subsequently, we engaged freelance support from the Tetrisly
                team, and I must say that the collaboration
              </p>
            </div>
            <div className="bg-gray-800 text-gray-300 relative flex row flex-col lg:w-fit text-balance text-left p-4 drop-shadow-md rounded-lg min-w-full h-fit">
              <div className="flex flex-row gap-4 items-center">
                <img
                  src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="profile picture"
                  className="rounded-full object-cover h-12 w-12"
                ></img>
                <div className="relative flex flex-col">
                  <h1 className="text-xl font-medium">John Smith</h1>
                  <h1 className="text-base text-gray-400">
                    Lead Product Designer
                  </h1>
                </div>
              </div>
              <p className="mt-6">What sets Tetrisly's design system apart.</p>
            </div>
          </div>

          {/* 2ND GRID COL */}
          <div className="gap-4 flex flex-col relative lg:mt-24">
            {/* Sub grid item */}
            <div className="bg-gray-800 text-gray-300 relative flex row flex-col lg:w-fit text-balance text-left p-4 drop-shadow-md rounded-lg w-full h-fit">
              <div className="flex flex-row gap-4 items-center">
                <img
                  src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="profile picture"
                  className="rounded-full object-cover h-12 w-12"
                ></img>
                <div className="relative flex flex-col">
                  <h1 className="text-xl font-medium">John Smith</h1>
                  <h1 className="text-base text-gray-400">
                    Lead Product Designer
                  </h1>
                </div>
              </div>
              <p className="mt-6">
                Tetrisly has truly revolutionized my design process with its
                comprehensive design system library and remarkable attention to
                detail. What I appreciate most is its flexibility, allowing me
                to easily adapt it to various projects while maintaining brand
                consistency effortlessly.
              </p>
            </div>
            {/* Sub grid item */}
            <div className="bg-gray-800 text-gray-300 relative flex row flex-col lg:w-fit text-balance text-left p-4 drop-shadow-md rounded-lg w-full h-fit">
              <div className="flex flex-row gap-4 items-center">
                <img
                  src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="profile picture"
                  className="rounded-full object-cover h-12 w-12"
                ></img>
                <div className="relative flex flex-col">
                  <h1 className="text-xl font-medium">John Smith</h1>
                  <h1 className="text-base text-gray-400">
                    Lead Product Designer
                  </h1>
                </div>
              </div>
              <p className="mt-6">
                What sets Tetrisly's design system apart, in my view, is its
                approach to streamlining the design process while adhering to
              </p>
            </div>
            <div className="bg-gray-800 text-gray-300 relative flex row flex-col lg:w-fit text-balance text-left p-4 drop-shadow-md rounded-lg w-full h-fit">
              <div className="flex flex-row gap-4 items-center">
                <img
                  src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="profile picture"
                  className="rounded-full object-cover h-12 w-12"
                ></img>
                <div className="relative flex flex-col">
                  <h1 className="text-xl font-medium">John Smith</h1>
                  <h1 className="text-base text-gray-400">
                    Lead Product Designer
                  </h1>
                </div>
              </div>
              <p className="mt-6">
                {" "}
                Tetrisly has truly revolutionized my design process with its
                comprehensive design system library and remarkable attention to
                detail. What I appreciate most is its flexibility, allowing me
                to easily adapt it to various projects while maintaining brand
                consistency effortlessly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
