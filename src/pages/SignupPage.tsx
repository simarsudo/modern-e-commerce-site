import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

type Props = {};

const SignupPage = (props: Props) => {
	return (
		<>
			<motion.div
				key="signup1"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{
					delay: 0.5,
					duration: 1,
					ease: "easeInOut",
					repeatType: "mirror",
				}}
			>
				<div className="content-wrapper relative grid grid-cols-8 grid-rows-6">
					<div className="col-start-2 col-end-8 row-start-2 row-end-6 flex flex-col rounded bg-bg-dark p-8 md:col-start-5 md:col-end-8">
						<h1 className="text-5xl font-bold text-white">Sign Up</h1>
						<p className="text-text">Signup to buy your lovely goodies.</p>
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
				key="signup2"
				initial={{ left: "80%", opacity: "100%" }}
				animate={{ left: "-80%" }}
				exit={{ left: "80%", opacity: 0 }}
				transition={{
					duration: 1,
				}}
				className="absolute left-0 mt-14 h-content w-full"
			>
				<Link
					to="/login"
					className="flex h-full w-full items-center justify-end bg-bg-dark pr-4 text-4xl font-bold text-white transition-all hover:text-5xl"
				>
					Log In
				</Link>
			</motion.div>
		</>
	);
};

export default SignupPage;
