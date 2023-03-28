import React, { useState } from "react";
import { EventInfo, motion } from "framer-motion";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

type Props = {
	imgLink: string;
};

const MainCard = (props: Props) => {
	const [xPos, setXpos] = useState(0);
	const [yPos, setYpos] = useState(0);
	const [isVisible, setIsVisible] = useState(0);

	const applyValues = (x: number, y: number) => {
		setXpos(x);
		setYpos(y);
	};

	const handleMouseEvent = (e: MouseEvent, info: EventInfo) => {
		const target = e.target as HTMLElement;
		target?.addEventListener("mousemove", (e) => applyValues(e.pageX, e.pageY));
		setIsVisible(100);
	};

	const mousePositionCleanUp = (e: MouseEvent, info: EventInfo) => {
		console.log("removed event listeer");
		const target = e.target as HTMLElement;
		target?.removeEventListener("mousemove", (e) =>
			applyValues(e.pageX, e.pageY)
		);
		setIsVisible(0);
	};

	return (
		<motion.li
			onHoverStart={(e, info) => handleMouseEvent(e, info)}
			onHoverEnd={(e, info) => mousePositionCleanUp(e, info)}
			className="card group"
		>
			<a href="#">
				<div className="relative overflow-hidden rounded-lg">
					<img src={props.imgLink} alt="gg" />
				</div>
				<div className="flex justify-between">
					<p>Name</p>
					<p>Rs 500</p>
				</div>
			</a>
			<div
				style={{
					top: yPos,
					left: xPos,
					scale: `${isVisible}%`,
					opacity: isVisible,
				}}
				className={`w-h-28 absolute z-10 flex h-28 origin-top-left -translate-y-10 flex-col items-center justify-center gap-1 rounded-full bg-bg-dark p-8 text-xl font-bold text-white outline outline-white transition-[scale] transition-opacity duration-300 ease-in-out`}
			>
				{/* <h3>Open</h3> */}
				<ArrowUpRightIcon className="w-h-12 h-12" />
			</div>
		</motion.li>
	);
};

export default MainCard;
