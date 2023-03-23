import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const linkVariants = {
	right: {
		left: "-80%",
		transition: { ease: [0.8, 0.3, 0.3, 0.8], duration: 1 },
	},
	main: {
		left: "80%",
		transition: { ease: [0.8, 0.3, 0.3, 0.8], duration: 1 },
	},
	left: {
		left: "-80%",
		transition: { ease: [0.8, 0.3, 0.3, 0.8], duration: 1 },
	},
};

const formVariants = {
	hidden: {
		opacity: 0,
		transition: { delay: 0.5, duration: 1, ease: "easeInOut" },
	},
	shown: {
		opacity: 100,
		transition: { delay: 0.5, duration: 1, ease: "easeInOut" },
	},
};

const LoginPage = () => {
	return (
		<>
			<motion.div
				key="login1"
				variants={formVariants}
				initial="hidden"
				animate="shown"
				exit="hidden"
			>
				<div className="content-wrapper relative grid grid-cols-8 grid-rows-6">
					<div className="col-start-2 col-end-8 row-start-2 row-end-6 flex flex-col rounded bg-bg-dark p-8 md:col-start-2 md:col-end-5">
						<h1 className="text-5xl font-bold text-white">Log In</h1>
						<p className="text-text">Login to buy your lovely goodies.</p>
						<div className="h-full w-full">
							<form className="flex h-full flex-col gap-4 py-8">
								<div className="">
									<span className="text-white">Username</span>
									<input type="text" />
								</div>
								<div className="">
									<span className="text-white">Password</span>
									<input type="password" />
								</div>
								<button className="filter-btn mt-4 w-1/2 self-end py-4 md:py-2">
									Log In
								</button>
							</form>
						</div>
					</div>
				</div>
			</motion.div>
			<motion.div
				key="login2"
				variants={linkVariants}
				initial="right"
				animate="main"
				exit="left"
				className="absolute right-0 mt-14 h-content w-full"
			>
				<Link
					to="/signup"
					className="flex h-full w-full items-center justify-start bg-bg-dark pl-4 text-4xl font-bold text-white transition-all hover:text-5xl"
				>
					Sign Up
				</Link>
			</motion.div>
		</>
	);
};

export default LoginPage;
