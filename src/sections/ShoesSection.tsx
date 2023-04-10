import React from "react";
import { easeOut, motion } from "framer-motion";
import MainCard from "../components/MainCard";
import LinkCard from "../components/LinkCard";
import Shoe from "../svgImages/Shoe";

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
				viewport={{ once: true }}
				className="flex overflow-hidden border-b font-highlight text-8xl font-bold uppercase"
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
			<div className="no-scrollbar flex overflow-x-scroll pb-8">
				<ul className="grid w-full grid-cols-md gap-4 pt-6 md:gap-10 2xl:grid-cols-lg">
					<MainCard
						id="shoe"
						type="shoes"
						imgLink="https://picsum.photos/300/350"
					/>
					<MainCard
						id="shoe"
						type="shoes"
						imgLink="https://picsum.photos/300/350"
					/>
					<MainCard
						id="shoe"
						type="shoes"
						imgLink="https://picsum.photos/300/350"
					/>
					<MainCard
						id="shoe"
						type="shoes"
						imgLink="https://picsum.photos/300/350"
					/>
					<MainCard
						id="shoe"
						type="shoes"
						imgLink="https://picsum.photos/300/350"
					/>
					<LinkCard link="shoes" />
				</ul>
			</div>
		</div>
	);
};

export default ShoesSection;
