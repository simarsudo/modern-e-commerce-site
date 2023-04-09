import React from "react";
import { ShoppingCartIcon, TrashIcon } from "@heroicons/react/24/solid";

type Props = {};

const WishlistCard = (props: Props) => {
	return (
		<div className="col-span-1 aspect-[1/1.3] rounded border-2 bg-bg-dark p-1 text-white shadow-lg">
			<div className="">
				<img
					className="w-full object-cover"
					src="https://picsum.photos/300/400"
					alt=""
				/>
			</div>
			<div className="flex flex-col justify-evenly gap-2 p-2">
				<div className="flex items-center justify-between font-bold">
					<h3 className="one-line w-2/3 overflow-hidden text-ellipsis px-1 text-lg font-bold">
						Product Name dawd adw awd adw awd ad dww
					</h3>
					<h4 className="w-1/3 min-w-min text-ellipsis whitespace-nowrap px-1 text-end text-base font-light">
						Type
					</h4>
				</div>
				<div className="flex items-center gap-2">
					<button className="filter-btn flex items-center justify-center bg-teal-500">
						<ShoppingCartIcon className="h-5 w-5" />
					</button>
					<button className="filter-btn flex items-center justify-center bg-rose-500 hover:bg-rose-600">
						<TrashIcon className="h-5 w-5" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default WishlistCard;
