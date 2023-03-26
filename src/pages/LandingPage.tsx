import React from "react";
import { motion } from "framer-motion";
import MainCard from "../components/MainCard";

type Props = {};

const LandingPage = (props: Props) => {
	function drag() {
		console.log("bruh");
	}

	return (
		<div className="content-wrapper relative flex h-full flex-col gap-4 overflow-hidden">
			<div className="flex flex-col gap-4 p-6 md:p-8">
				<h2 className="border-b pb-4 text-5xl">Shoes</h2>
				<div className="no-scrollbar flex overflow-x-scroll">
					<ul className="grid w-full grid-cols-1 place-content-around gap-12 pt-4 md:grid-cols-4 md:gap-12">
						<MainCard imgLink="https://api.lorem.space/image/album?w=350&h=500&hash=wmwzi6su" />
						<MainCard imgLink="https://api.lorem.space/image/album?w=350&h=500&hash=kj5bnl3l" />
						<MainCard imgLink="https://api.lorem.space/image/album?w=350&h=500&hash=dnqsm8rf" />
						<MainCard imgLink="https://api.lorem.space/image/album?w=350&h=500&hash=yonbsdxr" />
						<MainCard imgLink="https://api.lorem.space/image/album?w=350&h=500&hash=3kk4tw6g" />
					</ul>
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
