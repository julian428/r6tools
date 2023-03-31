import SearchStats from "./components/SearchStats";

export default function Home() {
  return (
    <>
      <article className="flex flex-col items-center py-16 gap-2">
        <SearchStats />
        <h3>Search for a player to get his stats</h3>
      </article>
    </>
  );
}
