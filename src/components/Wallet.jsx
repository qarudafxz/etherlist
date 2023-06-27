import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaConnectdevelop } from "react-icons/fa";
import Logo from "../assets/logo.svg";
import { debounce } from "lodash";

function Wallet() {
	const navigate = useNavigate();
	const connectToMeta = () => {
		navigate("/todo");
	};

	const [rotation, setRotation] = useState(0);

	const debouncedHandleMouseMove = debounce((event) => {
		const cardWidth = event.target.offsetWidth;
		const cardHeight = event.target.offsetHeight;
		const centerX = cardWidth / 2;
		const centerY = cardHeight / 2;
		const mouseX = event.nativeEvent.offsetX;
		const mouseY = event.nativeEvent.offsetY;
		const angleX = (centerY - mouseY) / centerY;
		const angleY = (mouseX - centerX) / centerX;
		const rotationX = angleX * 15;
		const rotationY = angleY * 15;
		setRotation(`rotateX(${rotationX}deg) rotateY(${rotationY}deg)`);
	}, 1);

	const handleMouseMove = (event) => {
		debouncedHandleMouseMove(event);
	};

	useEffect(() => {
		const handleMouseLeave = () => {
			setRotation(0);
		};

		return () => {
			window.removeEventListener("mouseleave", handleMouseLeave);
		};
	}, []);

	return (
		<div className='flex flex-col items-center justify-center gap-12 w-full'>
			<div className='flex flex-row gap-10'>
				<img
					src={Logo}
					className='w-8 h-auto'
					alt='EtherList'
				/>
				<h1 className='text-4xl font-header font-semibold text-white'>
					Ether
					<span className='bg-gradient-to-tr from-blue-800 to-blue-400 bg-clip-text text-transparent'>
						List
					</span>
				</h1>
			</div>
			<div
				className='shadow-2xl text-white bg-gradient-to-tr from-zinc-950 to-zinc-900 w-2/12 rounded-md p-8 border border-accent'
				style={{ transform: rotation }}
				onMouseMove={handleMouseMove}>
				<div className='flex justify-between items-center'>
					<h1 className='font-semibold text-xl'>Connect to Wallet</h1>
					<FaConnectdevelop
						size={40}
						onClick={() => connectToMeta()}
						className='text-2xl shadow-xl border border-leash rounded-full p-2 cursor-pointer hover:bg-zinc-800 duration-200'
					/>
				</div>
				<div className='grid grid-cols-7 gap-4 my-4'>
					<div className='col-span-4 bg-blue-800 h-1' />
					<div className='col-span-2 bg-blue-600 h-1' />
					<div className='bg-blue-400 h-1' />
				</div>
				<p className='font-thin text-xs mt-4 tracking-wider text-zinc-500 text-justify'>
					Connect to your ethereum wallet via Meta Mask to access the premium
					Blockchain To do list by Francis Tin-ao
				</p>
			</div>
		</div>
	);
}

export default Wallet;
