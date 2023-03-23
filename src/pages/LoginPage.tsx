import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";

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

const LoginPage = () => {
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
				className="col-start-2 col-end-8 row-start-2 row-end-6 flex origin-bottom flex-col rounded bg-bg-dark p-8 md:col-start-2 md:col-end-5"
			>
				<motion.div
					variants={formContainer}
					initial="hidden"
					animate="shown"
					exit="hidden"
					className="flex h-full flex-col justify-between"
				>
					<h1 className="text-5xl font-bold text-white">Log In</h1>
					<div className="h-full w-full">
						<form className="flex h-full flex-col justify-around gap-4 py-8">
							<div>
								<span className="text-white">Username</span>
								<input type="text" />
							</div>
							<div>
								<span className="text-white">Password</span>
								<input type="password" />
							</div>
							<div className="flex w-full gap-2 py-2">
								<button className="filter-btn flex w-1/2 self-end py-4 md:hidden md:py-2">
									<Link to="/signup">SignUp</Link>
								</button>
								<button className="filter-btn mt-4 w-1/2 self-end py-4 md:py-2">
									Log In
								</button>
							</div>
						</form>
					</div>
				</motion.div>
			</motion.div>
			<motion.div
				variants={linkVariants}
				initial="left"
				animate="main"
				exit="left"
				transition={{
					duration: 1,
					ease: [0.8, 0.3, 0.3, 0.8],
				}}
				className="absolute right-0 hidden h-fit w-full md:flex md:h-content"
			>
				<Link
					to="/signup"
					className="flex  w-full items-center justify-start bg-bg-dark p-4 pr-4 text-4xl font-bold text-white transition-all hover:text-5xl md:h-full"
				>
					Sign Up
					<div className="h-14 w-14 text-white">
						<ArrowRightCircleIcon className="h-14 w-14 text-white" />
					</div>
				</Link>
			</motion.div>
		</motion.div>
	);
};

export default LoginPage;
