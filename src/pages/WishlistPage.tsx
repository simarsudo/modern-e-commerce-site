import React, { useState } from "react";
import PageTransitionWrapper from "../wrappers/PageTransitionWrapper";
import SVGBackground from "../components/SVGBackground";
import { Link } from "react-router-dom";
import WishlistCard from "../components/WishlistCard";
import { useAppSelector } from "../store/hooks";

type Props = {};

const WishlistPage = (props: Props) => {
    const wishlist = useAppSelector((state) => state.wishlist.wishlistItems);
    const currentUser = useAppSelector((state) => state.user);

    return (
        <PageTransitionWrapper
            className={`content-wrapper relative grid place-content-center ${
                wishlist.length === 0 ? "" : "h-full grid-cols-1 grid-rows-1"
            }`}
        >
            {wishlist.length === 0 ? (
                <>
                    <div className="z-10 h-full w-full rounded-xl border-2 border-neutral-300 bg-white p-12">
                        <h2 className="mx-8 mt-4 flex overflow-hidden border-b pb-4 font-highlight text-7xl font-bold tracking-wide">
                            Your Wishlist
                        </h2>
                        {currentUser.isAuthenticated ? (
                            <p className="mt-4 bg-white text-center text-2xl font-semibold text-neutral-700">
                                Well it is empty, go to the{" "}
                                <Link
                                    to="/"
                                    className="underline decoration-text decoration-2 underline-offset-4 transition-colors hover:text-text"
                                >
                                    Store
                                </Link>
                            </p>
                        ) : (
                            <p className="mt-4 bg-white text-center text-2xl font-semibold text-neutral-700">
                                <Link
                                    to="/login"
                                    className="underline decoration-text decoration-2 underline-offset-4 transition-colors hover:text-text"
                                >
                                    login
                                </Link>{" "}
                                to view your wishlist
                            </p>
                        )}
                    </div>
                    <SVGBackground />
                </>
            ) : (
                <div className="grid h-full w-full grid-cols-md content-center items-center justify-evenly gap-8 bg-white p-4 md:p-10 2xl:grid-cols-lg">
                    {wishlist.map((itemId: string) => {
                        return <WishlistCard id={itemId} key={itemId} />;
                    })}
                </div>
            )}
        </PageTransitionWrapper>
    );
};

export default WishlistPage;
