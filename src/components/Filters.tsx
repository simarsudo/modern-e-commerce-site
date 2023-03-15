import React from "react";

type Props = {};

const Filters = (props: Props) => {
	return (
		<div
			className={`absolute top-0 right-full h-4/5 w-1/5 border border-b-0 border-l-0 border-gray-300 p-2 font-bold text-gray-500 transition-all md:sticky md:right-0 md:top-14 md:min-h-full 2xl:top-16`}
		>
			<div>
				<h3 className="text-lg text-gray-600">Type</h3>
				<div className="ml-1 mt-1 flex flex-col gap-1">
					<div className="input-wrappers">
						<input type="checkbox" name="Shirt" id="Shirt" />
						<span>Shirt</span>
					</div>
					<div className="input-wrappers">
						<input type="checkbox" name="T-Shirt" id="T-Shirt" />
						<span>T-Shirt</span>
					</div>
					<div className="input-wrappers">
						<input type="checkbox" name="Pants" id="Pants" />
						<span>Pants</span>
					</div>
					<div className="input-wrappers">
						<input type="checkbox" name="Joggers" id="Joggers" />
						<span>Joggers</span>
					</div>
					<div className="input-wrappers">
						<input type="checkbox" name="Jeans" id="Jeans" />
						<span>Jeans</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Filters;
