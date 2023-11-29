import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { addBookToCart } from "../../features/cart/cartSlice";

export const PageBooks = () => {

	const dispatch = useDispatch();
	const { books } = useSelector((state: RootState) => state.cart);
	return (
		<>
			<p className="mb-4">
				This is the books page, there are {books.length} books.
			</p>
			<div className="flex gap-3 flex-wrap">
				{books.map((book) => {
					return (
						<div>
							<img
								className="w-32 h-fit cursor-pointer"
								onClick={() => dispatch(addBookToCart(book))}
								src={`https://edwardtanguay.vercel.app/share/images/books/${book.idcode}.png`}
							/>
						</div>
					);
				})}
			</div>
		</>
	);
};
