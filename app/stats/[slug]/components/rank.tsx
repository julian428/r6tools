interface Props {
  mmr: string;
  rank: string;
  rank_img: string;
}

export default function Rank({ mmr, rank, rank_img }: Props) {
  return (
    <section>
      <h3>{rank}</h3>
      <img
        src={rank_img}
        alt="COPPER VI"
      />
      <p>{mmr}</p>
    </section>
  );
}
