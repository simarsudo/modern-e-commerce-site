import React, { useState } from "react";

type Props = {
	imgs: string[];
};

const ImagesComponent = (props: Props) => {
	const [currentImg, setCurrentImg] = useState(props.imgs[0]);

	return (
		<div className="ml-4 flex h-[88vh] gap-4 overflow-hidden py-4">
			<div className={`overflow-hidden overflow-y-auto transition-all`}>
				<div className="flex flex-shrink-0 flex-col gap-1 overflow-y-auto">
					{props.imgs.map((imgLink, key) => {
						console.log(key);
						return (
							<div
								key={key}
								className="w-36 hover:cursor-pointer"
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
			<div className="mr-4 flex justify-end overflow-hidden border-2 border-neutral-400 md:ml-5 lg:ml-10">
				<img className="w-[28rem] object-cover" src={currentImg} alt="" />
			</div>
		</div>
	);
};

export default ImagesComponent;
