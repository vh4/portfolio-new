import { useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { IoEllipsisVerticalOutline } from 'react-icons/io5';

export default function Homes() {
  return (
		<div className="relative w-full min-h-screen background-main">
		<div className="flex space-x-4 items-center">
		<div className="flex items-center bg-white min-h-screen px-4">
			<IoEllipsisVerticalOutline size={28} />
		</div>
		<div className="">
			<div className="text-container">
			<h1 className='judul'>FATHONI WASESO</h1> <span>JATI</span>
			</div>
		</div>
		</div>
		<div className="absolute bottom-0 right-0 py-12 px-24">
			<div className="flex space-x-2 items-center text-white">
			<p className="bg-opacity-75 p-2 text-white khusus-judul text-xl">Drag Sideways</p>
			<div className="scroll text-white">
				<div className="line text-white"></div>
			</div>
			</div>
		</div>
		</div>
  );
}