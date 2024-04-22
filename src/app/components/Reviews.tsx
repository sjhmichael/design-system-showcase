import React from "react";
import Image from "next/image";

function Reviews() {
  return (
    <div className="w-full px-8 justify-center flex md:mb-[128px] mb-24">
      <div className="h-full max-w-[1000px] text-center flex flex-col">
        {/* Header */}
        <div className="flex flex-col items-center space-y-8">
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

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 pt-16">
          {/* FIRST GRID COL */}
          <div className="gap-4 flex flex-col relative md:mt-16 mt-0">
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
              </p>
            </div>
          </div>

          {/* 2ND GRID COL */}
          <div className="gap-4 flex flex-col relative ">
            {/* Sub grid item */}
            <div className="bg-gray-800 text-gray-300 relative flex row flex-col lg:w-fit text-balance text-left p-4 drop-shadow-md rounded-lg w-full h-fit">
              <div className="flex flex-row gap-4 items-center">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                  src="https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=2598&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                  src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                detail.
              </p>
            </div>
          </div>

          {/* 3RD GRID COL */}
          <div className="gap-4 flex flex-col relative md:mt-16 mt-0">
            {/* Sub grid item */}
            <div className="bg-gray-800 text-gray-300 relative flex row flex-col lg:w-fit text-balance text-left p-4 drop-shadow-md rounded-lg w-full h-fit">
              <div className="flex flex-row gap-4 items-center">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
