import React from "react";

type Props = {};

const SummaryCard = (props: Props) => {
	return (
		<div className="mb-4 flex gap-4 border-b-2 pb-4">
			<div className="mr-1 h-auto w-36">
				<img
					className="object-cover"
					src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1680943740_3715930.jpg?format=webp&w=300&dpr=2"
					alt="summary img"
				/>
			</div>
			<div className="flex w-1/2 flex-col justify-between">
				<div className="mr-1 flex flex-col">
					<h4 className="text-lg font-bold text-neutral-800">Product Name</h4>
					<h5 className="text-neutral-700">Shirt</h5>
				</div>
				<div className="mb-2 flex gap-4">
					<select name="size" id="size" className="mr-1 h-10 w-min">
						<option value="XS">XS</option>
						<option value="S">S</option>
						<option value="M">M</option>
						<option value="L">L</option>
						<option value="Xl">Xl</option>
					</select>
					<select name="size" id="size" className="mr-1 h-10 w-min">
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
					</select>
				</div>
			</div>
			<div className="flex w-60 flex-col justify-between">
				<div className="flex justify-end font-price">&#8377; 500/-</div>
				<div className="flex items-end justify-end">
					<button className="filter-btn mx-1 max-w-min rounded bg-rose-600 hover:bg-rose-500">
						Remove
					</button>
					<button className="filter-btn mx-1 max-w-min whitespace-nowrap rounded bg-sky-600 hover:bg-sky-500">
						Move to Wishlist
					</button>
				</div>
			</div>
		</div>
	);
};

export default SummaryCard;
