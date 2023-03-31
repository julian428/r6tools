interface Props {
  wins: string;
  losses: string;
}

export default function Wins({ wins, losses }: Props) {
  return (
    <section>
      {wins}/{losses}
    </section>
  );
}
