import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { add, subtract, reset } from "../../features/cart/cartSlice";

export const PageWelcome = () => {
	const dispatch = useDispatch();
	const { count, numberOfActions } = useSelector(
		(state: RootState) => state.cart
	);

	return (
		<>
			<div className="flex gap-3 items-center mb-3">
				<button onClick={() => dispatch(subtract())}>Subtract</button>
				<button onClick={() => dispatch(add())}>Add</button>
				<p className="text-xl">count = {count}</p>
			</div>
			<div className="mb-3">
				<p>Total actions so far: {numberOfActions}</p>
			</div>
			<div className="mb-3">
				<button onClick={() => dispatch(reset())}>Reset</button>
			</div>
		</>
	);
};
