import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

type Props = {
	children: React.ReactNode;
	hoverStyles: { color: string };
	hoverTimings: { duration: number };
	linkName: string;
	linkTo: string;
};

const NavItem = (props: Props) => {
	return (
		<motion.li whileHover={props.hoverStyles} transition={props.hoverTimings}>
			<NavLink
				to={props.linkTo}
				className="flex flex-nowrap justify-between gap-1 transition-colors "
			>
				{({ isActive }) => (
					<>
						<span
							className={
								isActive
									? "underline decoration-text decoration-2 underline-offset-4"
									: ""
							}
						>
							{props.linkName}
						</span>
						{props.children}
					</>
				)}
			</NavLink>
		</motion.li>
	);
};

export default NavItem;
