"use client";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PageAnimations = () => {
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("( prefers-reduced-motion: no-preference )", () => {
      gsap.set("section, .three-col > *", { autoAlpha: 0, yPercent: 10 });
      document.querySelectorAll("main > section").forEach(section => {
        gsap.to(section, {
          autoAlpha: 1,
          yPercent: 0,
          scrollTrigger: {
            trigger: section,
            start: "top bottom-=20%",
            markers: true,
          },
          onComplete: () => staggerCols(section),
        });
      });

      const staggerCols = (elem: Element) => {
        const items = elem.querySelectorAll(".three-col > *");
        gsap.to(items, {
          autoAlpha: 1,
          yPercent: 0,
          stagger: 0.2,
        });
      };
    });

    return () => mm.revert();
  });

  return <></>;
};

export default PageAnimations;
