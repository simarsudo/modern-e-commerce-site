import React from "react";
import { useParams } from "react-router-dom";

type Props = {};

const Product = (props: Props) => {
	const { id } = useParams();

	return <div className="content-wrapper">ProductPant {`${id}`}</div>;
};

export default Product;
