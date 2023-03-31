import axios from "axios";
import StatsWrapper from "./components/statsWrapper";

interface Props {
  params: {
    slug: string;
  };
}

async function getStats(playerName: string) {
  const response = await axios.get(
    `http://localhost:3000/api/stats?name=${playerName}`
  );
  return response.data;
}

export default async function StatsPage({ params }: Props) {
  const { rank, casual } = await getStats(params.slug);
  if (typeof rank === "string" || typeof casual === "string") <p>Not found.</p>;
  return (
    <>
      <section className="h-48 gap-4 relative flex justify-end items-end px-8 py-4 bg-gradient-to-r from-10 to-blue-500">
        <article className="flex gap-4 absolute -bottom-14 p-2">
          <h1 className="text-2xl py-2 text-30">{rank.name}</h1>
          <img
            className="rounded-full w-24"
            src={rank.header}
            alt="Profile Picture"
          />
        </article>
      </section>
      <StatsWrapper
        label="Ranked"
        stats={rank}
      />
      <StatsWrapper
        label="Casual"
        stats={casual}
      />
    </>
  );
}
