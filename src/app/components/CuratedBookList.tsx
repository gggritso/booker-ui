"use client";

import useSWR from "swr";
import { Author, Book } from "../types";

interface Props {
	author: string;
}

interface CuratedBooksResponse {
	books: Book[];
	authors: Author[];
}

export function CuratedBookList({ author }: Props) {
	const { data, error, isLoading } = useSWR<CuratedBooksResponse>(
		`${process.env.NEXT_PUBLIC_API_HOST}/books/by_author/?name=${author}`,
		fetcher,
	);

	if (isLoading) return <span>Loading</span>;
	if (error) return <span>Error!</span>;
	if (!data) return <span>Not found</span>;

	const authorById: { [key: number]: Author } = {};
	// biome-ignore lint/complexity/noForEach: Leave me alone!
	(data?.authors ?? []).forEach((author) => {
		authorById[author.id] = author;
	});

	return (
		<div className="rounded bg-gradient-to-r p-4 from-violet-500 to-fuchsia-500 text-white">
			<h2 className="text-xl underline pb-2">This Month’s Selection</h2>
			{
				<ul>
					{data.books.map((book) => {
						return (
							<li key={book.id}>
								{book.title}{" "}
								{book.author
									? `by ${authorById[book.author.id]?.name ?? ""}`
									: ""}
							</li>
						);
					})}
				</ul>
			}
		</div>
	);
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());
