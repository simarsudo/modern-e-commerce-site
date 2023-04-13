import React, { useState } from "react";
import PageTransitionWrapper from "../wrappers/PageTransitionWrapper";
import SummaryCard from "../components/SummaryCard";
import PaymentPriceCard from "../components/PaymentPriceCard";
import { Link } from "react-router-dom";
import SVGBackground from "../components/SVGBackground";

type Props = {};

const CartPage = (props: Props) => {
	const [cartItems, setCartItems] = useState(false);

	return (
		<PageTransitionWrapper className="content-wrapper flex h-full items-stretch justify-center">
			{cartItems ? (
				<div className="my-auto flex h-min items-center justify-center">
					<div className="z-10 h-full w-full rounded-xl border-2 border-neutral-300 bg-white p-12">
						<h2 className="mx-8 mt-4 flex overflow-hidden border-b pb-4 font-highlight text-7xl font-bold tracking-wide underline">
							Your Cart
						</h2>
						<p className="mt-4 bg-white text-center text-2xl font-semibold text-neutral-700">
							Never mind, go to the{" "}
							<Link
								to="/"
								className="underline decoration-text decoration-2 underline-offset-4 transition-colors hover:text-text"
							>
								Store
							</Link>
						</p>
					</div>
					<SVGBackground />
				</div>
			) : (
				<div className="container m-8 flex max-h-[80vh] max-w-7xl items-stretch justify-center gap-8 overflow-hidden border-t-2 pt-8">
					<div className="container w-2/3 overflow-y-auto rounded border-2 border-bg-dark p-4">
						<SummaryCard />
						<SummaryCard />
						<SummaryCard />
						<SummaryCard />
					</div>
					<div className="container flex h-full w-1/3 flex-grow flex-col justify-between rounded border-2 border-bg-dark p-2 px-0">
						<div className="flex h-full flex-col">
							<PaymentPriceCard name="Cart Total" price={500} />
							<PaymentPriceCard name="Discount" price={100} />
							<PaymentPriceCard name="GST" price={50} />
							<PaymentPriceCard name="Shipping Charges" price={50} />
						</div>
						<div className="mb-4 flex items-center justify-between border-t-2 p-2 px-6 font-semibold text-neutral-700">
							<p className="font-semibold subpixel-antialiased">
								Total (Including Taxes)
							</p>
							<p className="font-price">&#8377; 700/-</p>
						</div>
						<div className="px-2">
							<button className="filter-btn btn-click bg-sky-600 hover:bg-sky-500">
								Place Order
							</button>
						</div>
					</div>
				</div>
			)}
		</PageTransitionWrapper>
	);
};

export default CartPage;
