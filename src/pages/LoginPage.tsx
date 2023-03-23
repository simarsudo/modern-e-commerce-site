import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const linkVariants = {
	main: {
		left: "80%",
		transition: {
			ease: [0.8, 0.3, 0.3, 0.8],
			duration: 0.7,
			delayChildren: 0.5,
		},
	},
	left: {
		left: "-80%",
		transition: {
			ease: [0.8, 0.3, 0.3, 0.8],
			duration: 0.7,
			delayChildren: 0.5,
		},
	},
};

const formVariants = {
	hidden: {
		opacity: 0,
		transition: {
			delay: 0.5,
			duration: 0.4,
			ease: "easeIn",
			staggerChildren: 0.5,
		},
	},
	shown: {
		opacity: 100,
		transition: {
			delay: 0.5,
			duration: 0.4,
			ease: "easeIn",
			staggerChildren: 0.5,
		},
	},
};

const LoginPage = () => {
	return (
		<motion.div
			key="loginPage"
			className="content-wrapper relative grid grid-cols-8 grid-rows-6"
		>
			<motion.div
				variants={formVariants}
				initial="hidden"
				animate="shown"
				exit="hidden"
				className="col-start-2 col-end-8 row-start-2 row-end-6 flex flex-col rounded bg-bg-dark p-8 md:col-start-2 md:col-end-5"
			>
				<h1 className="text-5xl font-bold text-white">Log In</h1>
				<p className="text-text">Login to buy your lovely goodies.</p>
				<div className="h-full w-full">
					<form className="flex h-full flex-col gap-4 py-8">
						<div>
							<span className="text-white">Username</span>
							<input type="text" />
						</div>
						<div>
							<span className="text-white">Password</span>
							<input type="password" />
						</div>
						<button className="filter-btn mt-4 w-1/2 self-end py-4 md:py-2">
							Log In
						</button>
					</form>
				</div>
			</motion.div>
			<motion.div
				key="signup2"
				variants={linkVariants}
				initial="left"
				animate="main"
				exit="left"
				transition={{
					duration: 1,
					ease: [0.8, 0.3, 0.3, 0.8],
				}}
				className="absolute right-0 h-content w-full"
			>
				<Link
					to="/signup"
					className="flex h-full w-full items-center justify-start bg-bg-dark p-4 pr-4 text-4xl font-bold text-white transition-all hover:text-5xl"
				>
					Sign Up
				</Link>
			</motion.div>
		</motion.div>
	);
};

export default LoginPage;
