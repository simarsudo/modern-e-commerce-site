import React from "react";
import Shirt from "./svgImages/Shirt";
import Pant from "./svgImages/Pant";
import Shoe from "./svgImages/Shoe";
import { motion } from "framer-motion";

const pageVariant = {
	main: {
		top: "0",
		opacity: 100,
	},
	exit: {
		top: "100%",
		transition: {
			duration: 1,
			delay: 0.5,
		},
	},
};

const headingVariant = {
	initial: {
		scale: 1.2,
		translateY: "-300%",
		opacity: 0,
	},
	animate: {
		scale: 1,
		translateY: "0",
		opacity: 100,
		transition: {
			duration: 1,
			delay: 0.5,
		},
	},
	exit: {
		opacity: 0,
		transition: {
			duration: 0.5,
		},
	},
};

const imgWrapperVariant = {
	initial: {
		opacity: 0,
	},
	animate: { opacity: 100, transition: { duration: 1, delay: 0.5 } },
};

const GlobalLoader = () => {
	return (
		<motion.div
			key={"loadingScreen"}
			variants={pageVariant}
			animate="main"
			exit="exit"
			className="fixed z-50 flex h-screen w-screen flex-col items-center justify-center gap-8 border-2 border-black bg-[#FFFFFF] font-black"
		>
			<motion.h1
				variants={headingVariant}
				initial="initial"
				animate="animate"
				exit="exit"
				className="text-5xl uppercase tracking-wider md:text-8xl"
			>
				Loading
				<motion.span
					initial={{ opacity: 0 }}
					animate={{
						opacity: 1,
						transition: {
							duration: 1.2,
							repeat: Infinity,
							ease: "linear",
							delay: 1,
						},
					}}
				>
					.
				</motion.span>
				<motion.span
					initial={{ opacity: 0 }}
					animate={{
						opacity: 1,
						transition: {
							duration: 1.2,
							repeat: Infinity,
							ease: "linear",
							delay: 1.3,
						},
					}}
				>
					.
				</motion.span>
				<motion.span
					initial={{ opacity: 0 }}
					animate={{
						opacity: 1,
						transition: {
							duration: 1.2,
							repeat: Infinity,
							ease: "linear",
							delay: 1.6,
						},
					}}
				>
					.
				</motion.span>
			</motion.h1>
			<motion.div
				variants={imgWrapperVariant}
				initial="initial"
				animate="animate"
				exit="exit"
				className="flex items-center justify-center gap-8"
			>
				<motion.div
					exit={{ translateX: "-200%", opacity: 0 }}
					transition={{ duration: 0.5 }}
				>
					<Shirt className="w-24" shirtBG="#fff" shirtHighlight="black" />
				</motion.div>
				<motion.div
					exit={{ translateY: "200%", opacity: 0 }}
					transition={{ duration: 0.5 }}
				>
					<Pant className="w-16" pantBg="#fff" pantHighlight="black" />
				</motion.div>
				<motion.div
					exit={{ translateX: "200%", opacity: 0 }}
					transition={{ duration: 0.5 }}
				>
					<Shoe className="w-28" shoeBg="#fff" shoeHighlight="black" />
				</motion.div>
			</motion.div>
		</motion.div>
	);
};

export default GlobalLoader;
