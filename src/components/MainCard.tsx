import React, { useEffect, useState } from "react";
import {
    AnimatePresence,
    easeInOut,
    motion,
    useAnimation,
} from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRightIcon, StarIcon } from "@heroicons/react/24/solid";
// import { HeartIcon } from "@heroicons/react/24/outline"
import { HeartIcon } from "@heroicons/react/24/solid";
import { useAppSelector } from "../store/hooks";
import { product } from "../typeModels/models";

type itemType = {
    shirts: string;
    pant: string;
    jeans: string;
    shoes: string;
};

type Props = {
    imgLink: string;
    type: string;
    id: string;
};

const itemType: itemType = {
    shirts: "shirts",
    pant: "pants",
    jeans: "jeans",
    shoes: "shoes",
};

const cardVariant = {
    initial: { translateY: "100%" },
    animate: { translateY: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const MainCard = (props: product) => {
    const wishlistItems = useAppSelector(
        (state) => state.wishlist.wishlistItems
    );

    props.type.toLowerCase();

    return (
        <li className="max-h-min w-full max-w-sm overflow-x-hidden rounded-sm bg-bg-dark text-white shadow-md shadow-neutral-700 transition-all hover:-translate-y-2">
            <Link
                className="relative max-h-min"
                to={`/${itemType[props.type as keyof itemType]}/${props.id}`}
            >
                <div className="relative overflow-hidden">
                    <img
                        src={
                            props.imgLink
                                ? props.imgLink
                                : "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1680943740_3715930.jpg?format=webp&w=300&dpr=2"
                        }
                        alt="gg"
                        className="w-full object-cover"
                    />
                </div>
                <div className="mx-4 flex justify-between border-b border-gray-600 py-2">
                    <p className="one-line font-semibold">{props.name}</p>
                </div>
                {wishlistItems.includes(props.id) && (
                    <Link
                        to="/wishlist"
                        className="h-8 w-8 transition-all hover:scale-125"
                    >
                        <HeartIcon
                            title="In your wishlist"
                            className="h-8 w-8 text-rose-500"
                        />
                    </Link>
                )}
                <div className="mx-4 flex items-center justify-between py-2">
                    <p className="font-price text-lg font-bold md:text-2xl">
                        &#8377; {props.price}
                    </p>
                    <span className="flex">
                        <StarIcon className="h-5 w-5 text-amber-400" />
                        <StarIcon className="h-5 w-5 text-amber-400" />
                        <StarIcon className="h-5 w-5 text-amber-400" />
                        <StarIcon className="h-5 w-5 text-amber-400" />
                    </span>
                </div>
            </Link>
        </li>
    );
};

export default MainCard;
