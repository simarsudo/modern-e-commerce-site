import React from "react";
import ComponentWrapper from "../wrappers/ComponentWrapper";

type Props = {
	setCurrentComponent: React.Dispatch<React.SetStateAction<string>>;
};

const ForgotPasswordSection = (props: Props) => {
	const submitHandler = (e: React.FormEvent) => {
		e.preventDefault();
	};

	return (
		<ComponentWrapper className="mt-4 flex w-[90%] origin-top flex-col overflow-hidden bg-bg-dark p-8 py-16 text-white md:max-w-[30%]">
			<h2 className="border-b text-center font-highlight text-5xl font-bold md:text-6xl">
				Reset Password
			</h2>
			<form
				onSubmit={submitHandler}
				className="mt-8 flex h-1/3 flex-col justify-center gap-6"
			>
				<div className="flex flex-col gap-2">
					<span className="text-white">Email</span>
					<input type="email" />
				</div>
				<div className="flex gap-2">
					<button type="submit" className="filter-btn">
						Send reset link
					</button>
					<button
						className="filter-btn"
						type="button"
						onClick={() => {
							props.setCurrentComponent("login");
						}}
					>
						Back
					</button>
				</div>
			</form>
		</ComponentWrapper>
	);
};

export default ForgotPasswordSection;
