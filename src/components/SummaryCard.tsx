import React from "react";

type Props = {};

const SummaryCard = (props: Props) => {
	return (
		<div className="grid h-60 max-h-min grid-cols-summaryCard grid-rows-summaryCard gap-1 border-b-2 pb-2">
			<div className="col-start-1 col-end-5 row-span-full mr-1 h-full w-auto object-cover">
				<img
					className="h-full w-auto object-cover"
					src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1680943740_3715930.jpg?format=webp&w=300&dpr=2"
					alt="summary img"
				/>
			</div>
			<div className="col-start-5 col-end-13 row-start-1 row-end-3 flex h-min flex-wrap justify-between">
				<h4 className="mr-1 mb-1 h-min min-w-min whitespace-nowrap text-xl font-bold text-neutral-800">
					Product Name
				</h4>
				<h4 className="h-min whitespace-nowrap font-price text-lg font-semibold text-neutral-700">
					&#8377; 500/-
				</h4>
			</div>
			<div className="col-start-5 col-end-12 row-start-3 row-end-4 mb-2 flex">
				<select
					name="size"
					id="size"
					className="mr-1 h-10 w-min bg-white shadow-none hover:cursor-pointer focus:border-bg-dark focus:shadow-none"
				>
					<option value="XS">XS</option>
					<option value="S">S</option>
					<option value="M">M</option>
					<option value="L">L</option>
					<option value="Xl">Xl</option>
				</select>
				<select
					name="size"
					id="size"
					className="mr-1 h-10 w-min bg-white shadow-none hover:cursor-pointer focus:border-bg-dark focus:shadow-none"
				>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
				</select>
			</div>
			<div className="col-start-5 col-end-13 row-start-4 row-end-6 flex flex-wrap items-end">
				<button className="filter-btn btn-click mx-1 h-min max-w-min rounded bg-rose-600 text-base font-semibold hover:bg-rose-500 ">
					Remove
				</button>
				<button className="filter-btn btn-click mx-1 h-min max-w-min whitespace-nowrap rounded bg-sky-600 text-base font-semibold hover:bg-sky-500">
					Move to Wishlist
				</button>
			</div>
		</div>
	);
};

export default SummaryCard;

// <div className="mr-1 h-auto w-36">
// 				<img
// 					className="object-cover"
// 					src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1680943740_3715930.jpg?format=webp&w=300&dpr=2"
// 					alt="summary img"
// 				/>
// 			</div>
// 			<div className="flex w-1/2 flex-col justify-between">
// 				<div className="mr-1 flex flex-col">
// 					<h4 className="text-xl font-bold text-neutral-800">Product Name</h4>
// 					<h5 className="text-lg text-neutral-700">Shirt</h5>
// 				</div>
// 				<div className="mb-2 flex gap-4">
// 					<select
// 						name="size"
// 						id="size"
// 						className="mr-1 h-10 w-min bg-white shadow-none hover:cursor-pointer focus:border-bg-dark focus:shadow-none"
// 					>
// 						<option value="XS">XS</option>
// 						<option value="S">S</option>
// 						<option value="M">M</option>
// 						<option value="L">L</option>
// 						<option value="Xl">Xl</option>
// 					</select>
// 					<select
// 						name="size"
// 						id="size"
// 						className="mr-1 h-10 w-min bg-white shadow-none hover:cursor-pointer focus:border-bg-dark focus:shadow-none"
// 					>
// 						<option value="1">1</option>
// 						<option value="2">2</option>
// 						<option value="3">3</option>
// 						<option value="4">4</option>
// 						<option value="5">5</option>
// 					</select>
// 				</div>
// 			</div>
// 			<div className="flex w-60 flex-col justify-between">
// 				<h4 className="flex justify-end font-price text-lg font-semibold text-neutral-900">
// 					&#8377; 500/-
// 				</h4>
// 				<div className="flex items-end justify-end">
// 					<button className="filter-btn btn-click mx-1 max-w-min rounded bg-rose-600 text-base font-semibold hover:bg-rose-500 ">
// 						Remove
// 					</button>
// 					<button className="filter-btn btn-click mx-1 max-w-min whitespace-nowrap rounded bg-sky-600 text-base font-semibold hover:bg-sky-500">
// 						Move to Wishlist
// 					</button>
// 				</div>
// 			</div>