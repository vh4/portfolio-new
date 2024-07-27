import { useEffect, useRef } from 'react';
import { FaBriefcase, FaUser, FaCalendar, FaVenusMars, FaGlobe, FaMapMarkerAlt, FaLaptopCode, FaWeight, FaRulerVertical, FaBook, FaUniversity, FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { PiPhone, PiVoicemail } from 'react-icons/pi';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power1.in" } });

      tl.from(scrollRef.current, {
        y: '-=20%',
        opacity: 0,
        duration: 0.5,
        ease: "power1.out",
      });

      tl.to(scrollRef.current, {
        y: '+=0%',
        duration: 0.5,
        opacity: 100,
        ease: "power1.out",
      });


  }, []);

  return (
    <div className="w-full py-12 border-l -ml-8 fade-in">
      <div className="mt-10 px-4 fade-in">
        <div className="flex items-center fade-in">
          <div className="flex-shrink-0">
            <div className="transform rotate-[-90deg] whitespace-nowrap text-lg font-semibold fade-in">
              WORK EXPERIENCE
            </div>
          </div>
          <div className="flex-1 overflow-x-auto no-scrollbar" ref={scrollRef}>
            <div className="flex min-h-[300px] pb-4 space-x-8 fade-in">
              {['RAJABILLER', 'TRAVEL', 'PARTNERLINK', 'NEWEXPERIENCE', 'PROJECT A', 'PROJECT B'].map((item, index) => (
                <div
                  key={index}
                  className="p-4 min-w-[300px] max-h-[300px] bg-white text-black rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out fade-in"
                >
                  <div className='flex items-center justify-center flex-grow fade-in'>
                    <div className='text-3xl font-extrabold fade-in'>{item}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
