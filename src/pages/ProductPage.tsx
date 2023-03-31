import React from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";

type Props = {};

const pagevariants = {
	exit: { opacity: 0, transition: { delay: 0.5 } },
};

const ProductPage = (props: Props) => {
	const { id } = useParams();

	return (
		<motion.div variants={pagevariants} exit="exit" className="content-wrapper">
			Product {`${id}`}
		</motion.div>
	);
};

export default ProductPage;
