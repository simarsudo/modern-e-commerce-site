import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import { product, products } from "../typeModels/models";

const Products = () => {
	// const [data, setData] = useState<products>([]);
	const types = ["T-Shirt", "Shirt", "Jeans", "Pants", "Joggers"];

	// useEffect(() => {
	// 	if (data.length === 0) {
	// 		const imgData = fetch(
	// 			"https://picsum.photos/v2/list?page=1&limit=20"
	// 		).then((res) =>
	// 			res.json().then((allData) => {
	// 				console.log(allData);
	// 				allData.forEach((newData: {}) => {
	// 					setData((prevData) => {
	// 						const data = [...prevData];
	// 						const productData: product = {
	// 							id: newData.id,
	// 							name: newData.author,
	// 							type: types[Math.floor(Math.random() * types.length)],
	// 							price: Math.floor(Math.random() * 100) * 10,
	// 							imgLink: newData.download_url,
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
			<Product
				productImgLink={
					"https://api.lorem.space/image/fashion?w=300&h=400&hash=kr6chzx2"
				}
				productName={types[Math.floor(Math.random() * types.length)]}
				productPrice={Math.floor(Math.random() * 100) * 10}
				productType={"Bruh Shirt"}
			/>
			<Product
				productImgLink={
					"https://api.lorem.space/image/fashion?w=300&h=400&hash=a871mg87"
				}
				productName={types[Math.floor(Math.random() * types.length)]}
				productPrice={Math.floor(Math.random() * 100) * 10}
				productType={"Bruh Shirt"}
			/>
			<Product
				productImgLink={
					"https://api.lorem.space/image/fashion?w=300&h=400&hash=sh67ua3b"
				}
				productName={types[Math.floor(Math.random() * types.length)]}
				productPrice={Math.floor(Math.random() * 100) * 10}
				productType={"Bruh Shirt"}
			/>
			<Product
				productImgLink={
					"https://api.lorem.space/image/fashion?w=300&h=400&hash=gw0vbby6"
				}
				productName={types[Math.floor(Math.random() * types.length)]}
				productPrice={Math.floor(Math.random() * 100) * 10}
				productType={"Bruh Shirt"}
			/>
			<Product
				productImgLink={
					"https://api.lorem.space/image/fashion?w=300&h=400&hash=kfnb3c0p"
				}
				productName={types[Math.floor(Math.random() * types.length)]}
				productPrice={Math.floor(Math.random() * 100) * 10}
				productType={"Bruh Shirt"}
			/>
			<Product
				productImgLink={
					"https://api.lorem.space/image/fashion?w=300&h=400&hash=dxtfzkq4"
				}
				productName={types[Math.floor(Math.random() * types.length)]}
				productPrice={Math.floor(Math.random() * 100) * 10}
				productType={"Bruh Shirt"}
			/>
			<Product
				productImgLink={
					"https://api.lorem.space/image/fashion?w=300&h=400&hash=wjvvh4tn"
				}
				productName={types[Math.floor(Math.random() * types.length)]}
				productPrice={Math.floor(Math.random() * 100) * 10}
				productType={"Bruh Shirt"}
			/>
			<Product
				productImgLink={
					"https://api.lorem.space/image/fashion?w=300&h=400&hash=6vp3xf57"
				}
				productName={types[Math.floor(Math.random() * types.length)]}
				productPrice={Math.floor(Math.random() * 100) * 10}
				productType={"Bruh Shirt"}
			/>
			<Product
				productImgLink={
					"https://api.lorem.space/image/fashion?w=300&h=400&hash=n0a91tcu"
				}
				productName={types[Math.floor(Math.random() * types.length)]}
				productPrice={Math.floor(Math.random() * 100) * 10}
				productType={"Bruh Shirt"}
			/>
			<Product
				productImgLink={
					"https://api.lorem.space/image/fashion?w=300&h=400&hash=n7be94t4"
				}
				productName={types[Math.floor(Math.random() * types.length)]}
				productPrice={Math.floor(Math.random() * 100) * 10}
				productType={"Bruh Shirt"}
			/>
		</div>
	);
};

export default Products;
