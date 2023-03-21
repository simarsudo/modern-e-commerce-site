import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import { product, productAPI, products } from "../typeModels/models";
import { randomProducts } from "../RandomData";

const Products = () => {
	const [data, setData] = useState<products>([]);
	const types = ["T-Shirt", "Shirt", "Jeans", "Pants", "Joggers"];

	// useEffect(() => {
	// 	if (data.length === 0) {
	// 		fetch("https://dummyjson.com/products").then((res) =>
	// 			res.json().then((allData) => {
	// 				console.log(allData);
	// 				allData.products.forEach((newData: productAPI) => {
	// 					setData((prevData) => {
	// 						const data = [...prevData];
	// 						const productData: product = {
	// 							id: newData.id,
	// 							name: newData.title,
	// 							type: newData.category,
	// 							price: newData.price,
	// 							imgLink: newData.thumbnail,
	// 						};
	// 						data.push(productData);
	// 						return data;
	// 					});
	// 				});
	// 			})
	// 		);
	// 	}
	// }, []);

	return (
		<div className="grid w-full grid-cols-2 gap-6 border-y border-gray-300 py-2 px-4 font-bold text-white md:grid-cols-3 lg:grid-cols-4">
			{randomProducts.map((productData) => {
				return (
					<Product
						key={productData.id}
						productImgLink={productData.thumbnail}
						productName={productData.title}
						productPrice={productData.price}
						productType={productData.category}
					/>
				);
			})}
		</div>
	);
};

export default Products;
