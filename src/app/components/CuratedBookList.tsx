import { Book } from "../types";

interface Props {
	author: string;
}

interface CuratedBooksResponse {
	books: Book[];
}

export async function CuratedBookList({ author }: Props) {
	const data = await loadCuratedBooks(author);

	return (
		<div>
			<h2>{author}</h2>
			{
				<ul>
					{data.books.map((book) => {
						return <li key={book.id}>{book.title}</li>;
					})}
				</ul>
			}
		</div>
	);
}

async function loadCuratedBooks(author: string): Promise<CuratedBooksResponse> {
	const res = await fetch(
		`${process.env.API_HOST}/books/by_author/?name=${author}`,
	);

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	return res.json();
}
