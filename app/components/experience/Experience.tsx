import { useEffect, useRef } from 'react';
import { FaBriefcase, FaUser, FaCalendar, FaVenusMars, FaGlobe, FaMapMarkerAlt, FaLaptopCode, FaWeight, FaRulerVertical, FaBook, FaUniversity, FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { PiPhone, PiVoicemail } from 'react-icons/pi';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel } from 'swiper/modules';
import SwiperCore from 'swiper';

// Install modules
export default function Experience() {

  SwiperCore.use([Navigation, Pagination, Mousewheel]);

  return (
    <>
    <div className='flex items-center fade-in space-x-2'>
        <div className="flex-shrink-0">
          <div className="word-tittle">
            WORK EXPERIENCE
          </div>
        </div>
        <div className="w-full border-l fade-in">
      <div className="min-h-[400px] px-6 fade-in">
        <div className='w-full min-h-[50px]'>
           <div className='text-3xl font-bold'>PPOBトランザクションのためのREST API</div>
        </div>
        <div className="flex items-center fade-in mt-4">
          <div className="flex-1">
            <Swiper
              className='max-h-[380px] min-h-[380px]'
              direction={'vertical'}
              spaceBetween={30}
              pagination={{ clickable: true }}
              mousewheel={true}
              modules={[Pagination, Mousewheel]}
            >
              <SwiperSlide className='w-full bg-white min-h-[380px]'>
                <div>
                 
                </div>
              </SwiperSlide>
              <SwiperSlide className='w-full bg-white min-h-[380px]'>
                2
              </SwiperSlide>
              <SwiperSlide className='w-full bg-white min-h-[380px]'>
                3
              </SwiperSlide>
            </Swiper>           
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}
