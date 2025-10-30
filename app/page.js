'use client';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);
const Home = () => {
  const box = useRef();
  useEffect(() => {
    gsap.fromTo(box.current, {
      opacity:0,
      x:-100,
      rotate:0,
    },{
      opacity:1,
      duration:1,
      x:100,
      rotate:360,
      scrollTrigger:{
        trigger:box.current,
        start:'top 80%',
        end:'top 30%',
        toggleActions:'play none none reverse',
        markers:false,
        scrub:1,
      }
    })
  },[]);
  return (
    <section className="min-h-screen bg-gray-900 p-3">
      <div className="flex flex-col justify-center items-center gap-[12rem] min-h-[150vh]">
        <div className="h-32 w-32 bg-transparent rounded-2xl flex items-center justify-center text-2xl">1</div>
        <div className="h-32 w-32 bg-transparent rounded-2xl flex items-center justify-center text-2xl">2</div>
        <div ref={box} className="h-32 w-32 bg-emerald-500 rounded-2xl flex items-center justify-center text-2xl">3</div>
        <div className="h-32 w-32 bg-transparent rounded-2xl flex items-center justify-center text-2xl">4</div>
        <div className="h-32 w-32 bg-transparent rounded-2xl flex items-center justify-center text-2xl">5</div>
      </div>
    </section>
  )
}

export default Home