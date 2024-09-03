import Image from "next/image"
import { CiCloud, CiInstagram, CiLinkedin, CiMail } from "react-icons/ci"
import {  DiDocker } from "react-icons/di"
import {  FaJava, FaLaravel, FaPhp } from "react-icons/fa"
import { PiGitlabLogoThin, PiWhatsappLogoThin } from "react-icons/pi"
import {  RiNextjsLine, RiTailwindCssLine } from "react-icons/ri"
import { SiNodedotjs, SiPostgresql } from "react-icons/si"
import { TbBrandTypescript } from "react-icons/tb"
import { Tooltip, Whisper } from 'rsuite';

export const Intro = () => {
	return(
		<>
		  <div className="min-h-screen flex mt-12 text-center">
			<div className="grid grid-cols-5">
				<div className="col-span-4 text-md px-4">
					{/* headers */}
					<div className="mt-8">
						<div className="relative flex space-x-4 items-center p-2 justify-center">
						<div className="absolute -top-[80px] left-1/2 -translate-x-1/6 transform">
							<div className="talk-bubble tri-right btm-left">
							<div className="talktext">
								<p className="text-white font-bold">この記事を書いた人</p>
							</div>
							</div>
						</div>
						<Image src="/profile.jpeg" className="shadow-xl z-40 ring-8 ring-gray-200 rounded-full" alt="profile" width={100} height={100} />
						</div>

						<div className="mt-1 judul font-bold">TONY</div>
						<div className="flex mt-2 space-x-1.5 items-center justify-center">
							<a target="_blank" href="https://www.instagram.com/fathoniwasesoj/" className="border rounded-full p-1 hover:border-gray-400 "><CiInstagram size={18} className=""/></a>
							<a target="_blank" href="https://www.linkedin.com/in/f4th0n1" className="border rounded-full p-1 hover:border-gray-400 "><CiLinkedin size={18} className=""/></a>
							<a target="_blank" href="#" className="border rounded-full p-1 hover:border-gray-400 "><CiMail size={18} className="" /> </a>
							<a target="_blank" href="https://api.whatsapp.com/send?phone=628985379396" className="border rounded-full p-1 hover:border-gray-400 "><PiWhatsappLogoThin size={18} className="" /></a>
							</div>
						<div className="mt-4">I:m フルスタックデベロッパーとして2～3年の経験があります。エンドツーエンドのREST APIの構築とユーザーフレンドリーなウェブフロントエンドの開発を専門としており、開発プロセス全体にわたって効率的なコード構造を確保します。</div>
						<div className="mt-4">経験豊富なウェブデベロッパーとして、高度なウェブ開発の全ての段階に精通しており、ユーザーインターフェースのデザイン、テスト、およびデバッグのプロセスに関する知識を持っています.</div>
					</div>
					{/* <div className="mt-8">
							<div><div>使用したテクノロジー</div></div>

						</div> */}
					<div className="mt-8">
						{/* make div download cv */}
						<div className="flex space-x-8 justify-center">
							<div className="text-xs text-gray-600 px-4 py-1.5 rounded-lg outline outline-gray-300 hover:outline-gray-400">ダウンロードCV</div>
							<div className="flex space-x-2 items-center justify-center">
							<Whisper placement="top" trigger="hover" speaker={<Tooltip>Next.js</Tooltip>}>
								<div>
								<RiNextjsLine size={24} className="hover:border hover:border-black rounded-full" />
								</div>
							</Whisper>

							<Whisper placement="top" trigger="hover" speaker={<Tooltip>Node.js</Tooltip>}>
								<div>
								<SiNodedotjs size={20} className="hover:border hover:border-black rounded-full" />
								</div>
							</Whisper>

							<Whisper placement="top" trigger="hover" speaker={<Tooltip>TypeScript</Tooltip>}>
								<div>
								<TbBrandTypescript size={20} className="hover:border hover:border-black rounded-full" />
								</div>
							</Whisper>

							<Whisper placement="top" trigger="hover" speaker={<Tooltip>Java</Tooltip>}>
								<div>
								<FaJava size={20} className="hover:border hover:border-black rounded-full" />
								</div>
							</Whisper>

							<Whisper placement="top" trigger="hover" speaker={<Tooltip>PostgreSQL</Tooltip>}>
								<div>
								<SiPostgresql size={20} className="hover:border hover:border-black rounded-full" />
								</div>
							</Whisper>

							<Whisper placement="top" trigger="hover" speaker={<Tooltip>PHP</Tooltip>}>
								<div>
								<FaPhp size={24} className="hover:border hover:border-black rounded-full" />
								</div>
							</Whisper>

							<Whisper placement="top" trigger="hover" speaker={<Tooltip>Laravel</Tooltip>}>
								<div>
								<FaLaravel size={20} className="hover:border hover:border-black rounded-full" />
								</div>
							</Whisper>

							<Whisper placement="top" trigger="hover" speaker={<Tooltip>Docker</Tooltip>}>
								<div>
								<DiDocker size={26} className="hover:border hover:border-black rounded-full" />
								</div>
							</Whisper>

							<Whisper placement="top" trigger="hover" speaker={<Tooltip>Cloud</Tooltip>}>
								<div>
								<CiCloud size={20} className="hover:border hover:border-black rounded-full" />
								</div>
							</Whisper>

							<Whisper placement="top" trigger="hover" speaker={<Tooltip>Tailwind CSS</Tooltip>}>
								<div>
								<RiTailwindCssLine size={20} className="hover:border hover:border-black rounded-full" />
								</div>
							</Whisper>

							<Whisper placement="top" trigger="hover" speaker={<Tooltip>GitLab</Tooltip>}>
								<div>
								<PiGitlabLogoThin size={20} className="hover:border hover:border-black rounded-full" />
								</div>
							</Whisper>
							</div>
						</div>
						<div className="col relative inline-block mt-8">
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