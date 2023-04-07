import React, { useState } from "react";
import PageTransitionWrapper from "../wrappers/PageTransitionWrapper";
import SVGBackground from "../components/SVGBackground";
import { Link } from "react-router-dom";
import WishlistCard from "../components/WishlistCard";

type Props = {};

const WishlistPage = (props: Props) => {
	const [wishlist, setWishlist] = useState(false);

	return (
		<PageTransitionWrapper
			className={`content-wrapper relative grid place-content-center ${
				wishlist === false ? "h-full grid-cols-1 grid-rows-1" : ""
			}`}
		>
			{wishlist && (
				<>
					<div className="z-10 h-full w-full rounded-xl border-2 border-neutral-300 bg-white p-12">
						<h3 className="flex h-full flex-grow flex-col text-3xl font-bold text-neutral-800">
							Your wishlist is empty.
						</h3>
						<p className="bg-white text-center text-xl font-semibold text-neutral-700">
							Go back to{" "}
							<Link
								to="/"
								className="underline decoration-text decoration-2 underline-offset-4 transition-colors hover:text-text"
							>
								Store
							</Link>
						</p>
					</div>
					<SVGBackground />
				</>
			)}
			{!wishlist && (
				<div className="flex h-full min-h-full w-full min-w-full flex-wrap items-center justify-evenly gap-8 bg-white p-10">
					<WishlistCard />
					<WishlistCard />
					<WishlistCard />
					<WishlistCard />
					<WishlistCard />
					<WishlistCard />
					<WishlistCard />
					<WishlistCard />
					<WishlistCard />
					<WishlistCard />
					<WishlistCard />
					<WishlistCard />
				</div>
			)}
		</PageTransitionWrapper>
	);
};

export default WishlistPage;
