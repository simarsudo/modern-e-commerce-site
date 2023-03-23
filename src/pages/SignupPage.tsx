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

const containerVariant = {
	small: {
		scaleY: 0,
		transition: { delay: 0.5, duration: 0.4, ease: "easeIn" },
	},
	full: {
		scaleY: "100%",
		transition: { delay: 0.5, duration: 0.4, ease: "easeIn" },
	},
};

const formContainer = {
	hidden: {
		opacity: 0,
		transition: { delay: 1, duration: 0.4, ease: "easeIn" },
	},
	shown: {
		opacity: 100,
		transition: { delay: 1, duration: 0.4, ease: "easeIn" },
	},
};

const SignupPage = () => {
	return (
		<motion.div
			key="loginPage"
			className="content-wrapper relative grid max-w-[100vw] grid-cols-8 grid-rows-6 overflow-hidden"
		>
			<motion.div
				variants={containerVariant}
				initial="small"
				animate="full"
				exit="small"
				className="col-start-2 col-end-8 row-start-2 row-end-6 flex h-full origin-bottom flex-col justify-center rounded bg-bg-dark py-5 px-8 md:col-start-5 md:col-end-8"
			>
				<motion.div
					variants={formContainer}
					initial="hidden"
					animate="shown"
					exit="hidden"
					className="flex h-full flex-col justify-evenly"
				>
					<h1 className="text-5xl font-bold text-white">Sign Up</h1>
					<div className="flex h-full w-full">
						<form className="flex h-full w-full flex-col justify-around">
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
							<div className="flex w-full gap-2 self-end py-2 md:w-1/2">
								<button className="filter-btn flex w-1/2 self-end py-4 md:hidden md:py-2">
									<Link to="/login">Login</Link>
								</button>
								<button className="filter-btn w-1/2 py-4 md:w-full md:py-2">
									Sign Up
								</button>
							</div>
						</form>
					</div>
				</motion.div>
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
