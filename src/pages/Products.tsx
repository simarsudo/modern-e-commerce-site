import React, { useEffect, useState } from "react";
import PageTransitionWrapper from "../wrappers/PageTransitionWrapper";
import { useLocation } from "react-router-dom";
import MainCard from "../components/MainCard";
import { item } from "../typeModels/models";

type Props = {};

const pagevariants = {
	exit: { opacity: 0, transition: { delay: 0.5 } },
};

const Products = (props: Props) => {
	const [items, setItems] = useState<item[]>([]);
	const [firstLoad, setFirstLoad] = useState(false);
	const location = useLocation();

	useEffect(() => {
		async function getData(currentPath: string) {
			var data;
			if (currentPath === "/shirts") {
				const response = await fetch("http://127.0.0.1:8000/items");
				const jsonData: item[] = await response.json();
				setItems(jsonData);
				return;
			}
			return;
		}

		if (!firstLoad) {
			console.log("data fetched");
			getData(location.pathname);
			setFirstLoad(true);
		}
	});

	return (
		<PageTransitionWrapper className="content-wrapper relative">
			{/* <h2 className="my-4 h-full w-full px-4 font-highlight text-6xl font-semibold uppercase md:px-10">
				{`${location.pathname}`.replace("/", "")}
			</h2> */}
			<ul className="grid grid-cols-md justify-items-start gap-8 bg-white p-4 md:p-10 2xl:grid-cols-lg">
				{items.length > 0 ? (
					items.map((item, key) => {
						return (
							<MainCard
								key={key}
								type={item.images[0]}
								id={`${key}`}
								imgLink={item.images[0]}
							/>
						);
					})
				) : (
					<>
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
					</>
				)}{" "}
			</ul>
		</PageTransitionWrapper>
	);
};

export default Products;
