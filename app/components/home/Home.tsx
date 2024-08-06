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
		<div className="flex space-x-2 items-center ">
			<p className="bg-opacity-75 p-2 text-white">Scroll or Drag Sideways</p>
			<BsArrowRight size={24} className="text-white arrows-right" />
		</div>
		</div>
		</div>
  );
}