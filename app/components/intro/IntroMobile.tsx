import Image from "next/image"
import { BiLogoPostgresql } from "react-icons/bi"
import { CiInstagram, CiLinkedin, CiMail } from "react-icons/ci"
import { DiGoogleCloudPlatform } from "react-icons/di"
import { FaDocker, FaGitlab, FaLaravel } from "react-icons/fa"
import { PiWhatsappLogoThin } from "react-icons/pi"
import { RiJavaLine, RiTailwindCssLine } from "react-icons/ri"
import { SiNextdotjs, SiNodedotjs, SiPhp, SiTypescript } from "react-icons/si"

export const IntroMobile = () => {
  return (
    <>
      <div className="flex flex-col items-center my-4">
        {/* Speech bubble and profile */}
        <div className="flex flex-col items-center mb-2">
          <div className="flex justify-start items-center mt-2">
            <Image src="/profile.jpeg" className="rounded-full shadow-xl z-50" alt="profile" width={48} height={48}/>
            <div className="ml-2">
              <p className="text-lg font-bold">トニー・W・ジャティ</p>
              <p className="text-sm text-gray-500">フルスタック開発者</p>
            </div>
          </div>
        </div>
		<div>
			<div className="flex justify-center space-x-2 items-center">
				<a href="" className="border rounded-full p-1 hover:bg-orange-400 hover:border-orange-400 hover:text-white"><CiInstagram size={18} className="text-white"/></a>
				<a href="" className="border rounded-full p-1 hover:bg-orange-400 hover:border-orange-400 hover:text-white"><CiLinkedin size={18} className="text-white"/></a>
				<a href="" className="border rounded-full p-1 hover:bg-orange-400 hover:border-orange-400 hover:text-white"><CiMail size={18} className="text-white" /> </a>
				<a href="" className="border rounded-full p-1 hover:bg-orange-400 hover:border-orange-400 hover:text-white"><PiWhatsappLogoThin size={18} className="text-white" /></a>
			</div>
		</div>
        <div className="text-center">
          <div className="text-md">
            <div className="mt-8">
              <small>I'm フルスタックデベロッパーとして2～3年の経験があります。エンドツーエンドのREST APIの構築とユーザーフレンドリーなウェブフロントエンドの開発を専門としており、開発プロセス全体にわたって効率的なコード構造を確保します。</small>
            </div>
            <div className="mt-4">
              <small>経験豊富なウェブデベロッパーとして、高度なウェブ開発の全ての段階に精通しており、ユーザーインターフェースのデザイン、テスト、およびデバッグのプロセスに関する知識を持っています。</small>
            </div>
          </div>
		  <div className="mt-8">
			<div><small>使用したテクノロジー</small></div>
			<div className="mt-4 flex justify-center space-x-2 items-center">
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
			<div className="mt-10">
              <div className="flex justify-center space-x-8">
                <button className="text-xs text-white px-4 py-1.5 rounded-lg border border-white  hover:border-orange-400">ダウンロードCV</button>
              </div>
            </div>  
        </div>
      </div>
    </>
  )
}
