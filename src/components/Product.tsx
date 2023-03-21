import React from "react";
import { Link } from "react-router-dom";

type Props = {
	productImgLink: string;
	productName: string;
	productType: string;
	productPrice: number;
};

const Product = (props: Props) => {
	return (
		<Link
			to={`/${props.productType}/${props.productName}`}
			className="border-highlight aspect-[1/1.2] w-full bg-bg-dark shadow shadow-bg-dark transition-all hover:scale-105 hover:shadow-md hover:shadow-bg-dark"
		>
			<div className="h-56 min-h-full w-full overflow-hidden md:h-64">
				<img className="h-auto w-full" src={props.productImgLink} />
			</div>
			<div className="flex flex-col gap-1 py-1 px-2 pb-2">
				<h2 className="truncate text-ellipsis border-b border-text pb-1 tracking-wider ">
					{props.productName}
				</h2>
				<p className="text-sm font-normal text-gray-400">{props.productType}</p>
				<p className="text-sm font-extrabold">&#8377; {props.productPrice}</p>
			</div>
		</Link>
	);
};

export default Product;
