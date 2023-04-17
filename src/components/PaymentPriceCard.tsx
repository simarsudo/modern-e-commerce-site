import React from "react";

type Props = {
	name: string;
	price: number;
};

const PaymentPriceCard = (props: Props) => {
	return (
		<div className="flex min-w-min items-center justify-between border-b-2 p-4 px-6 font-semibold text-neutral-700">
			<p className="mr-2 whitespace-nowrap subpixel-antialiased">
				{props.name}
			</p>
			<p className="whitespace-nowrap font-price">&#8377; {props.price}/-</p>
		</div>
	);
};

export default PaymentPriceCard;
