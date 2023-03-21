import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import CheckBoxComponents from "./CheckBoxComponents";
import RadioComponents from "./RadioComponents";

type Props = { isMobileFilterOn: boolean };

const Filters = (props: Props) => {
	const [droppedFilter, setDroppedFilter] = useState("Type");

	return (
		<div
			className={`fixed top-0 mt-14 origin-top ${
				props.isMobileFilterOn
					? "scale-y-100 opacity-100"
					: "scale-y-0 opacity-0"
			} flex max-h-min w-full min-w-[12rem] flex-col gap-2 border border-b-0 border-l-0 border-gray-300 bg-bg-dark p-2 font-bold text-white transition-all md:sticky md:right-0 md:top-16 md:mt-0 md:h-4/5 md:min-h-full md:w-1/5 md:scale-y-100 md:opacity-100 2xl:top-18 2xl:pb-4`}
		>
			<div className="filters-wrapper">
				<div
					className="relative"
					onClick={() =>
						setDroppedFilter(droppedFilter === "Type" ? "" : "Type")
					}
				>
					<h3>Type</h3>
					<div className="absolute top-1 right-0 h-6 w-6 hover:cursor-pointer">
						<ChevronDownIcon />
					</div>
				</div>
				<div
					className={`${
						droppedFilter === "Type" ? "h-full scale-y-100" : "h-0 scale-y-0"
					} pt-2`}
				>
					<CheckBoxComponents name="Shirt" />
					<CheckBoxComponents name="T-Shirt" />
					<CheckBoxComponents name="Pants" />
					<CheckBoxComponents name="Joggers" />
					<CheckBoxComponents name="Jeans" />
				</div>
			</div>
			<div className="filters-wrapper">
				<div
					className="relative"
					onClick={() =>
						setDroppedFilter(droppedFilter === "Size" ? "" : "Size")
					}
				>
					<h3>Size</h3>
					<div className="absolute top-1 right-0 h-6 w-6 hover:cursor-pointer">
						<ChevronDownIcon />
					</div>
				</div>
				<div
					className={`${
						droppedFilter === "Size" ? "h-full scale-y-100" : "h-0 scale-y-0"
					} pt-2`}
				>
					<CheckBoxComponents name="XS" />
					<CheckBoxComponents name="S" />
					<CheckBoxComponents name="M" />
					<CheckBoxComponents name="L" />
					<CheckBoxComponents name="XL" />
					<CheckBoxComponents name="XXL" />
				</div>
			</div>
			<div className="filters-wrapper">
				<div>
					<h3>Sort</h3>
				</div>
				<div className="pt-2">
					<RadioComponents name="Popularity" />
					<RadioComponents name="Newest" />
					<RadioComponents name="High" />
					<RadioComponents name="Low" />
				</div>
			</div>
			<div className="flex flex-col gap-3 p-2 xl:gap-4">
				<button className="filter-btn">Search</button>
				<button className="filter-btn">Reset</button>
			</div>
		</div>
	);
};

export default Filters;
