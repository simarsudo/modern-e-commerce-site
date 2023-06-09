import React, { useEffect, useState } from "react";
import { ShoppingCartIcon, TrashIcon } from "@heroicons/react/24/solid";
import {
    doc,
    getDoc,
    updateDoc,
    arrayRemove,
    arrayUnion,
    runTransaction,
} from "firebase/firestore";
import { fireDB } from "../Firebase";
import { product, item } from "../typeModels/models";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { removeFromWishlist } from "../store/wishlistSlice";
import { addToCart } from "../store/cartSlice";
import { Link } from "react-router-dom";

type Props = {
    id: string;
    name: string;
    type: string;
    price: number;
    imgLink: string;
};

const WishlistCard = (props: Props) => {
    const currentUser = useAppSelector((state) => state.user);
    const dispatch = useAppDispatch();
    const [loadingDelete, setLoadingDelete] = useState(false);

    // delete item from cart
    const deleteHandler = async () => {
        const q = doc(fireDB, "users", currentUser.uid);
        setLoadingDelete(true);
        try {
            await updateDoc(q, {
                wishlist: arrayRemove(props.id),
            });
            dispatch(removeFromWishlist(props.id));
        } catch (e) {
            console.log(e);
        } finally {
            setLoadingDelete(false);
        }
    };

    return (
        <Link
            to={`/${props.type}/${props.id}`}
            className="col-span-1 overflow-hidden rounded-xl bg-bg-dark text-white shadow-lg shadow-neutral-700 transition-transform hover:-translate-y-1"
        >
            <div className="overflow-hidden">
                <img className="object-cover" src={props.imgLink} alt="" />
            </div>
            <div className="flex flex-col justify-evenly gap-2 p-2">
                <div className="flex items-center justify-between font-bold">
                    <h3 className="one-line w-2/3 overflow-hidden text-ellipsis px-1 text-lg font-bold">
                        {props.name}
                    </h3>
                    <h4 className="w-1/3 min-w-min text-ellipsis whitespace-nowrap px-1 text-end text-base font-light capitalize">
                        {props.type}
                    </h4>
                </div>
                <div className="flex items-center gap-2">
                    <button
                        title="Remove from Wishlist"
                        disabled={loadingDelete}
                        onClick={deleteHandler}
                        className="filter-btn flex items-center justify-center rounded-md bg-rose-600 hover:-translate-y-1 hover:bg-rose-500 disabled:bg-text"
                    >
                        <TrashIcon className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </Link>
    );
};

export default WishlistCard;
