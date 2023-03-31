interface Props {
  kills: string;
  deaths: string;
}

export default function Kills({ kills, deaths }: Props) {
  return (
    <section>
      {kills}/{deaths}
    </section>
  );
}
