import React from "react";

type Props = {
	imgLink: string;
};

const MainCard = (props: Props) => {
	return (
		<li className="card group">
			<a href="#">
				<div className="overflow-hidden rounded-lg">
					<img src={props.imgLink} alt="gg" />
				</div>
				<div className="flex justify-between">
					<p>Name</p>
					<p>Rs 500</p>
				</div>
			</a>
		</li>
	);
};

export default MainCard;
