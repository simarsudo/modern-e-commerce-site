import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation, easeOut } from "framer-motion";
import MainCard from "../components/MainCard";
import LinkCard from "../components/LinkCard";
import { collection, getDocs, limit, query, where } from "firebase/firestore";
import { item } from "../typeModels/models";
import { fireDB } from "../Firebase";

type Props = {};

const h2Variant = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.1,
            ease: [0.39, 0.575, 0.565, 1],
        },
    },
};

const spanVariant = {
    initial: { translateY: "200%" },
    animate: { translateY: 0, transition: { duration: 0.8, ease: easeOut } },
};

const ShirtsSection = (props: Props) => {
    const [items, setItems] = useState<item[]>([]);
    const [firstShow, setFirstShow] = useState(false);
    const [firstLoad, setFirstLoad] = useState(false);
    const [error, setError] = useState(false);
    const ref = useRef(null);
    const isInView = useInView(ref);
    const animationControl = useAnimation();

    useEffect(() => {
        async function getData() {
            var data: item;
            const shirtRef = collection(fireDB, "shirts");
            const q = query(shirtRef, where("type", "==", "shirt"), limit(5));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                setItems((prevValue) => {
                    var newData = doc.data();
                    data = {
                        id: doc.id,
                        images: newData.images,
                        name: newData.name,
                        price: newData.price,
                        type: newData.type,
                    };
                    return [...prevValue, data];
                });
            });
            return;
        }

        if (!firstLoad) {
            try {
                getData();
            } catch (e) {
                console.log(e);
                setError(true);
            }
            setFirstLoad(true);
        }
    });
    useEffect(() => {
        if (isInView && !firstShow) {
            setFirstShow(true);
            animationControl.start("animate");
        }
    }, [isInView]);

    return (
        <div>
            <motion.h2
                ref={ref}
                variants={h2Variant}
                initial="initial"
                animate={animationControl}
                className="flex overflow-hidden border-b pb-4 text-8xl"
            >
                <motion.div
                    className="font-highlight font-bold"
                    variants={spanVariant}
                >
                    S
                </motion.div>
                <motion.div
                    className="font-highlight font-bold"
                    variants={spanVariant}
                >
                    H
                </motion.div>
                <motion.div
                    className="font-highlight font-bold"
                    variants={spanVariant}
                >
                    I
                </motion.div>
                <motion.div
                    className="font-highlight font-bold"
                    variants={spanVariant}
                >
                    R
                </motion.div>
                <motion.div
                    className="font-highlight font-bold"
                    variants={spanVariant}
                >
                    T
                </motion.div>
                <motion.div
                    className="font-highlight font-bold"
                    variants={spanVariant}
                >
                    S
                </motion.div>
            </motion.h2>
            <div className="no-scrollbar flex overflow-x-scroll pb-8">
                <ul className="grid w-full grid-cols-1 place-content-around gap-12 pt-4 md:grid-cols-4 md:gap-12">
                    {items.map((item) => {
                        return (
                            <MainCard
                                id={item.id}
                                imgLink={item.images[0]}
                                type={item.type}
                                key={item.id}
                            />
                        );
                    })}
                    <LinkCard link="shirts" />
                </ul>
            </div>
        </div>
    );
};

export default ShirtsSection;
