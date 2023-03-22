import React from "react";
import Filters from "../components/Filters";
import Products from "../wrappers/Products";
import Footer from "../components/Footer";

type Props = {
	isMobileFilterOn: boolean;
};

const MainPage = (props: Props) => {
	return (
		<>
			<div>
				<div className="content-wrapper flex h-full flex-col gap-4 border-t text-rose-400 md:flex-row md:p-2 2xl:p-4">
					<Filters isMobileFilterOn={props.isMobileFilterOn} />
					<Products />
				</div>
			</div>
			<Footer />
		</>
	);
};

export default MainPage;
