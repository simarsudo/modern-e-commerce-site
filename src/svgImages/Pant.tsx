import React from "react";

type Props = {
	className?: string;
	pantBg: string;
	pantHighlight: string;
};

const Pant = (props: Props) => {
	return (
		<div className={props.className}>
			<svg
				viewBox="0 0 32 58"
				fill={props.pantBg}
				xmlns="http://www.w3.org/2000/svg"
			>
				<g id="pant" filter="url(#filter0_d_5_78)">
					<path
						id="pantMain"
						d="M12.2287 3.99451C9.40767 3.90159 5.01909 3.5 5.01909 3.5C5.01909 3.5 4.97614 11.0349 5.01909 15.8626C5.13079 28.4207 6.04903 48.0055 6.04903 48.0055L11.1988 48.5C11.1988 48.5 13.2413 36.7678 14.2886 29.2143C14.957 24.3943 15.8336 16.8516 15.8336 16.8516C15.8336 16.8516 17.4913 24.3702 18.4084 29.2143C19.8278 36.7115 21.4983 48.5 21.4983 48.5L26.648 48.0055C26.648 48.0055 26.9417 28.3927 26.133 15.8626C25.8211 11.0286 25.1031 3.5 25.1031 3.5C25.1031 3.5 21.3428 3.89417 18.9234 3.99451C16.3114 4.10283 14.8416 4.08057 12.2287 3.99451Z"
						stroke="black"
					/>
					<path
						id="pantWaist"
						d="M11.5325 4C8.97615 3.89233 5 3.5 5 3.5V1C5 1 8.97615 1.39233 11.5325 1.5C14.6695 1.63212 16.4372 1.6675 19.5725 1.5C21.7369 1.38437 25.1 1 25.1 1V3.5C25.1 3.5 21.7369 3.88437 19.5725 4C16.4372 4.1675 14.6695 4.13212 11.5325 4Z"
						stroke="black"
						fill={props.pantHighlight}
					/>
				</g>
				<defs>
					<filter
						id="filter0_d_5_78"
						x="0.5"
						y="0.439606"
						width="30.7"
						height="56.6038"
						filterUnits="userSpaceOnUse"
						colorInterpolationFilters="sRGB"
					>
						<feFlood floodOpacity="0" result="BackgroundImageFix" />
						<feColorMatrix
							in="SourceAlpha"
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>
						<feOffset dy="4" />
						<feGaussianBlur stdDeviation="2" />
						<feComposite in2="hardAlpha" operator="out" />
						<feColorMatrix
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
						/>
						<feBlend
							mode="normal"
							in2="BackgroundImageFix"
							result="effect1_dropShadow_5_78"
						/>
						<feBlend
							mode="normal"
							in="SourceGraphic"
							in2="effect1_dropShadow_5_78"
							result="shape"
						/>
					</filter>
				</defs>
			</svg>
		</div>
	);
};

export default Pant;
