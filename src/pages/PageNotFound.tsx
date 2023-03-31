import React from "react";
import PageTransitionWrapper from "../wrappers/PageTransitionWrapper";

type Props = {};

const PageNotFound = (props: Props) => {
	return (
		<PageTransitionWrapper className="flex h-screen items-center justify-center">
			PageNotFound
		</PageTransitionWrapper>
	);
};

export default PageNotFound;
