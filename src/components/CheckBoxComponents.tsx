import React from "react";

type Props = {
	reference?: React.RefObject<HTMLInputElement>;
	name: string;
};

const CheckBoxComponents = (props: Props) => {
	return (
		<div className="input-wrappers">
			<input type="checkbox" name={props.name} id={props.name} />
			<span>{props.name}</span>
		</div>
	);
};

export default CheckBoxComponents;
