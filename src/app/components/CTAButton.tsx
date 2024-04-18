// src/components/ButtonLink.tsx

import Link from "next/link";
import React from "react";

export default function ButtonLink() {
  return (
    <Link
      href="/"
      className={
        "focus:ring-offset-3 relative inline-flex h-fit w-fit rounded-full border border-blue-100/20 bg-blue-200/10 px-6 py-3 text-blue-200 outline-none ring-yellow-300 transition-colors after:absolute after:inset-0 after:-z-10 after:animate-pulse after:rounded-full after:bg-yellow-100 after:bg-opacity-0 after:blur-md after:transition-all after:duration-500 hover:border-yellow-200/40 hover:text-yellow-300 after:hover:bg-opacity-15 focus:ring-2"
      }
    >
      Get Started
    </Link>
  );
}
