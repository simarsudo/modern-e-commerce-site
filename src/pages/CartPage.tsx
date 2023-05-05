import React, { useState } from "react";
import PageTransitionWrapper from "../wrappers/PageTransitionWrapper";
import SummaryCard from "../components/SummaryCard";
import PaymentPriceCard from "../components/PaymentPriceCard";
import { Link } from "react-router-dom";
import SVGBackground from "../components/SVGBackground";
import { useAppSelector } from "../store/hooks";
import { item, product } from "../typeModels/models";
import { doc } from "firebase/firestore";
import { fireDB } from "../Firebase";

type Props = {};

const CartPage = (props: Props) => {
    const cartItems = useAppSelector((state) => state.cart.cartItems);

    return (
        <PageTransitionWrapper className="content-wrapper flex h-full items-stretch justify-center">
            {cartItems.length === 0 ? (
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
                <div className="container m-4 flex max-w-7xl flex-col items-stretch justify-center gap-8 overflow-hidden border-t-2 pt-8 md:m-8 md:max-h-[80vh] md:flex-row">
                    <div className="container flex h-full max-h-[60vh] w-full flex-col gap-4 overflow-y-auto rounded border-2 border-bg-dark p-4 md:max-h-max md:w-2/3">
                        <h2 className=" w-min whitespace-nowrap font-highlight text-3xl font-bold text-neutral-800 underline">
                            Products Details
                        </h2>
                        {cartItems.map((cartItem) => {
                            return <SummaryCard key={cartItem} id={cartItem} />;
                        })}
                    </div>
                    <div className="container flex h-full flex-grow flex-col justify-between rounded border-2 border-bg-dark p-2 px-0 md:w-1/3">
                        <div className="flex h-full flex-col">
                            <h2 className="mx-6 w-min whitespace-nowrap font-highlight text-3xl font-bold text-neutral-800 underline">
                                Payment Details
                            </h2>
                            <PaymentPriceCard name="Cart Total" price={500} />
                            <PaymentPriceCard name="Discount" price={100} />
                            <PaymentPriceCard name="GST" price={50} />
                            <PaymentPriceCard
                                name="Shipping Charges"
                                price={50}
                            />
                        </div>
                        <div className="mb-4 flex min-w-min items-center justify-between border-t-2 p-2 px-6 font-semibold text-neutral-700">
                            <p className="mr-2 whitespace-nowrap font-semibold subpixel-antialiased">
                                Total
                            </p>
                            <p className="whitespace-nowrap font-price">
                                &#8377; 700/-
                            </p>
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
