import React from "react";

type Props = {
	children: JSX.Element;
};

const ContentWrapper: React.FC<Props> = ({ children }) => {
	return <div>{children}</div>;
};

export default ContentWrapper;
