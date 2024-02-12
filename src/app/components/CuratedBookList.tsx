interface Props {
  author: string;
}

export function CuratedBookList({author}: Props) {
  return <div>
    <h2>{author}</h2>
  </div>;
}
