import React from "react";

type Props = {};

const LandingPage = (props: Props) => {
	return (
		<div className="content-wrapper relative flex h-full flex-col gap-4 border-t md:p-2 2xl:p-4">
			<div className="flex flex-col gap-4 px-2 py-4">
				<h1 className="border-b pb-4 text-6xl">Shoes</h1>
				<div className="flex  hover:cursor-grab">
					<ul className="no-scrollbar flex w-full gap-4 overflow-x-scroll pt-4 md:gap-12">
						<li className="card">item 1</li>
						<li className="card">item 2</li>
						<li className="card">item 3</li>
						<li className="card">item 4</li>
						<li className="card">item 5</li>
						<li className="card">item 3</li>
						<li className="card">item 4</li>
						<li className="card">item 5</li>
						<li className="card">item 4</li>
						<li className="card">item 5</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
