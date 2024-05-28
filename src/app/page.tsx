"use client";

import StarGrid from "./components/StarGrid";
import Main from "./components/Main";
import Reviews from "./components/Reviews";
import Bento from "./components/Bento";
import Integrations from "./components/Integrations";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
  const container = useRef(null);
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useGSAP(
    () => {
      gsap.fromTo(
        ".integrations",
        { y: 100 },
        {
          y: 0,
          ease: "power2.inOut",
          duration: 0.5,
          opacity: 1,
          scrollTrigger: {
            trigger: ".integrations",
            toggleActions: "play pause resume reverse",
          },
        }
      );

      gsap.fromTo(
        ".bento",
        { y: 100 },
        {
          y: 0,
          ease: "power2.inOut",
          duration: 0.5,
          opacity: 1,
          scrollTrigger: {
            trigger: ".bento",
            toggleActions: "play pause resume reverse",
          },
        }
      );

      gsap.fromTo(
        ".reviews",
        { y: 100 },
        {
          y: 0,
          ease: "power2.inOut",
          duration: 0.5,
          opacity: 1,
          scrollTrigger: {
            trigger: ".reviews",
            toggleActions: "play pause resume reverse",
          },
        }
      );
    },
    { scope: container }
  );

  return (
    <div ref={container}>
      <StarGrid />
      <Main />
      <div className="integrations opacity-0">
        <Integrations />
      </div>
      <div className="bento opacity-0">
        <Bento />
      </div>
      <div className="reviews opacity-0">
        <Reviews />
      </div>
    </div>
  );
}
