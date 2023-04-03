import React from "react";
import { motion } from "framer-motion";
import Shirt from "./svgImages/Shirt";
import Pant from "./svgImages/Pant";
import Shoe from "./svgImages/Shoe";

type Props = {};

const pageVariant = {
	initial: {
		top: "100%",
		opacity: 0,
		transition: { duration: 0.5 },
	},
	main: {
		top: "0",
		opacity: 100,
		transition: { duration: 0.5 },
	},
	exit: {
		top: "-100%",
		transition: {
			duration: 1,
			delay: 0.5,
		},
	},
};

const imgWrapperVariant = {
	initial: {
		opacity: 0,
		transition: { staggerChildren: 1 },
	},
	animate: {
		opacity: 100,
		transition: { duration: 1, staggerChildren: 1 },
	},
};

const imgVariant = {
	animate: {
		opacity: [100, 0, 100],
		transition: { repeat: Infinity, duration: 2, ease: "linear" },
	},
};

const PageLoader = (props: Props) => {
	return (
		<motion.div
			key={"loadingScreen"}
			variants={pageVariant}
			animate="main"
			exit="exit"
			className="fixed top-full z-30 flex h-screen w-screen flex-col items-center justify-center gap-8 border-2 border-black bg-[#FFFFFF] font-black"
		>
			<motion.div
				variants={imgWrapperVariant}
				initial="initial"
				animate="animate"
				exit="exit"
				className="flex items-center justify-center gap-8"
			>
				<motion.div
					variants={imgVariant}
					initial="initial"
					animate="animate"
					exit="exit"
					className="animate-pulse"
				>
					<Shirt className="w-40" shirtBG="#fff" shirtHighlight="black" />
				</motion.div>
				<motion.div
					variants={imgVariant}
					initial="initial"
					animate="animate"
					exit="exit"
					className="animate-pulse"
				>
					<Pant className="w-28" pantBg="#fff" pantHighlight="black" />
				</motion.div>
				<motion.div
					variants={imgVariant}
					initial="initial"
					animate="animate"
					exit="exit"
					className="animate-pulse"
				>
					<Shoe className="w-48" shoeBg="#fff" shoeHighlight="black" />
				</motion.div>
			</motion.div>
		</motion.div>
	);
};

export default PageLoader;
