import React from "react";
import PageTransitionWrapper from "../wrappers/PageTransitionWrapper";
import { useLocation } from "react-router-dom";
import MainCard from "../components/MainCard";

type Props = {};

const pagevariants = {
	exit: { opacity: 0, transition: { delay: 0.5 } },
};

const Products = (props: Props) => {
	const location = useLocation();

	return (
		<PageTransitionWrapper className="content-wrapper relative">
			<h2 className="my-4 h-full w-full px-4 font-highlight text-6xl font-semibold uppercase md:px-10">
				{`${location.pathname}`.replace("/", "")}
			</h2>
			<ul className="grid grid-cols-md justify-items-start gap-8 bg-white p-4 pt-0 md:p-10 md:pt-0 2xl:grid-cols-lg">
				<MainCard
					id="d"
					imgLink="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1680943740_3715930.jpg?format=webp&w=300&dpr=2"
					type="Shirt"
				/>
				<MainCard
					id="d"
					imgLink="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1680943740_3715930.jpg?format=webp&w=300&dpr=2"
					type="Shirt"
				/>
				<MainCard
					id="d"
					imgLink="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1680943740_3715930.jpg?format=webp&w=300&dpr=2"
					type="Shirt"
				/>
				<MainCard
					id="d"
					imgLink="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1680943740_3715930.jpg?format=webp&w=300&dpr=2"
					type="Shirt"
				/>
				<MainCard
					id="d"
					imgLink="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1680943740_3715930.jpg?format=webp&w=300&dpr=2"
					type="Shirt"
				/>
				<MainCard
					id="d"
					imgLink="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1680943740_3715930.jpg?format=webp&w=300&dpr=2"
					type="Shirt"
				/>
			</ul>
		</PageTransitionWrapper>
	);
};

export default Products;
