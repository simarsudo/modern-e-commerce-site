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

type Props = {
    setJeansLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

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
            props.setJeansLoading(true);
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
            props.setJeansLoading(false);
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
            <h1 className="m-2 text-center font-price text-4xl font-bold italic text-bg-dark underline decoration-2 underline-offset-4">
                Jeans
            </h1>
            <div className="no-scrollbar flex overflow-x-scroll">
                <ul className="grid w-full grid-cols-2 gap-x-4 gap-y-8 py-4 md:grid-cols-lg md:gap-x-10 md:gap-y-12">
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
