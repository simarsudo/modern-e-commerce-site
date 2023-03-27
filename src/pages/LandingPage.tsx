import React from "react";
import { motion } from "framer-motion";
import ShoesSection from "../sections/ShoesSection";
import ShirtsSection from "../sections/ShirtsSection";
import PantsSection from "../sections/PantsSection";

type Props = {};

const LandingPage = (props: Props) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="content-wrapper relative flex h-full flex-col gap-4 overflow-hidden"
		>
			<div className="flex flex-col gap-4 p-6 md:p-8">
				<ShoesSection />
				<ShirtsSection />
				<PantsSection />
			</div>
		</motion.div>
	);
};

export default LandingPage;
