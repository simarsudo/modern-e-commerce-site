import React, { useState } from "react";
import { ShoppingCartIcon, TrashIcon } from "@heroicons/react/24/solid";
import { doc, getDoc } from "firebase/firestore";
import { fireDB } from "../Firebase";
import { product, item } from "../typeModels/models";

type Props = {
    id: string;
};

const WishlistCard = (props: Props) => {
    const [firstFetch, setFirstFetch] = useState(true);
    const [productDetails, setProductDetails] = useState<product>({
        name: "default",
        id: "default",
        imgLink: "default",
        price: 100,
        type: "idk",
    });
    // console.log(props.id);
    const fetchProductDetails = async () => {
        const docRef = doc(fireDB, "products", props.id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            // console.log(docSnap.data());
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
        setFirstFetch(false);
    };

    if (firstFetch) {
        fetchProductDetails();
    }

    return (
        <div className="col-span-1 overflow-hidden rounded-xl bg-bg-dark text-white shadow-lg">
            <div className="overflow-hidden">
                <img
                    className="object-cover"
                    src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1680943740_3715930.jpg?format=webp&w=300&dpr=2"
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
                    <button className="filter-btn flex items-center justify-center rounded-md bg-teal-500 hover:-translate-y-1 hover:bg-teal-400">
                        <ShoppingCartIcon className="h-5 w-5" />
                    </button>
                    <button className="filter-btn flex items-center justify-center rounded-md bg-rose-600 hover:-translate-y-1 hover:bg-rose-500">
                        <TrashIcon className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WishlistCard;
