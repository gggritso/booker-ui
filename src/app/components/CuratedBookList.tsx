"use client";

import useSWR from "swr";
import { Book } from "../types";

interface Props {
	author: string;
}

interface CuratedBooksResponse {
	books: Book[];
}

export function CuratedBookList({ author }: Props) {
	const { data, error, isLoading } = useSWR<CuratedBooksResponse>(
		`${process.env.NEXT_PUBLIC_API_HOST}/books/by_author/?name=${author}`,
		fetcher,
	);

	if (isLoading) return <span>Loading</span>;
	if (error) return <span>Error!</span>;
	if (!data) return <span>Not found</span>;

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

const fetcher = (url: string) => fetch(url).then((res) => res.json());
