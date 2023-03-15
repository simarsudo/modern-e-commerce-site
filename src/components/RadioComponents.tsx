import React from "react";

type Props = {
	reference?: React.RefObject<HTMLInputElement>;
	name: string;
};

const RadioComponents = (props: Props) => {
	return (
		<div className="input-wrappers">
			<input type="radio" name="sort" id={props.name} />
			<span>{props.name}</span>
		</div>
	);
};

export default RadioComponents;
