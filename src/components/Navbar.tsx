import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
	Bars4Icon,
	HeartIcon,
	UserIcon,
	ShoppingBagIcon,
} from "@heroicons/react/24/solid";

const Navbar = () => {
	const [mobileNavOn, setMobileNavOn] = useState(false);

	return (
		<div className="fixed top-0 left-0 z-40 flex h-14 w-full flex-col items-center justify-between bg-bg-dark font-bold text-white shadow shadow-gray-400 md:flex-row">
			<div className="flex h-full min-h-[3.5rem] w-full items-center justify-between px-4">
				<Link to="/" className="text-xl">
					Navbar
				</Link>
				<div
					className="flex h-8 w-8 md:hidden"
					onClick={() => setMobileNavOn(!mobileNavOn)}
				>
					<Bars4Icon />
				</div>
			</div>
			<div
				className={`flex w-full min-w-fit justify-end border-b bg-bg-dark py-4 pr-4 md:w-auto md:border-b-0 md:pt-4 ${
					mobileNavOn
						? "scale-y-100 opacity-100"
						: "origin-top scale-y-0 opacity-0"
				} origin-top transition-all md:scale-y-100 md:opacity-100`}
			>
				<ul className="flex flex-col flex-nowrap gap-4 overflow-hidden md:flex-row">
					<li>
						<Link
							to="wishlist"
							className="flex flex-nowrap justify-between gap-1 text-white transition-colors hover:text-text"
						>
							<span>Wishlist</span>
							<HeartIcon className="h-6 w-6" />
						</Link>
					</li>
					<li>
						<Link
							to="cart"
							className="flex flex-nowrap justify-between gap-1 text-white transition-colors hover:text-text"
						>
							<span>Cart</span>
							<ShoppingBagIcon className="h-6 w-6" />
						</Link>
					</li>
					<li>
						<Link
							to="login"
							className="flex flex-nowrap justify-between gap-1 text-white transition-colors hover:text-text"
						>
							<span>Log In</span>
							<UserIcon className="h-6 w-6" />
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
