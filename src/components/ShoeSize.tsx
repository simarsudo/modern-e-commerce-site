import React from "react";

type Props = {};

const ShoeSize = (props: Props) => {
	return (
		<div className="flex flex-col gap-4">
			<div className="text-lg font-bold text-neutral-700">Size</div>
			<div className="flex items-center gap-4 text-neutral-700">
				<div className="flex items-center gap-2">
					<input
						className="border-2 border-sky-600 text-sky-600 focus:outline-sky-600"
						type="radio"
						name="shoeSize"
						id="6"
					/>
					<span className="font-price">6</span>
				</div>
				<div className="flex items-center gap-2">
					<input
						className="border-2 border-sky-600 text-sky-600 focus:outline-sky-600"
						type="radio"
						name="shoeSize"
						id="7"
					/>
					<span className="font-price">7</span>
				</div>
				<div className="flex items-center gap-2">
					<input
						className="border-2 border-sky-600 text-sky-600 focus:outline-sky-600"
						type="radio"
						name="shoeSize"
						id="8"
					/>
					<span className="font-price">8</span>
				</div>
				<div className="flex items-center gap-2">
					<input
						className="border-2 border-sky-600 text-sky-600 focus:outline-sky-600"
						type="radio"
						name="shoeSize"
						id="9"
					/>
					<span className="font-price">9</span>
				</div>
				<div className="flex items-center gap-2">
					<input
						className="border-2 border-sky-600 text-sky-600 focus:outline-sky-600"
						type="radio"
						name="shoeSize"
						id="10"
					/>
					<span className="font-price">10</span>
				</div>
			</div>
		</div>
	);
};

export default ShoeSize;
