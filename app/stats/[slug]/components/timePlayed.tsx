import { AiOutlineHourglass as TimeIcon } from "react-icons/ai";

interface Props {
  time: string;
}

export default function TimePlayed({ time }: Props) {
  return (
    <section className="flex gap-2 items-center">
      <TimeIcon />
      <p>{Number.isNaN(parseInt(time[0])) ? "-" : time}</p>
    </section>
  );
}
