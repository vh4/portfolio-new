'use client'

import { CiPhone } from "react-icons/ci"
import { FaApple, FaBluetooth } from "react-icons/fa"
import { IoBatteryHalfSharp } from "react-icons/io5"
import { MdSignalWifi3Bar } from "react-icons/md"
import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export const Header = () => {

  const router = usePathname();

	return(
		<>
     <div className='m-4 xl:m-0 xl:py-2 px-2 xl:px-5 xl:border xl:rounded-full xl:border-slate-600'>
        <div className='flex justify-between items-center'>
          <div>
            {/* desktop */}
            <div className="hidden xl:flex items-center space-x-3">
              <FaApple className="text-5xl text-white" size={20} />
              <Link href="/">
                <small
                  className={` ${router == "/" ? "text-orange-400" : "text-white"}`}
                >
                  イントロ
                </small>
              </Link>
              <Link href="/about">
                <small
                  className={` ${router == "/about" ? "text-orange-400" : "text-white"}`}
                >
                  アバウト
                </small>
              </Link>
              <Link href="/skill">
                <small
                  className={` ${router == "/skill" ? "text-orange-400" : "text-white"}`}
                >
                  スキル
                </small>
              </Link>
              <Link href="/project">
                <small
                  className={` ${router == "/project" ? "text-orange-400" : "text-white"}`}
                >
                  プロジェクト
                </small>
              </Link>
            </div>
             {/* mobile */}
             <div className="flex xl:hidden items-center space-x-2">
                <FaApple className='text-5xl text-white' size={20}/>
                <small className="">メニュー</small>
             </div>
          </div>
          <div>
            <div className='hidden xl:flex items-center space-x-2'>
               <div className="flex text-xs">
                  JA | EN
                </div>
              <div className='flex items-center space-x-1'>
                <small>連絡</small>
                <CiPhone size={20} className='text-white'/>
              </div>
              <FaBluetooth size={16} className='text-white'/>
              <div className='flex items-center space-x-1'>
                <small>100%</small>
                <IoBatteryHalfSharp size={20} className='text-white'/>
              </div>
              <MdSignalWifi3Bar size={20} className='text-white'/>
            </div>
          </div>
        </div>
     </div>		
		</>
	)
 }
