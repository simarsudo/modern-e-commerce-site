import React from "react";
import { delay, motion } from "framer-motion";
import PageTransitionWrapper from "../wrappers/PageTransitionWrapper";
import { pageVariants } from "../variants/pageVariants";
import ShoesSection from "../sections/ShoesSection";
import ShirtsSection from "../sections/ShirtsSection";
import PantsSection from "../sections/PantsSection";

type Props = {};

const LandingPage = (props: Props) => {
	return (
		<PageTransitionWrapper className="content-wrapper relative flex h-full flex-col gap-4 overflow-hidden">
			<div className="flex flex-col gap-4 p-6 md:p-8">
				<ShoesSection />
				<ShirtsSection />
				<PantsSection />
			</div>
		</PageTransitionWrapper>
	);
};

export default LandingPage;
