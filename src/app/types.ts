export type Author = {
  id: number;
  name: string;
}

export type Book = {
  id: number;
  title: string;
  author?: Author
}
