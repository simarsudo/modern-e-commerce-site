import React, { useEffect, useState } from "react";
import PageTransitionWrapper from "../wrappers/PageTransitionWrapper";
import { Link, useLocation, useParams } from "react-router-dom";
import ImagesComponent from "../components/ImagesComponent";
import ShoeSize from "../components/ShoeSize";
import { fireDB } from "../Firebase";
import { doc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { item } from "../typeModels/models";
import { useAppSelector } from "../store/hooks";

type Props = {};

const ProductPage = (props: Props) => {
    const [firstLoad, setFirstLoad] = useState(false);
    const [item, setItem] = useState<item>();
    const [loading, setLoading] = useState(false);
    const currentUser = useAppSelector((state) => state.user);
    const location = useLocation();
    const itemData = location.pathname.split("/");
    const itemType = itemData[1];
    const itemId = itemData[2];

    // Data Fetching from firebase using router link
    useEffect(() => {
        const getItemDetails = async () => {
            const docRef = doc(fireDB, itemType, itemId);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const data = docSnap.data();
                setItem({
                    id: itemId,
                    images: data.images,
                    name: data.name,
                    price: data.price,
                    type: data.type,
                });
                setFirstLoad(true);
            }
        };

        if (!firstLoad) {
            getItemDetails();
        }
    });

    // add to user card or wishlist
    const btnHandlers = async (option: "cart" | "wishlist") => {
        if (!loading) {
            const docRef = doc(fireDB, "users", currentUser.uid);
            try {
                if (option === "wishlist") {
                    await updateDoc(docRef, {
                        wishlist: arrayUnion(itemId),
                    });
                } else if (option === "cart") {
                    await updateDoc(docRef, {
                        cart: arrayUnion(itemId),
                    });
                }
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <PageTransitionWrapper className="content-wrapper">
            <div className="flex w-full flex-col p-4 md:flex-row md:gap-4">
                <div className="w-full lg:w-1/2">
                    {item && <ImagesComponent imgs={item?.images} />}
                </div>
                <div className="flex w-full flex-col gap-4 md:w-1/2 md:pr-4">
                    <div className="border-b-2">
                        <h1 className="my-4 text-4xl font-extrabold uppercase text-neutral-900">
                            Product {`${item?.name}`}
                        </h1>
                        <h4 className="my-4 text-xl capitalize text-neutral-700">
                            {item?.type}
                        </h4>
                        <h4 className="my-4 font-price text-2xl font-bold capitalize text-neutral-700">
                            &#8377; {item?.price}
                        </h4>
                    </div>
                    <div className="flex flex-col gap-6 border-b-2 py-4 pb-8">
                        <ShoeSize />
                        <p className="font-semibold text-neutral-500">
                            Size are based on UK/India
                        </p>
                        {currentUser.isAuthenticated ? (
                            <div className="flex gap-4">
                                <button
                                    onClick={() => btnHandlers("wishlist")}
                                    disabled={loading}
                                    className="filter-btn w-80 bg-sky-600 py-3 text-xl font-semibold hover:bg-sky-500"
                                >
                                    Add to Wishlist
                                </button>
                                <button
                                    onClick={() => btnHandlers("cart")}
                                    disabled={loading}
                                    className="filter-btn w-80 bg-sky-600 py-3 text-xl font-semibold hover:bg-sky-500"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        ) : (
                            <p className="text-xl font-semibold text-neutral-800">
                                <Link
                                    className="text-cyan-600 underline decoration-2"
                                    to="/login"
                                >
                                    Login
                                </Link>{" "}
                                to add item to cart.
                            </p>
                        )}
                    </div>
                    <div className="flex w-full flex-col gap-4 text-justify lg:w-[36rem]">
                        <h3 className="text-2xl font-semibold text-neutral-700 underline decoration-2">
                            Details
                        </h3>
                        <p className="font-semibold text-neutral-600">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Maiores obcaecati cumque ex asperiores
                            reiciendis. Culpa rerum, dolorum aut tenetur quos
                            deserunt fugit, aliquam ex modi, nobis praesentium
                            optio accusantium eaque.
                        </p>
                    </div>
                </div>
            </div>
        </PageTransitionWrapper>
    );
};

export default ProductPage;
