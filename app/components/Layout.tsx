import { ReactNode } from 'react';
import { Footer } from './Footer';
import { IoTerminalOutline } from 'react-icons/io5';
import { usePathname } from "next/navigation"
import { FaApple } from "react-icons/fa"
import Link from "next/link"

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {

	const router = usePathname();

  return (
    <>
      <div>
        <main className="container mt-12 max-w-6xl mx-auto">
          {/* <Header /> */}
		  <div className="container mx-auto mt-6 xl:px-8">
			<div className="w-full min-h-[400px] max-h-[550px] pb-16 x:border xl:border-[#0D0D0D]">
			{/* header terminal */}
				<div className="hidden xl:flex p-4 justify-between items-center bg-[#0D0D0D]">
					{/* left header */}
					<div className="flex space-x-2 items-center">
						{/* <IoTerminalOutline size={16} className="text-white"/> */}
						<FaApple className="text-5xl" size={20} />
						<div className="">Portfolio</div>
						<Link href="/" className='pl-2'>
							<small
							className={`cursor-pointer ${router == "/" ? "py-0.5 px-1 rounded-full bg-white text-black" : "text-white"}`}
							>
							イントロ
							</small>
						</Link>
						<Link href="/about" className='pl-2'>
							<small
							className={`cursor-pointer ${router == "/about" ? "py-0.5 px-1 rounded-full bg-white text-black" : "text-white"}`}
							>
							アバウト
							</small>
						</Link>
						<Link href="/skill" className='pl-2'>
							<small
							className={`cursor-pointer ${router == "/skill" ? "py-0.5 px-1 rounded-full bg-white text-black" : "text-white"}`}
							>
							スキル
							</small>
						</Link>
						<Link href="/experience" className='pl-2'>
							<small
							className={`cursor-pointer ${router == "/experience" ? "py-0.5 px-1 rounded-full bg-white text-black" : "text-white"}`}
							>
							経歴
							</small>
						</Link>
					</div>
					{/* right header */}
					<div className="flex space-x-2 items-center">
						<div className="p-1.5 bg-red-500 rounded-full"></div>
						<div className="p-1.5 bg-green-500 rounded-full"></div>
						<div className="p-1.5 bg-yellow-500 rounded-full"></div>
					</div>
				</div>
				{/* body terminal */}
				<div className="px-4 xl:px-8 mt-4 xl:mt-8 mx-4 xl:mx-8">
					{children}
				</div>				
			</div>
			{/* footer terminal */}
			<div></div>
		 </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
