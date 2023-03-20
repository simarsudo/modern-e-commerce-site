import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
	Bars4Icon,
	HeartIcon,
	UserIcon,
	ShoppingBagIcon,
} from "@heroicons/react/24/solid";

const hoverStyles = {
	color: "#08D9D6",
};

const hoverTimings = {
	duration: 0.05,
};

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
					<motion.li whileHover={hoverStyles} transition={hoverTimings}>
						<NavLink
							to="wishlist"
							className="flex flex-nowrap justify-between gap-1 transition-colors "
						>
							{({ isActive }) => (
								<>
									<span
										className={
											isActive
												? "underline decoration-text decoration-2 underline-offset-4"
												: ""
										}
									>
										Wishlist
									</span>
									<HeartIcon className="h-6 w-6" />
								</>
							)}
						</NavLink>
					</motion.li>
					<motion.li whileHover={hoverStyles} transition={hoverTimings}>
						<NavLink
							to="cart"
							className="flex flex-nowrap justify-between gap-1 transition-colors "
						>
							{({ isActive }) => (
								<>
									<span
										className={
											isActive
												? "underline decoration-text decoration-2 underline-offset-4"
												: ""
										}
									>
										Cart
									</span>
									<ShoppingBagIcon className="h-6 w-6" />
								</>
							)}
						</NavLink>
					</motion.li>
					<motion.li whileHover={hoverStyles} transition={hoverTimings}>
						<NavLink
							to="login"
							className="flex flex-nowrap justify-between gap-1 transition-colors "
						>
							{({ isActive }) => (
								<>
									<span
										className={
											isActive
												? "underline decoration-text decoration-2 underline-offset-4"
												: ""
										}
									>
										Login
									</span>
									<UserIcon className="h-6 w-6" />
								</>
							)}
						</NavLink>
					</motion.li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
