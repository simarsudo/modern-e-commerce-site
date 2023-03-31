import React from "react";
import PageTransitionWrapper from "../wrappers/PageTransitionWrapper";
import { useLocation } from "react-router-dom";

type Props = {};

const pagevariants = {
	exit: { opacity: 0, transition: { delay: 0.5 } },
};

const Products = (props: Props) => {
	const location = useLocation();

	return (
		<PageTransitionWrapper className="content-wrapper">
			{`${location.pathname}`.replace("/", "") + " Page"}
		</PageTransitionWrapper>
	);
};

export default Products;
