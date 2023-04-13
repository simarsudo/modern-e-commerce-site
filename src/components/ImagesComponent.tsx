import React, { useState } from "react";

type Props = {
	imgs: string[];
};

const ImagesComponent = (props: Props) => {
	const [currentImg, setCurrentImg] = useState(props.imgs[0]);

	return (
		<div className="flex min-h-full w-full flex-col-reverse gap-4 overflow-hidden py-4 md:h-[88vh] md:flex-row">
			<div
				className={`w-full shrink-0 overflow-hidden overflow-x-auto transition-all md:w-auto md:overflow-y-auto`}
			>
				<div className="flex w-full gap-1 overflow-x-auto md:flex-col md:overflow-y-auto">
					{props.imgs.map((imgLink, key) => {
						return (
							<div
								key={key}
								className="min-w-[5rem] max-w-[5rem] hover:cursor-pointer md:w-36 lg:min-w-full lg:max-w-max"
								onClick={() => {
									setCurrentImg(imgLink);
								}}
							>
								<img src={imgLink} alt="product image" />
							</div>
						);
					})}
				</div>
			</div>
			<div className="flex w-full shrink-0">
				<img src={currentImg} className="" alt="" />
			</div>
		</div>
	);
};

export default ImagesComponent;
