import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { pageVariants } from "../variants/pageVariants";

type Props = {
	children: ReactNode;
	className?: string | undefined;
};

const PageTransitionWrapper = (props: Props) => {
	return (
		<motion.div
			className={props.className ? props.className : undefined}
			variants={pageVariants}
			exit="exit"
		>
			{props.children}
		</motion.div>
	);
};

export default PageTransitionWrapper;
