import React from "react";

type Props = {};

const Footer = (props: Props) => {
	return (
		<div className="bg-gray-400 px-4 py-2 text-white md:sticky md:p-8">
			<div className="flex h-full justify-around ">
				<div>
					<h1 className="text-xl font-bold text-violet-500 underline decoration-violet-500">
						Shop for
					</h1>
					<div className="pl-2 font-semibold text-neutral-200">
						<h4>Shirt</h4>
						<h4>TShirt</h4>
						<h4>Pants</h4>
						<h4>Joggers</h4>
						<h4>Jeans</h4>
					</div>
				</div>
				<div>
					<h1 className="text-xl font-bold text-violet-500 underline decoration-violet-500">
						Need Help
					</h1>
					<div className="pl-2 font-semibold text-neutral-200">
						<h4>Contact Us</h4>
						<h4>Track Order</h4>
						<h4>Returns & Refunds</h4>
						<h4>FAQs</h4>
					</div>
				</div>
				<div>
					<h1 className="text-xl font-bold text-violet-500 underline decoration-violet-500">
						Company
					</h1>
					<div className="pl-2 font-semibold text-neutral-200">
						<h4>About Us</h4>
						<h4>Careers</h4>
					</div>
				</div>
			</div>
			<p className="pt-4 text-center font-bold">The Souled Store 2023-24</p>
		</div>
	);
};

export default Footer;
