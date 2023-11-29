export interface IBook {
	id: number;
	idcode: string;
	title: string;
}

export interface ICart {
	language: string;
	title: string;
	items: IBook[]
}

export const nullCart = {
	language: '',
	title: '',
	items: []
}