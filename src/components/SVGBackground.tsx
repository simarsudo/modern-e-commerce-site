import React from "react";
import Shirt from "../svgImages/Shirt";
import Pant from "../svgImages/Pant";
import Shoe from "../svgImages/Shoe";

type Props = {};

const SVGBackground = (props: Props) => {
	return (
		<>
			<Shirt
				className="absolute top-28 left-10 w-28 animate-moveX"
				shirtBG="#A8D8EA"
				shirtHighlight="#FCBAD3"
			/>
			<Shirt
				className="absolute top-1/2 right-72 w-24 animate-moveY"
				shirtBG="#BAD7DF"
				shirtHighlight="#99DDCC"
			/>
			<Shirt
				className="absolute bottom-10 right-10 w-14 animate-moveX"
				shirtBG="white"
				shirtHighlight="green"
			/>
			<Pant
				className="absolute top-28 right-10 w-24 animate-moveY"
				pantBg="#DCD6F7"
				pantHighlight="#424874"
			/>
			<Pant
				className="absolute -bottom-4 left-48 w-24 animate-moveX"
				pantBg="#8785A2"
				pantHighlight="black"
			/>
			<Pant
				className="absolute top-16 left-1/4 w-16 animate-moveY"
				pantBg="white"
				pantHighlight="green"
			/>
			<Shoe
				className="absolute right-96 bottom-10 w-24 animate-moveY"
				shoeBg="white"
				shoeHighlight="navy"
			/>
			<Shoe
				className="absolute left-96 top-1/2 w-24 animate-moveX"
				shoeBg="white"
				shoeHighlight="rebeccapurple"
			/>
			<Shoe
				className="absolute right-96 top-18 w-16 animate-moveY"
				shoeBg="white"
				shoeHighlight="rebeccapurple"
			/>
			<Shoe
				className="absolute left-12 top-2/3 w-14 animate-moveX"
				shoeBg="white"
				shoeHighlight="navy"
			/>
		</>
	);
};

export default SVGBackground;
