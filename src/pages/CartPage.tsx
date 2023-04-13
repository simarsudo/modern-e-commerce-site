import React from "react";
import PageTransitionWrapper from "../wrappers/PageTransitionWrapper";
import SummaryCard from "../components/SummaryCard";
import PaymentPriceCard from "../components/PaymentPriceCard";

type Props = {};

const CartPage = (props: Props) => {
	return (
		<PageTransitionWrapper className="content-wrapper flex h-full items-stretch justify-center">
			<div className="container m-8 flex max-h-[80vh] max-w-7xl items-stretch justify-center gap-8 overflow-hidden border-t-2 pt-8">
				<div className="container w-2/3 overflow-y-auto border-2 p-4">
					<SummaryCard />
					<SummaryCard />
					<SummaryCard />
					<SummaryCard />
				</div>
				<div className="container flex h-full w-1/3 flex-grow flex-col justify-between rounded border-2 p-2 px-0">
					<div className="flex h-full flex-col">
						<PaymentPriceCard name="Cart Total" price={500} />
						<PaymentPriceCard name="Discount" price={100} />
						<PaymentPriceCard name="GST" price={50} />
						<PaymentPriceCard name="Shipping Charges" price={50} />
					</div>
					<div className="mb-4 flex items-center justify-between border-t-2 p-2 px-6 font-bold text-neutral-700">
						<p className="font-semibold subpixel-antialiased">
							Total (Including Taxes)
						</p>
						<p className="font-price">&#8377; 700/-</p>
					</div>
					<div className="px-2">
						<button className="filter-btn bg-sky-600 hover:-translate-y-1 hover:bg-sky-500 active:translate-y-1">
							Place Order
						</button>
					</div>
				</div>
			</div>
		</PageTransitionWrapper>
	);
};

export default CartPage;
