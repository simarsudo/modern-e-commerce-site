import React, { useEffect, useState } from "react";
import {
	AnimatePresence,
	EventInfo,
	easeInOut,
	motion,
	useAnimation,
} from "framer-motion";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

type Props = {
	imgLink: string;
};

const cardVariant = {
	initial: {
		scale: 0,
		opacity: 0,
		// transform: "translateY(-2.5rem), scale(0)",
	},
	animate: {
		scale: 1,
		opacity: 1,
		transition: { duration: 0.2, ease: easeInOut },
	},
	exit: {
		scale: 0,
		opacity: 0,
		transition: { duration: 0.2, ease: easeInOut },
	},
};

const MainCard = (props: Props) => {
	const [xPos, setXpos] = useState(0);
	const [yPos, setYpos] = useState(0);
	const [isVisible, setIsVisible] = useState(0);
	const animationControl = useAnimation();

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

	useEffect(() => {
		if (isVisible) {
			animationControl.start("animate");
		}
	}, [isVisible]);

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
			<AnimatePresence>
				{isVisible && (
					<motion.div
						variants={cardVariant}
						initial="initial"
						animate={animationControl}
						exit="exit"
						style={{
							top: yPos - 30,
							left: xPos,
						}}
						className={`w-h-28 absolute z-10 flex h-28 origin-top-left flex-col items-center justify-center gap-1 rounded-full bg-bg-dark p-8 text-xl font-bold text-white outline outline-white`}
					>
						<ArrowUpRightIcon className="w-h-12 h-12" />
					</motion.div>
				)}
			</AnimatePresence>
		</motion.li>
	);
};

export default MainCard;
