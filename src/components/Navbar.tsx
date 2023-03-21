import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
	Bars4Icon,
	HeartIcon,
	UserIcon,
	ShoppingBagIcon,
	AdjustmentsHorizontalIcon,
} from "@heroicons/react/24/solid";
import NavItem from "./NavItem";

type Props = {
	isMobileFilterOn: boolean;
	setMobileFilters: React.Dispatch<React.SetStateAction<boolean>>;
};

const hoverStyles = {
	color: "#08D9D6",
};

const hoverTimings = {
	duration: 0.05,
};

const Navbar = (props: Props) => {
	const [mobileNavOn, setMobileNavOn] = useState(false);
	const location = useLocation();

	return (
		<div className="fixed top-0 left-0 z-40 flex h-14 w-full flex-col items-center justify-between border-b bg-bg-dark font-bold text-white shadow shadow-gray-400 md:flex-row md:border-b-0">
			<div className="flex h-full min-h-[3.5rem] w-full items-center justify-between px-4">
				<Link to="/" className="text-xl">
					Navbar
				</Link>
				<div className="flex gap-4">
					{location.pathname === "/" ? (
						<div
							className={`flex h-8 w-8 transition-colors md:hidden ${
								props.isMobileFilterOn ? "text-text" : ""
							}`}
							onClick={() => {
								props.setMobileFilters(!props.isMobileFilterOn);
							}}
						>
							<AdjustmentsHorizontalIcon />
						</div>
					) : (
						""
					)}
					<div
						className={`flex h-8 w-8 transition-colors md:hidden ${
							mobileNavOn ? "text-text" : ""
						}`}
						onClick={() => setMobileNavOn(!mobileNavOn)}
					>
						<Bars4Icon />
					</div>
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
					<NavItem
						hoverStyles={hoverStyles}
						hoverTimings={hoverTimings}
						linkName="Wishlist"
						linkTo="wishlist"
					>
						<HeartIcon className="h-6 w-6" />
					</NavItem>

					<NavItem
						hoverStyles={hoverStyles}
						hoverTimings={hoverTimings}
						linkName="Cart"
						linkTo="cart"
					>
						<ShoppingBagIcon className="h-6 w-6" />
					</NavItem>

					<NavItem
						hoverStyles={hoverStyles}
						hoverTimings={hoverTimings}
						linkName="Login"
						linkTo="login"
					>
						<UserIcon className="h-6 w-6" />
					</NavItem>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
