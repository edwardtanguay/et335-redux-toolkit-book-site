import { createSlice } from "@reduxjs/toolkit";

interface IState {
	count: number;
	numberOfActions: number;
}

const initialState: IState = {
	count: 0,
	numberOfActions: 0

}

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
	}
});

export const { subtract, add, reset } = cartSlice.actions;
export default cartSlice.reducer;