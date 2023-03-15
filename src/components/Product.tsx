import React from "react";

type Props = {};

const Product = (props: Props) => {
	return (
		<div className="aspect-[1/1.5] w-full bg-white text-gray-500">
			<img src="https://picsum.photos/300/400" />
			<div className="py-1 px-2 md:px-4">
				<h2 className="truncate text-ellipsis border-b pb-1">
					Product Name which is long
				</h2>
				<p className="text-sm font-extralight text-gray-400">Product Type</p>
				<p className="text-sm font-extrabold">&#8377; 500</p>
			</div>
		</div>
	);
};

export default Product;
