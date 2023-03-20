import React from "react";

type Props = {};

const Product = (props: Props) => {
	return (
		<div className="border-highlight aspect-[1/1.2] w-full bg-bg-dark">
			<div className="min-h-full w-full overflow-hidden md:h-64">
				<img src="https://picsum.photos/300/350" />
			</div>
			<div className="flex flex-col gap-1 py-1 px-2 pb-2">
				<h2 className="truncate text-ellipsis border-b border-text pb-1 tracking-wider ">
					Product Name which is long
				</h2>
				<p className="text-sm font-normal text-gray-400">Product Type</p>
				<p className="text-sm font-extrabold">&#8377; 500</p>
			</div>
		</div>
	);
};

export default Product;
