import React from "react";
import ComponentWrapper from "../wrappers/ComponentWrapper";

type Props = {
	setCurrentComponent: React.Dispatch<React.SetStateAction<string>>;
};

const SignupSection = (props: Props) => {
	const submitHandler = (e: React.FormEvent) => {
		e.preventDefault();
	};

	return (
		<ComponentWrapper className="z-10 mt-4 flex aspect-[1/1.4] w-[90%] origin-top flex-col justify-evenly overflow-hidden rounded bg-bg-dark p-8 text-white md:max-w-[30%]">
			<h2 className="border-b text-center font-highlight text-5xl font-bold md:text-6xl">
				Sign Up
			</h2>
			<form className="flex flex-col gap-3" onSubmit={submitHandler}>
				<div className="flex flex-col">
					<span className="text-white">Full Name</span>
					<input type="text" />
				</div>
				<div className="flex flex-col gap-2">
					<span className="text-white">E-Mail</span>
					<input type="email" />
				</div>
				<div className="flex flex-col gap-2">
					<span className="text-white">Password</span>
					<input type="password" />
				</div>
				<button className="filter-btn btn-click mt-6">Login</button>
			</form>
			<p
				className="mt-4 text-center text-xl font-bold underline hover:cursor-pointer"
				onClick={() => props.setCurrentComponent("login")}
			>
				Already have an account.
			</p>
		</ComponentWrapper>
	);
};

export default SignupSection;
