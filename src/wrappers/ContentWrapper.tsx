import React, { ReactNode } from "react";

type Props = {
	children: ReactNode;
};

const ContentWrapper: React.FC<Props> = ({ children }) => {
	return <div>{children}</div>;
};

export default ContentWrapper;
