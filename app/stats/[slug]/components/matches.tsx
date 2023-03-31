import { SlGameController as GameIcon } from "react-icons/sl";

interface Props {
  matches: string;
}

export default function Matches({ matches }: Props) {
  return (
    <section className="flex gap-2 items-center">
      <p>{matches}</p>
      <GameIcon />
    </section>
  );
}
