import React, { useEffect, useState } from "react";
import PageTransitionWrapper from "../wrappers/PageTransitionWrapper";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { item } from "../typeModels/models";
import { fireDB } from "../Firebase";
import { query, limit, collection, getDocs, where } from "firebase/firestore";
import MainCard from "../components/MainCard";
import ErrorComponent from "../components/ErrorComponent";
import Loader from "../components/Loader";

type Props = {};

const pagevariants = {
    exit: { opacity: 0, transition: { delay: 0.5 } },
};

const Products = (props: Props) => {
    const [items, setItems] = useState<item[]>([]);
    const [firstLoad, setFirstLoad] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const location = useLocation();
    const itemData = location.pathname.split("/");
    const itemType = itemData[1];
    const itemId = itemData[2];

    useEffect(() => {
        async function getData(currentPath: string) {
            var data: item;
            setLoading(true);
            const shirtRef = collection(fireDB, "products");
            const q = query(shirtRef, limit(3), where("type", "==", itemType));
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
            setLoading(false);
            return;
        }

        if (!firstLoad) {
            try {
                getData(location.pathname);
            } catch (e) {
                console.log(e);
                setError(true);
            }
            setFirstLoad(true);
        }
    });

    return (
        <PageTransitionWrapper
            className={`content-wrapper relative ${
                error && "flex items-center justify-center"
            }`}
        >
            {loading ? (
                <div className="flex h-[70vh] w-full flex-grow items-center justify-center">
                    <Loader />
                </div>
            ) : !error ? (
                <ul className="grid grid-cols-md justify-items-start gap-8 bg-white p-4 md:p-10 2xl:grid-cols-lg">
                    {items.map((item) => {
                        return (
                            <MainCard
                                key={item.id}
                                type={item.type}
                                id={`${item.id}`}
                                name={item.name}
                                price={item.price}
                                imgLink={item.images[0]}
                            />
                        );
                    })}
                </ul>
            ) : (
                <ErrorComponent />
            )}
        </PageTransitionWrapper>
    );
};

export default Products;
