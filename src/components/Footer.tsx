import React from "react";

type Props = {};

const Footer = (props: Props) => {
    return (
        <div className="bg-bg-dark px-4 py-2 text-white md:sticky md:p-8">
            <h1 className="m-4 my-8 text-center text-4xl font-semibold text-cyan-300 underline decoration-2 underline-offset-8 xl:mb-12 xl:mt-4 xl:text-6xl">
                Over 6 Million Happy Customers
            </h1>
            <div className="flex h-full justify-around md:justify-around lg:justify-around">
                <div>
                    <h1 className="text-xl font-bold">Shop for</h1>
                    <div className="mt-4 flex flex-col gap-4 pl-2 font-price text-sm text-white md:text-base">
                        <h4>Shirt</h4>
                        <h4>TShirt</h4>
                        <h4>Pants</h4>
                        <h4>Joggers</h4>
                        <h4>Jeans</h4>
                    </div>
                </div>
                <div>
                    <h1 className="text-xl font-bold">Need Help</h1>
                    <div className="mt-4 flex flex-col gap-4 pl-2 font-price text-sm text-white md:text-base">
                        <h4>Contact Us</h4>
                        <h4>Track Order</h4>
                        <h4>Returns/Refunds</h4>
                        <h4>FAQs</h4>
                    </div>
                </div>
                <div>
                    <h1 className="text-xl font-bold">Company</h1>
                    <div className="mt-4 flex flex-col gap-4 pl-2 font-price text-sm text-white md:text-base">
                        <h4>About Us</h4>
                        <h4>Careers</h4>
                    </div>
                </div>
            </div>
            <p className="mt-4 pt-2 text-center font-price font-semibold italic">
                The Souled Store 2023-24
            </p>
        </div>
    );
};

export default Footer;
