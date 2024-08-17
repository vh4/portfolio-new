"use client";
import "./globals.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel, FreeMode } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Homes from "./components/home/Home";
import { Intro } from "./components/intro/Intro";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";

SwiperCore.use([Navigation, Mousewheel, FreeMode]);

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const swiperRef:any = useRef(null);
  const cursorRef:any = useRef(null);
  const followerRef:any = useRef(null);

  const enterHideLoop:any = useRef(null);
  const showIntro:any = useRef(null);
  const showAbout:any = useRef(null);

  const showATextIntro:any = useRef(null);
  const showATextTitleIntro:any = useRef(null);
  const borderZeroToHundredPercen:any = useRef(null);
  const persenRef:any = useRef(null);
  const chars = useRef<HTMLDivElement[]>([]); // Inisialisasi dengan array kosong
  const showLembar:any = useRef(null);
  const animations:any = useRef(null);
  const transision:any = useRef(null);

  // mobile

  const swipperMobile:any = useRef(null);
  const cursorRefMobile:any = useRef(null);
  const followerRefMobile:any = useRef(null);


  const showATextIntroMobile:any = useRef(null);
  const showATextTitleIntroMobile:any = useRef(null);
  const borderZeroToHundredPercenMobile:any = useRef(null);
  const persenRefMobile:any = useRef(null);
  const charsMobile = useRef<HTMLDivElement[]>([]); // Inisialisasi dengan array kosong
  const showLembarMobile:any = useRef(null);
  const animationsMobile:any = useRef(null);
  const transisionMobile:any = useRef(null);

  
  const [currentPercent, setCurrentPercent] = useState(0);

  const [currentPercentMobile, setCurrentPercentMobile] = useState(0);

  useEffect(() => {
    const handleGestureStart = (e:any) => {
      e.preventDefault();
      document.body.style.zoom = '0.99';
    };

    const handleGestureChange = (e:any) => {
      e.preventDefault();
      document.body.style.zoom = '0.99';
    };

    const handleGestureEnd = (e:any) => {
      e.preventDefault();
      document.body.style.zoom = '1';
    };

    document.addEventListener('gesturestart', handleGestureStart);
    document.addEventListener('gesturechange', handleGestureChange);
    document.addEventListener('gestureend', handleGestureEnd);

    const handleWheel = (event:any) => {
      if (event.ctrlKey) {
        event.preventDefault();
        window.scrollBy(0, event.deltaY);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      document.removeEventListener('gesturestart', handleGestureStart);
      document.removeEventListener('gesturechange', handleGestureChange);
      document.removeEventListener('gestureend', handleGestureEnd);
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  // desktop
  useEffect(() => {
    if (
      showATextTitleIntro.current &&
      showATextIntro.current &&
      chars.current
      && 
      animations.current
    ) {
      const maxPercent = 100;
  
      const tl = gsap.timeline({
        onUpdate: () => {
          const progress = Math.round(tl.progress() * maxPercent);
          setCurrentPercent(progress);
        },
      });
  
      // First animation: showATextTitleIntro and showATextIntro
      tl.fromTo(
        [showATextTitleIntro.current, showATextIntro.current],
        { y: -150, opacity: 0 },
        {
          y: 0,
          duration: 0.5,
          opacity: 1,
          stagger: {
            each: 0.5,
          },
        }
      );
  
      tl.fromTo(
        showLembar.current,
        { y: 24, opacity: 0 },
        {
          y: 0,
          duration: 0.5,
          opacity: 1,
          stagger: {
            each: 0.5,
          },
        }
      );
  
      chars.current.forEach((char: any, index: any) => {
        tl.fromTo(
          char,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.1,
            ease: "power2.out",
          }
        );
      });
  
      tl.to(showLembar.current, {
        opacity: 0,
        duration: 0.5,
        stagger: {
          each: 0.5,
        },
        delay: 0.5, // Optional delay before fading out
      });

      tl.fromTo(
        [showATextTitleIntro.current, showATextIntro.current],
        { y: 0, opacity: 0},
        {
          y: -150,
          duration: 0.5,
          opacity: 1,
          stagger: {
            each: 0.5,
          },
        }
      );


      tl.fromTo(
        [persenRef.current],
        { y: -76, opacity: 0 },
        {
          y: -48,
          duration: 2,
          opacity: 1,
          stagger: {
            each: 0.5,
          },
        }
      );
  
      // Second animation: borderZeroToHundredPercen
      tl.fromTo(
        borderZeroToHundredPercen.current,
        { borderWidth: "0px", width: "0%" },
        {
          borderWidth: "2px",
          width: "400%",
          duration: 1,
          ease: "power2.inOut",
          onUpdate: () => {
            const computedStyle = window.getComputedStyle(
              borderZeroToHundredPercen.current!
            );
            const width = parseFloat(computedStyle.width);
            const parentWidth =
              borderZeroToHundredPercen.current?.parentElement?.offsetWidth || 1;
            const percent = Math.round((width / parentWidth) * 100);
            setCurrentPercent(percent);
          },
          onComplete: () => {
            // Ensure percentage is set to 100 when the animation completes
            setCurrentPercent(100);
          },
        }
      );    

      tl.to(animations.current, {
        duration: 0.5, // Durasi animasi pergeseran dari bawah ke atas
        opacity:0,
        onComplete:() => {
          animations.current.classList.remove("min-w-screen", "min-h-screen");
          tl.fromTo(
            transision.current,
            {
              y: 0, // Mulai dari bawah viewport
              background:"black",
              zIndex:50
            },
            {
              y: -1000, // Pindah ke posisi awal
              background:"black",
              zIndex:50,
              duration: 1.5,
              ease: "power2.inOut",
            }
          );

        }
      });
      

    }
  }, []);


  //mobile
  useEffect(() => {
    if (
      showATextTitleIntroMobile.current &&
      showATextIntroMobile.current &&
      charsMobile.current
      && 
      animationsMobile.current
    ) {
      const maxPercent = 100;
  
      const tl = gsap.timeline({
        onUpdate: () => {
          const progress = Math.round(tl.progress() * maxPercent);
          setCurrentPercentMobile(progress);
        },
      });
  
      // First animation: showATextTitleIntro and showATextIntro
      tl.fromTo(
        [showATextTitleIntroMobile.current, showATextIntroMobile.current],
        { y: -150, opacity: 0 },
        {
          y: 0,
          duration: 0.5,
          opacity: 1,
          stagger: {
            each: 0.5,
          },
        }
      );

      tl.fromTo(
        [showATextTitleIntroMobile.current, showATextIntroMobile.current],
        { y: 0, opacity: 1 },
        {
          y: -150,
          duration: 0.5,
          opacity: 0,
          stagger: {
            each: 0.5,
          },
        }
      );
  
      tl.fromTo(
        showLembarMobile.current,
        { y: 24, opacity: 0 },
        {
          y: 0,
          duration: 0.5,
          opacity: 1,
          stagger: {
            each: 0.5,
          },
        }
      );
  
      charsMobile.current.forEach((char: any, index: any) => {
        tl.fromTo(
          char,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.1,
            ease: "power2.out",
          }
        );
      });

  
      tl.to(showLembarMobile.current, {
        opacity: 0,
        duration: 0.5,
        stagger: {
          each: 0.5,
        },
        delay: 0.5, // Optional delay before fading out
      });

      tl.fromTo(
        [showATextTitleIntroMobile.current, showATextIntroMobile.current],
        { y: 0, opacity: 0},
        {
          y: -150,
          duration: 0.5,
          opacity: 1,
          stagger: {
            each: 0.5,
          },
        }
      );


      tl.fromTo(
        [persenRefMobile.current],
        { y: -76, opacity: 0 },
        {
          y: -48,
          duration: 2,
          opacity: 1,
          stagger: {
            each: 0.5,
          },
        }
      );
  
      // Second animation: borderZeroToHundredPercen
      tl.fromTo(
        borderZeroToHundredPercenMobile.current,
        { borderWidth: "0px", width: "0%" },
        {
          borderWidth: "2px",
          width: "400%",
          duration: 1,
          ease: "power2.inOut",
          onUpdate: () => {
            const computedStyle = window.getComputedStyle(
              borderZeroToHundredPercenMobile.current!
            );
            const width = parseFloat(computedStyle.width);
            const parentWidth =
              borderZeroToHundredPercenMobile.current?.parentElement?.offsetWidth || 1;
            const percent = Math.round((width / parentWidth) * 100);
            setCurrentPercentMobile(percent);
          },
          onComplete: () => {
            // Ensure percentage is set to 100 when the animation completes
            setCurrentPercentMobile(100);
          },
        }
      );    

      tl.to(animationsMobile.current, {
        duration: 0.5, // Durasi animasi pergeseran dari bawah ke atas
        opacity:0,
        onComplete:() => {
          animationsMobile.current.classList.remove("min-w-screen", "min-h-screen");
          tl.fromTo(
            transisionMobile.current,
            {
              y: 0, // Mulai dari bawah viewport
              background:"black",
              zIndex:50
            },
            {
              y: -1000, // Pindah ke posisi awal
              background:"black",
              zIndex:50,
              duration: 1.5,
              ease: "power2.inOut",
            }
          );

        }
      });
      

    }
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
          duration: 0.5,
          opacity: 0,
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

    const onScroll = (event:any) => {
      tl.duration(Math.abs(event.deltaY) / 1000);
      tl.play();
    };

    swiper.el.addEventListener('scroll', onScroll);

    const cursor = cursorRef.current;
    const follower = followerRef.current;

    const moveCursor = (event:any) => {
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
    {/* desktop */}
    <div className="hidden xl:block">
    <div ref={cursorRef} className="cursor"></div>
      <div ref={followerRef} className="cursor-follower"></div>
      <div ref={transision} className="absolute min-w-full min-h-full"></div>
      <div ref={animations} className="min-w-screen min-h-screen">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40">
        <div ref={showATextTitleIntro} className="text-intro judul text-2xl font-bold text-center opacity-0">私たちは勝つ!</div>
        <div ref={showATextIntro} className="text-intro text-md mt-2 text-center opacity-0">困難を乗り越え、笑顔で会いましょう</div>
        <div ref={borderZeroToHundredPercen} className="mt-8 border-black max-h-[4px] absolute top-1/2 left-1/2 transform -translate-x-1/2"></div>
        <div ref={persenRef} className="opacity-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-36 font-extrabold text-4xl judul">
          <div className="w-32 h-32 flex items-center justify-center border-y-4 border-black">
            {currentPercent}%
          </div>
        </div>
      </div>

      <div className="absolute top-1/5 transform right-0 -translate-x-64 translate-y-12 z-30">
      <div ref={showLembar} className="w-12 p-2.5 bg-black text-white opacity-0 py-6">
      {['諦', 'め', 'ず', 'に', '.', '.', '.'].map((char, index) => (
        <div
          key={index}
          ref={(el) => {
            if (el) {
              chars.current[index] = el;
            }
          }}
          className="mt-2 font-bold px-2"
        >
          {char}
        </div>
))}
      </div>
    </div>
      </div>
    </div>

        {/* mobile */}
        <div className="block xl:hidden">
    <div ref={cursorRefMobile} className="cursor"></div>
      <div ref={followerRefMobile} className="cursor-follower"></div>
      <div ref={transisionMobile} className="absolute min-w-full min-h-full"></div>
      <div ref={animationsMobile} className="min-w-screen min-h-screen">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40">
        <div ref={showATextTitleIntroMobile} className="text-intro judul text-2xl font-bold text-center opacity-0">私たちは勝つ!</div>
        <div ref={showATextIntroMobile} className="text-intro text-md mt-2 text-center opacity-0">困難を乗り越え、笑顔で会いましょう</div>
        <div ref={borderZeroToHundredPercenMobile} className="mt-8 border-black max-h-[4px] absolute top-1/2 left-1/2 transform -translate-x-1/2"></div>
        <div ref={persenRefMobile} className="opacity-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-36 font-extrabold text-4xl judul">
          <div className="w-32 h-32 flex items-center justify-center border-y-4 border-black">
            {currentPercentMobile}%
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
      <div ref={showLembarMobile} className="w-12 p-2.5 bg-black text-white opacity-0 py-6">
      {['諦', 'め', 'ず', 'に', '.', '.', '.'].map((char, index) => (
        <div
          key={index}
          ref={(el) => {
            if (el) {
              charsMobile.current[index] = el;
            }
          }}
          className="mt-2 font-bold px-2"
        >
          {char}
        </div>
))}
      </div>
    </div>
      </div>
    </div>

      {/*  for desktop */}
      <div className="hidden xl:block">
        <Swiper
      className='min-h-screen max-h-screen z-20'
      modules={[Navigation, FreeMode]}
      speed={1000}
      ref={swiperRef}
    >
      <SwiperSlide className='w-full min-h-screen max-h-screen flex items-center justify-center'>
        <Homes />
      </SwiperSlide>
      <SwiperSlide className='w-full min-h-screen max-h-screen flex justify-center container mx-auto'>
        <div className="grid grid-cols-2 min-h-screen max-h-screen">
          <div ref={showIntro} className="col flex justify-center pl-12">
            <div className="relative">
              <Intro />
            </div>
          </div>
          <div ref={showAbout} className="col relative bg-intro max-h-screen w-full">
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className='w-full min-h-screen max-h-screen flex justify-center container mx-auto'>
        <div className="grid grid-cols-2 min-h-screen max-h-screen">
          <div ref={showIntro} className="col flex justify-center">
            <div className="relative">
              <About />
            </div>
          </div>
          <div ref={showAbout} className="col relative bg-about max-h-screen w-full">
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className='w-full min-h-screen max-h-screen flex items-center justify-center'>
        <Experience />
      </SwiperSlide>
    </Swiper> 
      </div>
            {/*  for mpbile */}
      <div className="block xl:hidden min-h-screen max-h-screen z-20">
        <div className="min-h-screen w-full">
          <div className="flex items-center justify-center">
            <div ref={swiperRef} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 text-md md:text-6xl font-bold block xl:hidden opacity-0">維持中</div>
          </div>
        </div>
      </div>
    </>
  );
}
