import React from "react";
import { motion } from "framer-motion";
import PageTransitionWrapper from "../wrappers/PageTransitionWrapper";
import { useParams } from "react-router-dom";

type Props = {};

const ProductPage = (props: Props) => {
	const { id } = useParams();

	return (
		<PageTransitionWrapper className="content-wrapper">
			Product {`${id}`}
		</PageTransitionWrapper>
	);
};

export default ProductPage;
