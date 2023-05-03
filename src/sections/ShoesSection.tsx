import React, { useEffect, useRef, useState } from "react";
import { easeOut, motion, useAnimation, useInView } from "framer-motion";
import MainCard from "../components/MainCard";
import LinkCard from "../components/LinkCard";
import Shoe from "../svgImages/Shoe";
import { item } from "../typeModels/models";
import { collection, getDocs, limit, query, where } from "firebase/firestore";
import { fireDB } from "../Firebase";

type Props = {};

const h2Variant = {
    initial: {},
    animate: {
        transition: {
            delayChildren: 5,
            staggerChildren: 0.1,
            ease: [0.39, 0.575, 0.565, 1],
        },
    },
};

const spanVariant = {
    initial: { translateY: "200%" },
    animate: { translateY: 0, transition: { duration: 0.8, ease: easeOut } },
};

const ShoesSection = (props: Props) => {
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
            const shirtRef = collection(fireDB, "products");
            const q = query(shirtRef, where("type", "==", "shoes"), limit(5));
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

    return (
        <div>
            <motion.h2
                variants={h2Variant}
                initial="initial"
                animate="animate"
                viewport={{ once: true }}
                className="flex overflow-hidden border-b font-highlight text-8xl font-bold uppercase"
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
                    O
                </motion.div>
                <motion.div
                    className="font-highlight font-bold"
                    variants={spanVariant}
                >
                    E
                </motion.div>
                <motion.div
                    className="font-highlight font-bold"
                    variants={spanVariant}
                >
                    S
                </motion.div>
            </motion.h2>
            <div className="no-scrollbar flex overflow-x-scroll pb-8">
                <ul className="grid w-full grid-cols-md gap-4 pt-6 md:gap-10 2xl:grid-cols-lg">
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
                    <LinkCard link="shoes" />
                </ul>
            </div>
        </div>
    );
};

export default ShoesSection;
