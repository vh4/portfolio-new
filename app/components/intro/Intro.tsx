import Image from "next/image"
import { BiLogoPostgresql } from "react-icons/bi"
import { CiInstagram, CiLinkedin, CiMail } from "react-icons/ci"
import {  DiGoogleCloudPlatform } from "react-icons/di"
import { FaDocker, FaGitlab, FaJava, FaLaravel } from "react-icons/fa"
import { PiWhatsappLogoThin } from "react-icons/pi"
import { RiJavaLine, RiTailwindCssLine } from "react-icons/ri"
import { SiNextdotjs, SiNodedotjs, SiPhp, SiTypescript } from "react-icons/si"

export const Intro = () => {
	return(
		<>
		  <div className="mt-24 grid grid-cols-5 gap-2">
			<div className="relative inline-block">
			<div className="relative w-50 h-50 flex justify-center items-center rounded-full p-2">
				<div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-green-400 to-blue-500 rounded-full blur-2xl opacity-50"></div>
				<Image src="/profile.jpeg" className="rounded-full shadow-xl z-50" alt="profile" width={150} height={150}/>
			</div>
			</div>
			<div className="text-md px-4 col-span-4">
				{/* headers */}
				{/* <div><h1>Fathoni Waseso Jati</h1></div> */}
				{/* body */}
				<div><div className="font-bold">自己紹介します,</div></div>
				<div className="mt-4">
					<div>I'm フルスタックデベロッパーとして2～3年の経験があります。エンドツーエンドのREST APIの構築とユーザーフレンドリーなウェブフロントエンドの開発を専門としており、開発プロセス全体にわたって効率的なコード構造を確保します。経験豊富なウェブデベロッパーとして、高度なウェブ開発の全ての段階に精通しており、ユーザーインターフェースのデザイン、テスト、およびデバッグのプロセスに関する知識を持っています.</div>
				</div>
				<div className="mt-8">
					{/* make button download cv */}
					<div className="flex space-x-8">
						<button className="text-xs text-white px-4 py-1.5 rounded-lg outline outline-white hover:outline-orange-400">ダウンロードCV</button>
						<div className="flex space-x-1.5 items-center">
						<a href="" className="border rounded-full p-1 hover:bg-orange-400 hover:border-orange-400 hover:text-white"><CiInstagram size={18} className="text-white"/></a>
						<a href="" className="border rounded-full p-1 hover:bg-orange-400 hover:border-orange-400 hover:text-white"><CiLinkedin size={18} className="text-white"/></a>
						<a href="" className="border rounded-full p-1 hover:bg-orange-400 hover:border-orange-400 hover:text-white"><CiMail size={18} className="text-white" /> </a>
						<a href="" className="border rounded-full p-1 hover:bg-orange-400 hover:border-orange-400 hover:text-white"><PiWhatsappLogoThin size={18} className="text-white" /></a>
						</div>
					</div>
					<div className="mt-16">
						<div><div>使用したテクノロジー</div></div>
						<div className="mt-4 flex space-x-2 items-center">
							<SiNextdotjs size={20} className="text-white"/>
							<SiNodedotjs size={20} className="text-white"/>
							<SiTypescript size={20} className="text-white"/>
							<RiJavaLine size={20} className="text-white"/>
							<BiLogoPostgresql size={20} className="text-white"/>
							<SiPhp size={20} className="text-white"/>
							<FaLaravel size={20} className="text-white"/>
							<FaDocker size={20} className="text-white"/>
							<DiGoogleCloudPlatform size={20} className="text-white"/>
							<RiTailwindCssLine size={20} className="text-white"/>
							<FaGitlab size={20} className="text-white"/>
						</div>
					</div>
					{/* <div className="mt-12 text-center">
						<small>~よろしくお願いします.~</small>
					</div>	 */}
				</div>
			</div>
		  </div>
		</>
	)
}