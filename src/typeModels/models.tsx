export type product = {
	id: string;
	name: string;
	type: string;
	price: number;
	imgLink: string;
};

export type productAPI = {
	id: string;
	title: string;
	category: string;
	price: number;
	thumbnail: string;
};

export type item = {
	name: string;
	price: number;
	type: string;
	images: string[];
};

export type products = product[];
