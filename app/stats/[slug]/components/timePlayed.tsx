interface Props {
  time: string;
}

export default function TimePlayed({ time }: Props) {
  return <section>{time}</section>;
}
