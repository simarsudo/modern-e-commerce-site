import React, { Children, ReactNode } from "react";
import PageTransitionWrapper from "./PageTransitionWrapper";
import Shirt from "../svgImages/Shirt";
import Pant from "../svgImages/Pant";
import Shoe from "../svgImages/Shoe";

type Props = {
	children: ReactNode;
};

const BackgroundWrapper = (props: Props) => {
	return (
		<div className="relative h-full w-full">
			<div className="absolute top-32 left-8 w-28 animate-slow-move">
				<Shirt shirtBG="white" shirtHighlight="cyan" />
			</div>
			<div className="absolute top-60 right-12 w-20 animate-[slow-move_15s_1s_linear_infinite_reverse]">
				<Pant pantBg="white" pantHighlight="black" />
			</div>
			<div className="absolute bottom-5 right-2/3 w-24 animate-[slow-move_8s_3s_linear_infinite_reverse]">
				<Shoe shoeBg="white" shoeHighlight="black" />
			</div>
			{props.children}
		</div>
	);
};

export default BackgroundWrapper;
