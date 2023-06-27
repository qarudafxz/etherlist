import React from "react";
import { useNavigate } from "react-router-dom";
import Bg from "../assets/bg.png";

import Logo from "../assets/logo.svg";
import CreateTodo from "../components/CreateTodo";
import { IoLogOut } from "react-icons/io5";

import { motion } from "framer-motion";

function ToDo() {
	const navigate = useNavigate();
	return (
		<div
			className='w-full h-screen grid place-items-center'
			style={{
				backgroundImage: `url(${Bg})`,
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
				backgroundPosition: "center",
			}}>
			<div className='w-8/12 h-96 border border-accent rounded-2xl p-4'>
				<div className='flex justify-between'>
					<div className='flex gap-4 items-center'>
						{[1, 2, 3].map((index) => {
							return (
								<div
									key={index}
									className='w-4 h-4 border border-accent rounded-full'></div>
							);
						})}
					</div>
					{/* --- */}
					<div className='flex gap-4'>
						<img
							alt='EtherList'
							src={Logo}
							className='w-8'
						/>
						<h1 className='text-4xl font-header font-semibold text-white'>
							Ether
							<span className='bg-gradient-to-tr from-blue-800 to-blue-400 bg-clip-text text-transparent'>
								List
							</span>
						</h1>
					</div>
					{/* --- */}
					<motion.div
						whileHover={{ scale: 1.19 }}
						className='flex gap-4'
						onClick={() => navigate("/")}>
						<IoLogOut
							size={40}
							className='bg-gradient-to-tr from-zinc-900 to-zinc-800 border border-accent text-gray-600 p-2 rounded-md cursor-pointer hover:text-gray-500 duration-100'
						/>
					</motion.div>
				</div>
				<h1 className='text-white font-bold text-4xl my-8'>
					Welcome back, Francis!
				</h1>
				<CreateTodo />
			</div>
		</div>
	);
}

export default ToDo;
