import React from "react";

type Props = {};

const Footer = (props: Props) => {
	return (
		<div className="bg-bg-dark px-4 py-2 text-white md:sticky md:p-8">
			<div className="flex h-full justify-around md:justify-evenly lg:justify-around">
				<div>
					<h1 className="text-xl font-bold text-text underline decoration-text">
						Shop for
					</h1>
					<div className="mt-2 flex flex-col gap-2 pl-2 font-semibold text-white">
						<h4>Shirt</h4>
						<h4>TShirt</h4>
						<h4>Pants</h4>
						<h4>Joggers</h4>
						<h4>Jeans</h4>
					</div>
				</div>
				<div>
					<h1 className="text-xl font-bold text-text underline decoration-text">
						Need Help
					</h1>
					<div className="mt-2 flex flex-col gap-2 pl-2 font-semibold text-white">
						<h4>Contact Us</h4>
						<h4>Track Order</h4>
						<h4>Returns/Refunds</h4>
						<h4>FAQs</h4>
					</div>
				</div>
				<div>
					<h1 className="text-xl font-bold text-text underline decoration-text">
						Company
					</h1>
					<div className="mt-2 flex flex-col gap-2 pl-2 font-semibold text-white">
						<h4>About Us</h4>
						<h4>Careers</h4>
					</div>
				</div>
			</div>
			<p className="pt-2 text-center font-bold tracking-widest text-text">
				The Souled Store 2023-24
			</p>
		</div>
	);
};

export default Footer;
