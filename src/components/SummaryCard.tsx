import {
    arrayUnion,
    doc,
    getDoc,
    runTransaction,
    updateDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { fireDB } from "../Firebase";
import { item, product } from "../typeModels/models";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
    removeFromCart,
    addToTotalPrice,
    reduceFromTotalPrice,
    resetTotalPrice,
} from "../store/cartSlice";
import { addToWishlist } from "../store/wishlistSlice";
import SelectComponent from "./SelectComponent";

type Props = {
    id: string;
    size: string | number;
    name: string;
    type: string;
    price: number;
    imgLink: string;
    setProducts: React.Dispatch<React.SetStateAction<product[]>>;
};

const SummaryCard = (props: Props) => {
    const currentUser = useAppSelector((state) => state.user);
    const userWishlist = useAppSelector(
        (state) => state.wishlist.wishlistItems
    );
    const cartTotalPrice = useAppSelector((state) => state.cart.cartTotalPrice);
    const [totalCalculated, setTotalcalculated] = useState(false);
    const userCart = useAppSelector((state) => state.cart.cartItems);
    const dispatch = useAppDispatch();
    const [loadingDelete, setLoadingDelete] = useState(false);
    const [movingToWishlist, setMovingToWishlist] = useState(false);

    const deleteHandler = async () => {
        const q = doc(fireDB, "users", currentUser.uid);
        setLoadingDelete(true);
        let temp = { ...userCart };
        delete temp[props.id];
        console.log(temp);
        try {
            await updateDoc(q, {
                cart: { ...temp },
            });
            console.log("deleting data");
        } catch (e) {
            console.log(e);
        } finally {
            dispatch(removeFromCart(props.id));
            setLoadingDelete(false);
            dispatch(resetTotalPrice());
        }
    };

    const moveToWishlist = async () => {
        const qRef = doc(fireDB, "users", currentUser.uid);
        setMovingToWishlist(true);
        let tempUserCart = { ...userCart };

        delete tempUserCart[props.id];
        try {
            await runTransaction(fireDB, async (transaction) => {
                const qDoc = await transaction.get(qRef);
                if (!qDoc.exists()) {
                    throw "Document not Exist";
                }
                // console.log(qDoc.data());
                transaction.update(qRef, {
                    wishlist: arrayUnion(props.id),
                });
                transaction.update(qRef, {
                    cart: { ...tempUserCart },
                });
            });
        } catch (e) {
            console.log(e);
        } finally {
            setMovingToWishlist(false);
            props.setProducts((prev) => {
                let index = 0;
                prev.forEach((product) => {
                    if (product.id === props.id) {
                        prev.splice(index, 1);
                    } else {
                        index++;
                    }
                });
                return prev;
            });
            dispatch(addToWishlist(props.id));
            dispatch(removeFromCart(props.id));
        }
    };

    return (
        <div className="grid h-60 max-h-min grid-cols-summaryCard grid-rows-summaryCard gap-1 border-b-2 pb-2">
            <div className="col-start-1 col-end-5 row-span-full mr-1 h-full w-auto object-cover">
                <img
                    className="h-full w-auto object-cover"
                    src={props.imgLink}
                    alt="summary img"
                />
            </div>
            <div className="col-start-5 col-end-13 row-start-1 row-end-3 flex h-min flex-wrap justify-between">
                <h4 className="mr-1 mb-1 h-min min-w-min whitespace-nowrap text-xl font-bold text-neutral-800">
                    {props.name}
                </h4>
                <h4 className="h-min whitespace-nowrap font-price text-lg font-semibold text-neutral-700">
                    &#8377; {props.price}
                </h4>
            </div>
            <div className="col-start-5 col-end-12 row-start-3 row-end-4 mb-2 flex gap-4">
                <div className="flex h-10 w-24 items-center justify-center rounded border border-neutral-400 px-2">
                    Size: {props.size}
                </div>
                <SelectComponent
                    defaultValue={1}
                    name="others"
                    className="mr-1 h-10 w-min bg-white shadow-none hover:cursor-pointer focus:border-bg-dark focus:shadow-none"
                    options={[
                        { label: "1", value: "1" },
                        { label: "2", value: "2" },
                        { label: "3", value: "3" },
                        { label: "4", value: "4" },
                        { label: "5", value: "5" },
                    ]}
                />
            </div>
            <div className="col-start-5 col-end-13 row-start-4 row-end-6 flex flex-wrap items-end">
                <button
                    disabled={loadingDelete}
                    onClick={deleteHandler}
                    className="filter-btn btn-click mx-1 h-min max-w-min rounded bg-rose-600 text-base font-semibold hover:bg-rose-500 "
                >
                    Remove
                </button>
                <button
                    onClick={moveToWishlist}
                    disabled={movingToWishlist}
                    className="filter-btn btn-click mx-1 h-min max-w-min whitespace-nowrap rounded bg-sky-600 text-base font-semibold hover:bg-sky-500 disabled:bg-rose-500"
                >
                    Move to Wishlist
                </button>
            </div>
        </div>
    );
};

export default SummaryCard;
