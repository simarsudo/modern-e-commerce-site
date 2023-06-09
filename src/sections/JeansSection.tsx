import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation, easeOut } from "framer-motion";
import MainCard from "../components/MainCard";
import LinkCard from "../components/LinkCard";
import {
    collection,
    doc,
    getDocs,
    limit,
    query,
    where,
} from "firebase/firestore";
import { fireDB } from "../Firebase";
import { item } from "../typeModels/models";

type Props = {};

const JeansSection = (props: Props) => {
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
            const q = query(shirtRef, where("type", "==", "jeans"), limit(6));
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
            <div className="no-scrollbar flex overflow-x-scroll">
                <ul className="grid w-full grid-cols-1 place-content-around gap-12 py-4 md:grid-cols-4 md:gap-12">
                    {items.map((item) => {
                        return (
                            <MainCard
                                id={item.id}
                                imgLink={item.images[0]}
                                type={item.type}
                                name={item.name}
                                price={item.price}
                                key={item.id}
                            />
                        );
                    })}
                    <LinkCard link="jeans" />
                </ul>
            </div>
        </div>
    );
};

export default JeansSection;
