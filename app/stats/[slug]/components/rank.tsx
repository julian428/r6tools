interface Props {
  mmr: string;
  rank_img: string;
}

export default function Rank({ mmr, rank_img }: Props) {
  return (
    <section className="flex flex-col items-center">
      <img
        src={rank_img}
        alt="COPPER VI"
      />
      <article className="flex gap-2">
        <p>{mmr}</p>
        <p>mmr</p>
      </article>
    </section>
  );
}
