interface Props {
  matches: string;
}

export default function Matches({ matches }: Props) {
  return (
    <section className="p-2 bg-slate-500 w-fit rounded text-center">
      <p>{matches}</p>
      <h3>Matches Played</h3>
    </section>
  );
}
