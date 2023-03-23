import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";

const linkVariants = {
	right: {
		left: "80%",
		transition: { ease: [0.8, 0.3, 0.3, 0.8], duration: 0.7 },
	},
	main: {
		left: "-80%",
		transition: { ease: [0.8, 0.3, 0.3, 0.8], duration: 0.7 },
	},
};

const formVariants = {
	hidden: {
		opacity: 0,
		transition: { delay: 0.5, duration: 0.4, ease: "easeIn" },
	},
	shown: {
		opacity: 100,
		transition: { delay: 0.5, duration: 0.4, ease: "easeIn" },
	},
};

const SignupPage = () => {
	return (
		<motion.div
			key="loginPage"
			className="content-wrapper relative grid grid-cols-8 grid-rows-6 overflow-hidden"
		>
			<motion.div
				variants={formVariants}
				initial="hidden"
				animate="shown"
				exit="hidden"
				className="col-start-2 col-end-8 row-start-2 row-end-6 flex flex-col rounded bg-bg-dark py-5 px-8 md:col-start-5 md:col-end-8"
			>
				<h1 className="text-5xl font-bold text-white">Sign Up</h1>
				<div className="h-full w-full">
					<form className="flex h-full flex-col gap-3 py-8">
						<div>
							<span className="text-white">Full Name</span>
							<input type="text" />
						</div>
						<div>
							<span className="text-white">Password</span>
							<input type="password" />
						</div>
						<div>
							<span className="text-white">Re-enter Password</span>
							<input type="password" />
						</div>
						<div className="flex w-full gap-2 py-2">
							<button className="filter-btn flex w-1/2 self-end py-4 md:hidden md:py-2">
								<Link to="/login">Login</Link>
							</button>
							<button className="filter-btn w-1/2 py-4 md:py-2">Sign Up</button>
						</div>
					</form>
				</div>
			</motion.div>
			<motion.div
				variants={linkVariants}
				initial="right"
				animate="main"
				exit="left"
				transition={{
					duration: 1,
					ease: [0.8, 0.3, 0.3, 0.8],
				}}
				className="absolute right-0 hidden h-content w-full md:flex"
			>
				<Link
					to="/login"
					className="flex h-full w-full items-center justify-end bg-bg-dark p-4 pr-4 text-4xl font-bold text-white transition-all hover:text-5xl"
				>
					Log In
					<div className="h-14 w-14 text-white">
						<ArrowLeftCircleIcon className="h-14 w-14 text-white" />
					</div>
				</Link>
			</motion.div>
		</motion.div>
	);
};

export default SignupPage;
