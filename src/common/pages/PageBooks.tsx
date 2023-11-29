import axios from "axios";
import { IBooks } from "../../../interfaces";
import { useState, useEffect } from "react";

const booksURL = "https://edwardtanguay.vercel.app/share/books.json";

export const PageBooks = () => {
	const [books, setBooks] = useState<IBooks[]>([]);
	useEffect(() => {
		(async () => {
			const response = await axios.get(booksURL);
			const _books = response.data;
			setBooks(_books);
		})();
	});

	return (
		<>
			{books.map((book) => {
				return (
					<div>
						<p>Title: {book.title}</p>
					</div>
				);
			})}
		</>
	);
};
