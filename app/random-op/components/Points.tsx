interface Props {
  points: number;
  max: number;
}

export default function Points({ points, max }: Props) {
  if (points > max)
    console.error(
      "Please set the max parameter to be greater than the points parameter"
    );
  const p: boolean[] = [];
  for (let i = 0; i < max; i++) {
    if (i < points) {
      p.push(true);
    } else {
      p.push(false);
    }
  }
  return (
    <section className="flex gap-1">
      {p.map((isFull, index) => {
        return (
          <p
            key={index}
            className={`w-3 h-3 rounded-full bg-60 ${!isFull && "opacity-30"}`}
          ></p>
        );
      })}
    </section>
  );
}
