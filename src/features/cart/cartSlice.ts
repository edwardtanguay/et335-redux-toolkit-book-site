import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IBook } from "../../interfaces";
import axios from "axios";

interface IState {
	count: number;
	numberOfActions: number;
	books: IBook[];
	status: "loading" | "completed" | "error"
}

const initialState: IState = {
	count: 0,
	numberOfActions: 0,
	books: [],
	status: 'loading'
}

const booksUrl = "https://edwardtanguay.vercel.app/share/books.json";

export const getBooks = createAsyncThunk("cart/getBooks", async () => {
	const response = await axios.get(booksUrl);
	return response.data;
});

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		subtract: (state) => {
			state.count--;
			state.numberOfActions++;
		},
		add: (state) => {
			state.count++;
			state.numberOfActions++;
		},
		reset: (state) => {
			state.count = initialState.count;
			state.numberOfActions++;
		}
	},
	extraReducers: (builder) => {
		builder.addCase(getBooks.pending, (state) => {
			state.status = "loading"
		})
			.addCase(getBooks.fulfilled, (state, action) => {
				state.status = "completed";
				state.books = action.payload
		})
	}
});

export const { subtract, add, reset } = cartSlice.actions;
export default cartSlice.reducer;