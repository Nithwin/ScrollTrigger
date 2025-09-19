"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const ref = useRef();
  useEffect(() => {
    gsap.fromTo(ref.current, {
      opacity:0,
      y:100,
    }, {
      opacity:1,
      duration:1, 
      y:0,
      scrollTrigger:{
        trigger:ref.current,
        start: 'top 90%',
        end:'bottom 30%',
        toggleActions:'play none none reverse',
        markers:true,
        
      }
    })
  },[])
  return (
    <section className="bg-gray-200 min-h-[150vh] p-10 py-[10rem]">
      <div className="flex flex-col justify-center items-center">
        <div  className=".box h-20 w-20 bg-purple-600/30 rounded-4xl shadow-purple-300 shadow-2xl backdrop-blur-3xl border-2 border-purple-700 my-32 ">

        </div>
        <div ref={ref}  className=".box h-40 w-40 bg-purple-600/30 rounded-4xl shadow-purple-300 shadow-2xl backdrop-blur-3xl border-2 border-purple-700 my-32 ">

        </div>
      
        <div className=".box h-40 w-40 bg-purple-600/30 rounded-4xl shadow-purple-300 shadow-2xl backdrop-blur-3xl border-2 border-purple-700 my-32 ">

        </div>

      </div>
    </section>
  )
}

export default Home