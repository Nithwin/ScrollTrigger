"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
gsap.registerPlugin(ScrollTrigger);
const Anime = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothTouch: true,
    });

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
    };
  }, []);

  const animeted_ref = useRef();
  const animeted_ref2 = useRef();
  useEffect(() => {
    gsap.to(".animated-element", {
      x: 800,
      scrollTrigger: {
        trigger: ".animated-element2",
        pin:'.animated-element',
        pinSpacing:false,
        start: "top center",
        end: "bottom center",
        scrub: true,
        markers: true,
      },
    });
  }, []);

  return (
    <section className="m-0 p-0 text-2xl">
      <div className="spacer"></div>
      <div className="spacer">
        <div ref={animeted_ref} className="animated-element">
        </div>
        <div ref={animeted_ref2} className="animated-element2">
        </div>
      </div>
      <div className="spacer"></div>
    </section>
  );
};

export default Anime;
