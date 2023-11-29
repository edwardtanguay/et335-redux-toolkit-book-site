import { useSelector } from "react-redux"
import { RootState } from "../../app/store"

export const PageCheckout = () => {
	const { cart } = useSelector((state:RootState) => state.cart)
	return (
		<>
		<p className="mb-4">There are {cart.items.length} books in the cart.</p>
			{cart.items.map(book => {
				return (
					<div key={book.id} className="flex gap-3 items-center mb-4">
							<img
								className="w-20 h-fit"
								src={`https://edwardtanguay.vercel.app/share/images/books/${book.idcode}.png`}
							/>
						<p className="text-3xl">{book.title}</p>
					</div>
			)
		})}
		</>
	)
}
