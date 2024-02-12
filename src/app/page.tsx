import { CuratedBookList } from "./components/CuratedBookList";

export default function Home() {
  return (
    <main className="p-12">
      <h1 className="text-2xl">Booker</h1>

      <CuratedBookList author="vonnegut" />
    </main>
  );
}
