import React, { useEffect, useState } from "react";
import PageTransitionWrapper from "../wrappers/PageTransitionWrapper";
import SummaryCard from "../components/SummaryCard";
import PaymentPriceCard from "../components/PaymentPriceCard";
import { Link } from "react-router-dom";
import SVGBackground from "../components/SVGBackground";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { item, product } from "../typeModels/models";
import {
    collection,
    doc,
    documentId,
    getDocs,
    query,
    where,
} from "firebase/firestore";
import { fireDB } from "../Firebase";
import EmptyCartSection from "../sections/EmptyCartSection";

interface products extends product {
    id: string;
}

type Props = {};

const CartPage = (props: Props) => {
    const cartItems = useAppSelector((state) => state.cart.cartItems);
    const cartTotal = useAppSelector((state) => state.cart.cartTotalPrice);
    const [products, setProducts] = useState<products[]>([]);
    const [firstLoad, setFirstLoad] = useState(false);
    const dispatch = useAppDispatch();

    const getWishlistData = async () => {
        const tempCartItems = { ...cartItems };
        try {
            const q = query(
                collection(fireDB, "products"),
                where(documentId(), "in", Object.keys(tempCartItems))
            );
            const productSnaps = await getDocs(q);

            productSnaps.forEach((doc) => {
                console.log(doc.data());
                setProducts((prev) => {
                    const temp = { ...doc.data() };
                    const data: products = {
                        id: doc.id,
                        imgLink: temp.images,
                        name: temp.name,
                        price: temp.price,
                        type: temp.type,
                    };
                    prev.push(data);
                    return prev;
                });
            });
        } catch (e) {
            console.log(e);
        } finally {
            setFirstLoad(true);
        }
    };

    useEffect(() => {
        if (!firstLoad && Object.keys(cartItems).length > 0) {
            console.log("fetching data");
            getWishlistData();
        }
    }, [cartItems]);

    return (
        <PageTransitionWrapper className="content-wrapper flex h-full items-stretch justify-center">
            {Object.keys(cartItems).length === 0 ? (
                <EmptyCartSection />
            ) : (
                <div className="container m-4 flex max-w-7xl flex-col items-stretch justify-center gap-8 overflow-hidden border-t-2 pt-8 md:m-8 md:max-h-[80vh] md:flex-row">
                    <div className="container flex h-full max-h-[60vh] w-full flex-col gap-4 overflow-y-auto rounded border-2 border-bg-dark p-4 md:max-h-max md:w-2/3">
                        <h2 className=" w-min whitespace-nowrap font-highlight text-3xl font-bold text-neutral-800 underline">
                            Products Details
                        </h2>
                        {products.map((product) => {
                            return (
                                <>
                                    <SummaryCard
                                        key={product.id}
                                        id={product.id}
                                        size={cartItems[product.id]}
                                        imgLink={product.imgLink}
                                        name={product.name}
                                        price={product.price}
                                        type={product.type}
                                        setProducts={setProducts}
                                    />
                                </>
                            );
                        })}
                    </div>
                    <div className="container flex h-full flex-grow flex-col justify-between rounded border-2 border-bg-dark p-2 px-0 md:w-1/3">
                        <div className="flex h-full flex-col">
                            <h2 className="mx-6 w-min whitespace-nowrap font-highlight text-3xl font-bold text-neutral-800 underline">
                                Payment Details
                            </h2>
                            <PaymentPriceCard
                                name="Cart Total"
                                price={cartTotal}
                            />
                            <PaymentPriceCard name="Discount" price={0} />
                            <PaymentPriceCard
                                name="GST"
                                price={Math.round((cartTotal * 18) / 100)}
                            />
                            <PaymentPriceCard
                                name="Shipping Charges"
                                price={50}
                            />
                        </div>
                        <div className="mb-4 flex min-w-min items-center justify-between border-t-2 p-2 px-6 font-semibold text-neutral-700">
                            <p className="mr-2 whitespace-nowrap font-semibold subpixel-antialiased">
                                Total
                            </p>
                            <p className="whitespace-nowrap font-price">
                                &#8377;{" "}
                                {Math.round((cartTotal * 18) / 100) + cartTotal}
                            </p>
                        </div>
                        <div className="px-2">
                            <button className="filter-btn btn-click bg-sky-600 hover:bg-sky-500">
                                Place Order
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </PageTransitionWrapper>
    );
};

export default CartPage;
