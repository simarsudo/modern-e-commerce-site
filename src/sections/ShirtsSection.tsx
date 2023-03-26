import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import MainCard from "../components/MainCard";

type Props = {};

const h2Variant = {
	initial: {},
	animate: {
		transition: {
			staggerChildren: 0.2,
			delay: 3,
			delayChildren: 3,
		},
	},
};

const spanVariant = {
	initial: { translateY: "200%" },
	animate: { translateY: 0, transition: { duration: 0.5, ease: "linear" } },
};

const ShirtsSection = (props: Props) => {
	const ref = useRef(null);
	const isInView = useInView(ref);

	return (
		<div>
			<motion.h2
				ref={ref}
				variants={h2Variant}
				initial="initial"
				animate="animate"
				className="flex overflow-hidden border-b pb-4 text-5xl"
			>
				<motion.div variants={spanVariant}>S</motion.div>
				<motion.div variants={spanVariant}>H</motion.div>
				<motion.div variants={spanVariant}>I</motion.div>
				<motion.div variants={spanVariant}>R</motion.div>
				<motion.div variants={spanVariant}>T</motion.div>
				<motion.div variants={spanVariant}>S</motion.div>
			</motion.h2>
			<div className="no-scrollbar flex overflow-x-scroll">
				<ul className="grid w-full grid-cols-1 place-content-around gap-12 pt-4 md:grid-cols-4 md:gap-12">
					<MainCard imgLink="https://api.lorem.space/image/album?w=350&h=500&hash=wmwzi6su" />
					<MainCard imgLink="https://api.lorem.space/image/album?w=350&h=500&hash=kj5bnl3l" />
					<MainCard imgLink="https://api.lorem.space/image/album?w=350&h=500&hash=dnqsm8rf" />
					<MainCard imgLink="https://api.lorem.space/image/album?w=350&h=500&hash=yonbsdxr" />
					<MainCard imgLink="https://api.lorem.space/image/album?w=350&h=500&hash=3kk4tw6g" />
				</ul>
			</div>
		</div>
	);
};

export default ShirtsSection;
