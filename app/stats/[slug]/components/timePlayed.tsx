import { AiOutlineHourglass as TimeIcon } from "react-icons/ai";

interface Props {
  time: string;
}

export default function TimePlayed({ time }: Props) {
  const timeIsCorrect = (time: string) => {
    if (!time) return false;
    return Number.isNaN(parseInt(time[0]));
  };
  return (
    <section className="flex gap-2 items-center">
      <TimeIcon />
      <p>{timeIsCorrect(time) ? "-" : time}</p>
    </section>
  );
}
