import React from "react";
import MainCard from "../components/MainCard";
import LinkCard from "../components/LinkCard";

type Props = {};

const ShoesSection = (props: Props) => {
	return (
		<div>
			<h2 className="flex overflow-hidden border-b pb-4 font-highlight text-6xl font-bold uppercase">
				Shoes
			</h2>
			<div className="no-scrollbar flex overflow-x-scroll">
				<ul className="grid w-full grid-cols-1 place-content-around gap-12 pt-4 md:grid-cols-4 md:gap-12">
					<MainCard imgLink="https://api.lorem.space/image/album?w=350&h=500&hash=wmwzi6su" />
					<MainCard imgLink="https://api.lorem.space/image/album?w=350&h=500&hash=kj5bnl3l" />
					<MainCard imgLink="https://api.lorem.space/image/album?w=350&h=500&hash=dnqsm8rf" />
					<MainCard imgLink="https://api.lorem.space/image/album?w=350&h=500&hash=yonbsdxr" />
					<MainCard imgLink="https://api.lorem.space/image/album?w=350&h=500&hash=3kk4tw6g" />
					<LinkCard link="shoes" />
				</ul>
			</div>
		</div>
	);
};

export default ShoesSection;
