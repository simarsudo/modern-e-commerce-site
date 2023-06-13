import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

type Props = {};

const OrderedPlacedSection = (props: Props) => {
    return (
        <div className="content-wrapper flex items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-5 rounded-md border border-neutral-400 p-16">
                <h3 className="text-2xl font-semibold">
                    Thank you for your purchase
                </h3>
                <CheckCircleIcon className="h-24 w-24 text-emerald-500" />
            </div>
        </div>
    );
};

export default OrderedPlacedSection;
