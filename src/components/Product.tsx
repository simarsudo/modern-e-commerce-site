import React from "react";

type Props = {};

const Product = (props: Props) => {
	return (
		<div className="aspect-[1/1.5] w-full bg-indigo-500">
			<img src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1670071748_9504720.jpg" />
			<div className="py-1 px-2 md:px-4">
				<h2 className="truncate text-ellipsis border-b pb-1">
					Product Name which is long
				</h2>
				<p className="text-sm font-extralight">Product Type</p>
				<p className="text-sm font-extrabold">&#8377; 500</p>
			</div>
		</div>
	);
};

export default Product;
