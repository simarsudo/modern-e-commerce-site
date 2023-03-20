import { Bars4Icon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { Link } from "react-router-dom";

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
				className={`flex w-full justify-end bg-bg-dark py-4 pr-4 md:w-auto ${
					mobileNavOn
						? "scale-y-100 opacity-100"
						: "origin-top scale-y-0 opacity-0"
				} origin-top transition-all md:scale-y-100 md:opacity-100`}
			>
				<ul className={`flex  flex-col gap-4 overflow-hidden md:flex-row`}>
					<li className="whitespace-nowrap underline decoration-text/80 decoration-2 underline-offset-4 hover:cursor-pointer hover:decoration-text">
						<Link to="login">Link 1</Link>
					</li>
					<li className="whitespace-nowrap underline decoration-text/80 decoration-2 underline-offset-4 hover:cursor-pointer hover:decoration-text">
						<Link to="signup">Link 2</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
