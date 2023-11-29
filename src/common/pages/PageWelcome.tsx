import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";

export const PageWelcome = () => {
	const dispatch = useDispatch();
	const count = useSelector((state: RootState) => state.cart.count);

	return (
		<div className="flex gap-3 items-center">
			<button>Subtract</button>
			<button>Add</button>
			<p className="text-xl">count = {count}</p>
		</div>
	)
}