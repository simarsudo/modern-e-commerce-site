import React from "react";
import Product from "../components/Product";

const Products = () => {
	return (
		<div className="grid w-full grid-cols-2 gap-6 border-y border-gray-300 py-2 px-4 font-bold text-white md:grid-cols-3 lg:grid-cols-4">
			<Product />
			<Product />
			<Product />
			<Product />
			<Product />
			<Product />
			<Product />
			<Product />
			<Product />
			<Product />
			<Product />
			<Product />
			<Product />
			<Product />
			<Product />
		</div>
	);
};

export default Products;
