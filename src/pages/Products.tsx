import React from "react";
import { useLocation } from "react-router-dom";

type Props = {};

const Products = (props: Props) => {
	const location = useLocation();
	console.log(location);

	return (
		<div className="content-wrapper">
			{`${location.pathname}`.replace("/", "") + " Page"}
		</div>
	);
};

export default Products;
