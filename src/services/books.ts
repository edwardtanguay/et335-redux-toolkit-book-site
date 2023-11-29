import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IBook } from "../interfaces";

const booksUrl = "https://edwardtanguay.vercel.app/share/books.json";

export const getBooks = createAsyncThunk("cart/getBooks", (thunkAPI) => {
	return new Promise((resolve) => {
		(async () => {
			const response = await axios.get(booksUrl);
			const _books: IBook[] = response.data;
			resolve(_books);
		})();
	});
});
