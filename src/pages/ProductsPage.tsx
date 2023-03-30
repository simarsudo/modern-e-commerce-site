import React from "react";
import Filters from "../components/Filters";
import Products from "../wrappers/ProductsWrapper";
import Footer from "../components/Footer";

type Props = {
	isMobileFilterOn: boolean;
};

const ProductsPage = (props: Props) => {
	return (
		<div className="relative">
			<div className="content-wrapper relative flex h-full flex-col gap-4 border-t md:flex-row md:p-2 2xl:p-4">
				<Filters isMobileFilterOn={props.isMobileFilterOn} />
				<Products />
			</div>
			<Footer />
		</div>
	);
};

export default ProductsPage;
