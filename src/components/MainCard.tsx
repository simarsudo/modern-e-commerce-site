import React, { useEffect, useState } from "react";
import {
    AnimatePresence,
    easeInOut,
    motion,
    useAnimation,
} from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRightIcon, StarIcon } from "@heroicons/react/24/solid";
import { HeartIcon } from "@heroicons/react/24/outline";

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
    initial: {
        scale: 0,
        opacity: 0,
    },
    animate: {
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2, ease: easeInOut },
    },
    exit: {
        scale: 0,
        opacity: 0,
        transition: { duration: 0.2, ease: easeInOut },
    },
};

const MainCard = (props: Props) => {
    const [xPos, setXpos] = useState(0);
    const [yPos, setYpos] = useState(0);
    const [isVisible, setIsVisible] = useState(0);
    const animationControl = useAnimation();

    props.type.toLowerCase();

    const applyValues = (x: number, y: number) => {
        setXpos(x);
        setYpos(y);
    };

    const handleMouseEvent = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        target?.addEventListener("mousemove", (e) =>
            applyValues(e.pageX, e.pageY)
        );
        setIsVisible(100);
    };

    const mousePositionCleanUp = (e: MouseEvent) => {
        console.log("removed event listeer");
        const target = e.target as HTMLElement;
        target?.removeEventListener("mousemove", (e) =>
            applyValues(e.pageX, e.pageY)
        );
        setIsVisible(0);
    };

    useEffect(() => {
        if (isVisible) {
            animationControl.start("animate");
        }
    }, [isVisible]);

    return (
        <motion.li
            onHoverStart={(e) => handleMouseEvent(e)}
            onHoverEnd={(e) => mousePositionCleanUp(e)}
            className="max-h-min w-full max-w-sm overflow-hidden rounded-xl bg-bg-dark text-white"
        >
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
                <div className="mx-4 flex justify-between border-b border-gray-600 p-2">
                    <p className="one-line font-semibold">Calvin Klen Shirt</p>
                    <span className="flex">
                        <StarIcon className="h-5 w-5 text-amber-400" />
                        <StarIcon className="h-5 w-5 text-amber-400" />
                        <StarIcon className="h-5 w-5 text-amber-400" />
                        <StarIcon className="h-5 w-5 text-amber-400" />
                    </span>
                </div>
                <div className="mx-4 flex items-center justify-between p-2">
                    <p className="text-2xl font-bold">&#8377; 500</p>
                    <div
                        className="h-8 w-8 transition-all hover:scale-125"
                        onClick={(e) => e.preventDefault()}
                    >
                        <HeartIcon className="h-8 w-8 text-rose-500" />
                    </div>
                </div>
            </Link>
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        variants={cardVariant}
                        initial="initial"
                        animate={animationControl}
                        exit="exit"
                        style={{
                            top: yPos,
                            left: xPos,
                        }}
                        className={`w-h-28 absolute z-10 flex h-28 origin-top-left flex-col items-center justify-center gap-1 rounded-full bg-bg-dark p-8 text-xl font-bold text-white outline outline-white`}
                    >
                        <ArrowUpRightIcon className="w-h-12 h-12" />
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.li>
    );
};

export default MainCard;
