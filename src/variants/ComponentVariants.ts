export const componentVariant = {
	initial: {
		translateX: "50%",
		scale: 0.9,
		opacity: 0,
	},
	animate: {
		translateX: 0,
		scale: 1,
		opacity: 1,
		transition: {
			duration: 0.2,
			ease: "easeInOut",
		},
	},
	exit: {
		translateX: "-50%",
		scale: 0.9,
		opacity: 0,
		transition: {
			duration: 0.2,
			ease: "easeInOut",
		},
	},
};
