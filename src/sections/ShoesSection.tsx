import React from "react";
import { easeOut, motion } from "framer-motion";
import MainCard from "../components/MainCard";
import LinkCard from "../components/LinkCard";

type Props = {};

const h2Variant = {
	initial: {},
	animate: {
		transition: {
			delayChildren: 5,
			staggerChildren: 0.1,
			ease: [0.39, 0.575, 0.565, 1],
		},
	},
};

const spanVariant = {
	initial: { translateY: "200%" },
	animate: { translateY: 0, transition: { duration: 0.8, ease: easeOut } },
};

const ShoesSection = (props: Props) => {
	return (
		<div>
			<motion.h2
				variants={h2Variant}
				initial="initial"
				animate="animate"
				className="flex overflow-hidden border-b pb-4 font-highlight text-6xl font-bold uppercase"
			>
				<motion.div className="font-highlight font-bold" variants={spanVariant}>
					S
				</motion.div>
				<motion.div className="font-highlight font-bold" variants={spanVariant}>
					H
				</motion.div>
				<motion.div className="font-highlight font-bold" variants={spanVariant}>
					O
				</motion.div>
				<motion.div className="font-highlight font-bold" variants={spanVariant}>
					E
				</motion.div>
				<motion.div className="font-highlight font-bold" variants={spanVariant}>
					S
				</motion.div>
			</motion.h2>
			<div className="no-scrollbar flex overflow-x-scroll">
				<ul className="grid w-full grid-cols-1 place-content-around gap-12 pt-4 md:grid-cols-4 md:gap-12">
					<MainCard imgLink="https://api.lorem.space/image/album?w=350&h=500&hash=wmwzi6su" />
					<MainCard imgLink="https://api.lorem.space/image/album?w=350&h=500&hash=kj5bnl3l" />
					<MainCard imgLink="https://api.lorem.space/image/album?w=350&h=500&hash=dnqsm8rf" />
					<MainCard imgLink="https://api.lorem.space/image/album?w=350&h=500&hash=yonbsdxr" />
					<MainCard imgLink="https://api.lorem.space/image/album?w=350&h=500&hash=3kk4tw6g" />
					<LinkCard link="shoes" />
				</ul>
			</div>
		</div>
	);
};

export default ShoesSection;
