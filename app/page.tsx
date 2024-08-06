"use client";
import "./globals.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel, FreeMode } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Homes from "./components/home/Home";
import { Intro } from "./components/intro/Intro";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";

SwiperCore.use([Navigation, Mousewheel, FreeMode]);

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const swiperRef = useRef(null);
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  const enterHideLoop = useRef(null);
  const showIntro = useRef(null);
  const showAbout = useRef(null);

  useEffect(() => {
    const handleGestureStart = (e) => {
      e.preventDefault();
      document.body.style.zoom = '0.99';
    };

    const handleGestureChange = (e) => {
      e.preventDefault();
      document.body.style.zoom = '0.99';
    };

    const handleGestureEnd = (e) => {
      e.preventDefault();
      document.body.style.zoom = '1';
    };

    document.addEventListener('gesturestart', handleGestureStart);
    document.addEventListener('gesturechange', handleGestureChange);
    document.addEventListener('gestureend', handleGestureEnd);

    return () => {
      document.removeEventListener('gesturestart', handleGestureStart);
      document.removeEventListener('gesturechange', handleGestureChange);
      document.removeEventListener('gestureend', handleGestureEnd);
    };
  }, []);

  useEffect(() => {
    const swiper = swiperRef.current.swiper;
    if (!swiper) return;

    const onSetTranslate = () => {
      if (showIntro.current && showAbout.current) {
        const swiperWidth = swiper.wrapperEl.clientWidth;
        const swiperTranslate = swiper.translate;
        const swiperRightEdge = swiperTranslate + swiperWidth;

        // Show Intro when Swiper's right edge is near showIntro
        if (swiperRightEdge < 1920) {
          if((swiperRightEdge - 1080) <= 0){
            gsap.to(showIntro.current, { x: 0, opacity: 1, duration: 1 });
          } else {
            gsap.to(showIntro.current, { x: swiperRightEdge - 1080, opacity: 1, duration: 1 });
          }
        } else {
          gsap.to(showIntro.current, { x: 0, opacity: 0, duration: 1 });
        }

        // Show About when Swiper's right edge is near showAbout
        if (swiperRightEdge < 1920) {
          if((swiperRightEdge - 1080) <= 0){
            gsap.to(showAbout.current, { x: 0, opacity: 1, duration: 1 });
          } else {
            gsap.to(showAbout.current, { x: swiperRightEdge - 1080, opacity: 1, duration: 1 });
          }
        } else {
          gsap.to(showAbout.current, { x: 0, opacity: 0, duration: 1 });
        }
      }
    };

    swiper.on('setTranslate', onSetTranslate);

    if (enterHideLoop.current) {
      gsap.fromTo(
        enterHideLoop.current,
        { x: 0 },
        {
          x: 24,
          duration: 2,
          opacity: 0,
          repeat: -1,
          ease: "power1.out"
        }
      );
    }

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

    tl.to(swiper.wrapperEl, {
      duration: 1.5,
      ease: 'power1.out',
      x: -swiper.translate,
      onUpdate: () => {
        swiper.update();
      }
    });

    const onScroll = (event) => {
      tl.duration(Math.abs(event.deltaY) / 1000);
      tl.play();
    };

    swiper.el.addEventListener('scroll', onScroll);

    const cursor = cursorRef.current;
    const follower = followerRef.current;

    const moveCursor = (event) => {
      gsap.to(cursor, { left: event.clientX, top: event.clientY, duration: 0.1 });
      gsap.to(follower, { left: event.clientX, top: event.clientY, duration: 0.2 });
    };

    document.addEventListener("mousemove", moveCursor);

    return () => {
      if (swiper.el) {
        swiper.el.removeEventListener('scroll', onScroll);
      }
      document.removeEventListener("mousemove", moveCursor);
      swiper.off('setTranslate', onSetTranslate);
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
        <SwiperSlide className='w-full min-h-screen flex justify-center container mx-auto'>
          <div className="grid grid-cols-2 gap-6 min-h-screen mx-24">
              <div ref={showIntro} className="col flex justify-center">
                <div className="relative">
                  <Intro />
                  <div  className="absolute top-1/2 right-0 transform -translate-y-44 translate-x-1/2  bg-white flex items-center justify-center border-r min-h-[200px]">
                  </div>
                </div>
              </div>
              <div ref={showAbout} className="col flex justify-center">
                <div className="relative">
                    <About />
                </div>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='w-full min-h-screen flex items-center justify-center'>
          <Experience />
        </SwiperSlide>
      </Swiper>  
    </>
  );
}
