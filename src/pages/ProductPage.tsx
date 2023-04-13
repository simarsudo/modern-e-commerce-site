import React from "react";
import PageTransitionWrapper from "../wrappers/PageTransitionWrapper";
import { useParams } from "react-router-dom";
import ImagesComponent from "../components/ImagesComponent";
import ShoeSize from "../components/ShoeSize";

type Props = {};

const ProductPage = (props: Props) => {
	const { id } = useParams();
	const img1 =
		"https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1680943740_3715930.jpg?format=webp&w=480&dpr=1.3";
	const img2 =
		"https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1680943740_1024815.jpg?format=webp&w=480&dpr=1.3";
	const img3 =
		"https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1680943740_7292259.jpg?format=webp&w=480&dpr=1.3";
	const img4 =
		"https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1680943740_1997808.jpg?format=webp&w=480&dpr=1.3";
	const img5 =
		"https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1680943740_6975035.jpg?format=webp&w=480&dpr=1.3";
	const img6 =
		"https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1680943740_8136134.jpg?format=webp&w=480&dpr=1.3";
	const imgs = [img1, img2, img3, img4, img5, img6];

	return (
		<PageTransitionWrapper className="content-wrapper">
			<div className="flex w-full flex-col p-4 md:flex-row md:gap-4">
				<div className="w-full lg:w-1/2">
					<ImagesComponent imgs={imgs} />
				</div>
				<div className="flex w-full flex-col gap-4 md:w-1/2 md:pr-4">
					<div className="border-b-2">
						<h1 className="my-4 text-4xl font-extrabold uppercase text-neutral-900">
							Product {`${id}`}
						</h1>
						<h4 className="my-4 text-xl capitalize text-neutral-700">{id}</h4>
						<h4 className="my-4 font-price text-2xl font-bold capitalize text-neutral-700">
							&#8377; 500
						</h4>
					</div>
					<div className="flex flex-col gap-6 border-b-2 py-4 pb-8">
						<ShoeSize />
						<p className="font-semibold text-neutral-500">
							Size are based on UK/India
						</p>
						<div className="flex gap-4">
							<button className="filter-btn w-80 bg-sky-600 py-3 text-xl font-semibold hover:bg-sky-500">
								Add to Wishlist
							</button>
							<button className="filter-btn w-80 bg-sky-600 py-3 text-xl font-semibold hover:bg-sky-500">
								Add to Cart
							</button>
						</div>
					</div>
					<div className="flex w-full flex-col gap-4 text-justify lg:w-[36rem]">
						<h3 className="text-2xl font-semibold text-neutral-700 underline decoration-2">
							Details
						</h3>
						<p className="font-semibold text-neutral-600">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
							obcaecati cumque ex asperiores reiciendis. Culpa rerum, dolorum
							aut tenetur quos deserunt fugit, aliquam ex modi, nobis
							praesentium optio accusantium eaque.
						</p>
					</div>
				</div>
			</div>
		</PageTransitionWrapper>
	);
};

export default ProductPage;
