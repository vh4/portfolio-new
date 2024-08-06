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
		  <div className="min-h-screen flex mt-16">
			<div className="pl-28 w-[800px] grid grid-cols-5">
				<div className="col-span-4 text-md px-4">
					{/* headers */}
					{/* <div><h1>Fathoni Waseso Jati</h1></div> */}
					{/* body */}
				    <div className=""><h1 className="judul text-4xl font-extrabold -ml-2">Introduction</h1></div>
					<div className="mt-6"><div className="font-bold">自己紹介します,</div></div>
					<div className="">
						<div>I:m フルスタックデベロッパーとして2～3年の経験があります。エンドツーエンドのREST APIの構築とユーザーフレンドリーなウェブフロントエンドの開発を専門としており、開発プロセス全体にわたって効率的なコード構造を確保します。経験豊富なウェブデベロッパーとして、高度なウェブ開発の全ての段階に精通しており、ユーザーインターフェースのデザイン、テスト、およびデバッグのプロセスに関する知識を持っています.</div>
					</div>
					<div className="mt-8">
						{/* make div download cv */}
						<div className="flex space-x-8">
							<div className="text-xs text-black px-4 py-1.5 rounded-lg outline outline-black hover:outline-orange-400">ダウンロードCV</div>
							<div className="flex space-x-1.5 items-center">
							<a href="" className="border rounded-full p-1 hover:bg-orange-400 hover:border-orange-400 hover:"><CiInstagram size={18} className=""/></a>
							<a href="" className="border rounded-full p-1 hover:bg-orange-400 hover:border-orange-400 hover:"><CiLinkedin size={18} className=""/></a>
							<a href="" className="border rounded-full p-1 hover:bg-orange-400 hover:border-orange-400 hover:"><CiMail size={18} className="" /> </a>
							<a href="" className="border rounded-full p-1 hover:bg-orange-400 hover:border-orange-400 hover:"><PiWhatsappLogoThin size={18} className="" /></a>
							</div>
						</div>
						<div className="col relative inline-block mt-8">
						<div className="relative w-100 h-100 flex justify-center items-center rounded-full p-2">
							<div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-green-400 to-blue-500 rounded-full blur-2xl opacity-50"></div>
							<Image src="/profile.jpeg" className="rounded-full shadow-xl z-50" alt="profile" width={100} height={100}/>
						</div>
						</div>
						<div className="mt-8">
							<div><div>使用したテクノロジー</div></div>
							<div className="mt-4 flex space-x-2 items-center">
								<SiNextdotjs size={20} className=""/>
								<SiNodedotjs size={20} className=""/>
								<SiTypescript size={20} className=""/>
								<RiJavaLine size={20} className=""/>
								<BiLogoPostgresql size={20} className=""/>
								<SiPhp size={20} className=""/>
								<FaLaravel size={20} className=""/>
								<FaDocker size={20} className=""/>
								<DiGoogleCloudPlatform size={20} className=""/>
								<RiTailwindCssLine size={20} className=""/>
								<FaGitlab size={20} className=""/>
							</div>
						</div>
						{/* <div className="mt-12 text-center">
							<small>~よろしくお願いします.~</small>
						</div>	 */}
					</div>
				</div>
			</div>
		  </div>
		</>
	)
}