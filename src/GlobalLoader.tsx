import React, { RefObject } from "react";
import Shirt from "./svgImages/Shirt";
import Pant from "./svgImages/Pant";
import Shoe from "./svgImages/Shoe";
import { motion } from "framer-motion";

const pageVariant = {
	entry: {
		top: "100%",
	},
	main: {
		top: "0",
		transition: {
			duration: 0.7,
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
		scale: 0,
		opacity: 0,
		transition: {
			duration: 1,
			delay: 0.5,
		},
	},
};

const imgWrapperVariant = {
	initial: {},
	main: {},
};

type Props = {
	reference: RefObject<HTMLDivElement>;
};

const GlobalLoader = () => {
	return (
		<motion.div
			// ref={props.reference}
			key={"loadingScreen"}
			variants={pageVariant}
			initial="entry"
			animate="main"
			className="fixed z-50 flex h-screen w-screen flex-col items-center justify-center gap-4 bg-bg-light font-black"
		>
			<motion.h1
				variants={headingVariant}
				initial="initial"
				animate="animate"
				className="animate-pulse text-8xl uppercase tracking-wider"
			>
				Loading
			</motion.h1>
			<motion.div
				variants={imgWrapperVariant}
				className="flex items-center justify-center gap-4"
			>
				<Shirt className="w-24" shirtBG="#fff" shirtHighlight="black" />
				<Pant className="w-16" pantBg="#fff" pantHighlight="black" />
				<Shoe className="w-28" shoeBg="#fff" shoeHighlight="black" />
			</motion.div>
		</motion.div>
	);
};

export default GlobalLoader;
