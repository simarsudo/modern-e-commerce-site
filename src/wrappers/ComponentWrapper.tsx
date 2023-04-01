import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { componentVariant } from "../variants/ComponentVariants";

type Props = {
	children: ReactNode;
	className: string;
};

const ComponentWrapper = (props: Props) => {
	return (
		<motion.div
			className={`min-w-[25rem] ${props.className}`}
			variants={componentVariant}
			initial="initial"
			animate="animate"
			exit="exit"
		>
			{props.children}
		</motion.div>
	);
};

export default ComponentWrapper;
