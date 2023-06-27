import React from "react";
import { IoMdAddCircleOutline } from "react-icons/io";

function CreateTodo() {
	return (
		<div className='text-white bg-gradient-to-tr from-zinc-950 to-zinc-900 h-auto w-full rounded-sm border border-secondary p-4'>
			<div className='flex gap-4 items-center'>
				<input
					type='text'
					placeholder='Enter a task'
					className='border-2 border-accent bg-transparent pl-4 text-gray-500 w-full p-2 rounded-2xl focus:outline-none'
				/>
				<IoMdAddCircleOutline
					size={40}
					className='text-gray-500 bg-accent p-2 rounded-full border-secondary cursor-pointer hover:bg-secondary duration-150'
				/>
			</div>
		</div>
	);
}

export default CreateTodo;
