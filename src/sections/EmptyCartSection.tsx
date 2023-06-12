import React from "react";
import SVGBackground from "../components/SVGBackground";
import { Link } from "react-router-dom";

type Props = {};

export default function EmptyCartSection({}: Props) {
    return (
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
    );
}
