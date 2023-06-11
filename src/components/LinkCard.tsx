import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Link } from "react-router-dom";

type Props = {
    link: string;
};

const LinkCard = (props: Props) => {
    return (
        <div className="col-span-full flex items-center justify-center lg:col-span-1">
            <Link
                to={`/${props.link}`}
                className="group flex flex-col items-center justify-center transition-all hover:scale-110"
            >
                <ArrowRightCircleIcon className="w-1/2 text-bg-dark transition-all hover:cursor-pointer " />
                <h2 className="border-b-4 border-black text-xl font-semibold transition-all">
                    Check out more styles
                </h2>
            </Link>
        </div>
    );
};

export default LinkCard;
