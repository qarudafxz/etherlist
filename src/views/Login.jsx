import React from "react";
import Bg from "../assets/bg.png";
import Wallet from "../components/Wallet";

function Login() {
	return (
		<div
			style={{
				backgroundImage: `url(${Bg})`,
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
				backgroundPosition: "center",
			}}
			className='w-full h-screen grid place-items-center'>
			<Wallet />
		</div>
	);
}

export default Login;
