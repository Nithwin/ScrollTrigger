'use client';
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import React, { useEffect } from 'react'

gsap.registerPlugin(ScrollTrigger);
const TimeLine = () => {
    useEffect(() => {
        // gsap.to('.box', {
        //     x:500,duration:2
        // })
        // gsap.to('.box', {
        //     y:200, duration:3, delay:2
        // })
        // gsap.to('.box', {
        //     x:0, duration:3, delay:5
        // })
        const tl = gsap.timeline({
            scrollTrigger:{
                trigger:'.box',
                markers:true,
                start:'top 80%',
                end:'top 30%',
                scrub:1,
            }
        });
        tl.to('.box', {
            x:500,duration:2
        }).to('.box', {
            y:200,duration:3
        }).to('.box', {
            x:0, duration:2
        })
    },[]);
  return (
    <section className='m-0'>
        <div className='h-screen bg-pink-300'></div>
        <div className='w-[100px] h-[100px] bg-blue-600 box'></div>
        <div className='h-screen bg-pink-300'></div>
    </section>
  )
}

export default TimeLine