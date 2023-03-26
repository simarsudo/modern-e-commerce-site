import React from "react";
import ShoesSection from "../sections/ShoesSection";
import ShirtsSection from "../sections/ShirtsSection";

type Props = {};

const LandingPage = (props: Props) => {
	return (
		<div className="content-wrapper relative flex h-full flex-col gap-4 overflow-hidden">
			<div className="flex flex-col gap-4 p-6 md:p-8">
				<ShoesSection />
				<ShirtsSection />
			</div>
		</div>
	);
};

export default LandingPage;
