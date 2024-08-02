// pages/index.js
"use client";
import { BsArrowRight } from "react-icons/bs";
import "./globals.css";
import { IoEllipsisVerticalOutline } from "react-icons/io5";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, Mousewheel, FreeMode } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Homes from "./components/home/Home";
import { Intro } from "./components/intro/Intro";
import About from "./components/about/About";

// Import Swiper core and required modules
SwiperCore.use([Navigation, Mousewheel, FreeMode]);

export default function Home() {
  const swiperRef:any = useRef(null);
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const swiper = swiperRef.current.swiper;

    // Check if swiper is initialized
    if (!swiper) return;

    // GSAP Animation for the slow mouse over effect
    const elements = document.querySelectorAll(".text-container h1, .text-container span");

    elements.forEach(element => {
      gsap.fromTo(element, 
        { opacity: 0, x: -50 }, 
        { opacity: 1, x: 0, duration: 1, ease: "power1.out" }
      );

      element.addEventListener("mouseenter", () => {
        gsap.to(element, { opacity: 0.8, x: 20, duration: 1, ease: "power1.out" });
      });

      element.addEventListener("mouseleave", () => {
        gsap.to(element, { opacity: 1, x: 0, duration: 1, ease: "power1.out" });
      });
    });

    const tl = gsap.timeline({ paused: true });

    // Animation for slow motion effect
    tl.to(swiper.wrapperEl, {
      duration: 1.5,
      ease: 'power1.out',
      x: -swiper.translate,
      onUpdate: () => {
        // Keep GSAP animation in sync with Swiper's translate
        swiper.update();
      }
    });

    const onScroll = (event:any) => {
      // Adjust the duration based on the scroll delta
      tl.duration(Math.abs(event.deltaY) / 1000);
      // Start GSAP animation on scroll
      tl.play();
    };

    // Attach the scroll event handler
    swiper.el.addEventListener('scroll', onScroll);

    // Custom cursor animation
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    const moveCursor = (event:any) => {
      gsap.to(cursor, { left: event.clientX, top: event.clientY, duration: 0.1 });
      gsap.to(follower, { left: event.clientX, top: event.clientY, duration: 0.2 });
    };

    document.addEventListener("mousemove", moveCursor);

    return () => {
      // Check if swiper.el exists before removing the event listener
      if (swiper.el) {
        swiper.el.removeEventListener('scroll', onScroll);
      }
      document.removeEventListener("mousemove", moveCursor);
    };

  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor"></div>
      <div ref={followerRef} className="cursor-follower"></div>
      <Swiper
        className='w-full min-h-screen'
        mousewheel={false}
        freeMode={true}
        allowTouchMove={true}
        scrollbar={{ draggable: true }}
        modules={[Navigation, FreeMode]}
        speed={1000} // Transition speed in ms
        ref={swiperRef}
      >
        <SwiperSlide className='w-full min-h-screen flex items-center justify-center'>
          <Homes />
        </SwiperSlide>
        <SwiperSlide className='w-full min-h-screen flex items-center justify-center'>
          <div className="grid grid-cols-2">
              <div className="col flex">
                <div><Intro /></div>
                <div className="min-h-96 border-r-2 border-dashed border-r-arrow"></div>
              </div>
              <div className="col">
                <div className="show-abouts">
                    <About />
                </div>
              </div>
          </div>
        </SwiperSlide>
      </Swiper>  
    </>
  );
}
