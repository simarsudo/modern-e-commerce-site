import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const ErrorComponent = (props: Props) => {
	return (
		<div className="flex flex-col items-center gap-8 border-2 border-x-0 border-neutral-300 py-12 text-6xl font-bold">
			<h1 className="whitespace-nowrap">
				Sorry, there was an <span className="text-rose-500"> error</span> ;-;
			</h1>
			<h2 className="ml-16 text-4xl text-neutral-700">
				Go back to{" "}
				<Link to="/" className="text-cyan-500 underline">
					store
				</Link>
			</h2>
		</div>
	);
};

export default ErrorComponent;
