'use client';
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import React, { useEffect } from 'react'

gsap.registerPlugin(ScrollTrigger);

 const StandAlone = () => {
    useEffect(() => {
        ScrollTrigger.create({
        trigger:'.box',
        start:'top 80%',
        end:'top 50%',
        markers:true,
        toggleClass: 'bg-red-500'
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

export default StandAlone;