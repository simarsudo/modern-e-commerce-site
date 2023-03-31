import React from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

type Props = {};

const pagevariants = {
	exit: { opacity: 0, transition: { delay: 0.5 } },
};

const Products = (props: Props) => {
	const location = useLocation();

	return (
		<motion.div variants={pagevariants} exit="exit" className="content-wrapper">
			{`${location.pathname}`.replace("/", "") + " Page"}
		</motion.div>
	);
};

export default Products;
