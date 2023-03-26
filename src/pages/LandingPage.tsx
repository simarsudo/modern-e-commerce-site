import React from "react";
import ShoesSection from "../components/sections/ShoesSection";

type Props = {};

const LandingPage = (props: Props) => {
	return (
		<div className="content-wrapper relative flex h-full flex-col gap-4 overflow-hidden">
			<div className="flex flex-col gap-4 p-6 md:p-8">
				<ShoesSection />
			</div>
		</div>
	);
};

export default LandingPage;
