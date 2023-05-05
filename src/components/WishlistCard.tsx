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

type Props = {
    id: string;
};

const WishlistCard = (props: Props) => {
    const [productDetails, setProductDetails] = useState<product>({
        name: "default",
        id: "default",
        imgLink: "default",
        price: 100,
        type: "idk",
    });
    const currentUser = useAppSelector((state) => state.user);
    const dispatch = useAppDispatch();
    const [loadingDelete, setLoadingDelete] = useState(false);
    const [movingToCart, setMovingToCart] = useState(false);

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

    const moveToCart = async () => {
        const qRef = doc(fireDB, "users", currentUser.uid);
        try {
            await runTransaction(fireDB, async (transaction) => {
                const qDoc = await transaction.get(qRef);
                if (!qDoc.exists()) {
                    throw "Document not Exist";
                }
                // console.log(qDoc.data());
                transaction.update(qRef, {
                    wishlist: arrayRemove(props.id),
                });
                transaction.update(qRef, {
                    cart: arrayUnion(props.id),
                });
                dispatch(removeFromWishlist(props.id));
                dispatch(addToCart(props.id));
                console.log();
            });
        } catch (e) {
            console.log(e);
        } finally {
            setMovingToCart(false);
        }
    };

    const fetchProductDetails = async () => {
        const docRef = doc(fireDB, "products", props.id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            const data = docSnap.data() as item;
            setProductDetails({
                id: props.id,
                imgLink: data.images[0],
                name: data.name,
                price: data.price,
                type: data.type,
            });
        } else {
            console.log("iuuuuffff");
        }
    };

    useEffect(() => {
        if (currentUser.isAuthenticated) {
            fetchProductDetails();
        }
    }, [currentUser]);

    return (
        <div className="col-span-1 overflow-hidden rounded-xl bg-bg-dark text-white shadow-lg">
            <div className="overflow-hidden">
                <img
                    className="object-cover"
                    src={productDetails.imgLink}
                    alt=""
                />
            </div>
            <div className="flex flex-col justify-evenly gap-2 p-2">
                <div className="flex items-center justify-between font-bold">
                    <h3 className="one-line w-2/3 overflow-hidden text-ellipsis px-1 text-lg font-bold">
                        {productDetails.name}
                    </h3>
                    <h4 className="w-1/3 min-w-min text-ellipsis whitespace-nowrap px-1 text-end text-base font-light capitalize">
                        {productDetails.type}
                    </h4>
                </div>
                <div className="flex items-center gap-2">
                    <button
                        title="Move to cart"
                        disabled={movingToCart}
                        onClick={moveToCart}
                        className="filter-btn flex items-center justify-center rounded-md bg-teal-500 hover:-translate-y-1 hover:bg-teal-400"
                    >
                        <ShoppingCartIcon className="h-5 w-5" />
                    </button>
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
        </div>
    );
};

export default WishlistCard;
