import React from "react";
import ComponentWrapper from "../wrappers/ComponentWrapper";

type Props = {
	setCurrentComponent: React.Dispatch<React.SetStateAction<string>>;
};

const LoginComponent = (props: Props) => {
	const submitHandler = (e: React.FormEvent) => {
		e.preventDefault();
	};

	return (
		<ComponentWrapper className="mt-4 flex aspect-[1/1.4] w-[90%] origin-top flex-col justify-evenly overflow-hidden bg-bg-dark p-8 text-white md:max-w-[30%]">
			<h2 className="border-b text-center font-highlight text-5xl font-bold md:text-6xl">
				Welcome Back
			</h2>
			<form className="flex flex-col gap-4" onSubmit={submitHandler}>
				<div className="flex flex-col gap-2">
					<span className="text-white">Email</span>
					<input type="email" />
				</div>
				<div className="flex flex-col gap-2">
					<span className="text-white">Password</span>
					<input type="password" />
				</div>
				<p
					className="p-1 text-center text-text hover:cursor-pointer"
					onClick={() => props.setCurrentComponent("forgot")}
				>
					Forgot your password?
				</p>
				<button className="filter-btn">Login</button>
			</form>
			<p
				className="mt-4 text-center text-xl font-bold underline hover:cursor-pointer"
				onClick={() => props.setCurrentComponent("signup")}
			>
				Create a new account.
			</p>
		</ComponentWrapper>
	);
};

export default LoginComponent;
