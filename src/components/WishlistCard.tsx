import React from "react";

type Props = {};

const WishlistCard = (props: Props) => {
	return (
		<div className="col-span-1 aspect-[1/1.3] min-w-min max-w-min border-2 shadow-lg lg:min-w-[22%]">
			<div className="min-w-min">
				<img
					src="https://api.lorem.space/image/fashion?w=400&h=500&hash=ckszl2nd"
					alt=""
				/>
			</div>
			<div className="flex min-w-min flex-col p-4">
				<div className="flex min-w-min items-center justify-between font-bold">
					<h3 className="w-1/2 min-w-min text-ellipsis whitespace-nowrap px-1 text-lg font-bold">
						Product Name
					</h3>
					<h4 className="w-1/2 min-w-min text-ellipsis whitespace-nowrap px-1 text-end text-base font-bold">
						Product Type
					</h4>
				</div>
				<div className="flex items-center gap-2">
					<button className="filter-btn">Add</button>
					<button className="filter-btn">Delete</button>
				</div>
			</div>
		</div>
	);
};

export default WishlistCard;
