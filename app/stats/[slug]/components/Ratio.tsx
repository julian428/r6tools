import { IconType } from "react-icons";

interface Props {
  right: string | number;
  left: string | number;
  IconLeft: IconType;
  IconRight: IconType;
}

export default function Ratio({ left, right, IconLeft, IconRight }: Props) {
  let l: number = 0;
  let r: number = 0;
  console.log(typeof left, typeof right);
  if (typeof left === "string") {
    l = parseInt(left.replace(/,/g, ""));
  } else {
    l = left;
  }
  if (typeof right === "string") {
    r = parseInt(right.replace(/,/g, ""));
  } else {
    r = right;
  }
  const sum = l + r;

  const percentKills = Math.floor(((l as number) / sum) * 100);

  return (
    <section>
      <article className="flex justify-between w-full px-2 pb-1">
        <section className="flex gap-2 items-center h-4">
          <p>{l}</p>
          <IconLeft />
        </section>
        <section>
          <p>{Math.round(((l as number) / (r as number)) * 100) / 100}</p>
        </section>
        <section className="flex gap-2 items-center  h-4">
          <IconRight />
          <p>{r}</p>
        </section>
      </article>
      <div className=" max-w-sm min-w-[14rem] flex justify-start items-center bg-white h-7 rounded-md">
        <div
          className="bg-10 h-full z-10 rounded-l-md flex justify-center items-center"
          style={{ width: percentKills + "%" }}
        >
          {percentKills}%
        </div>
      </div>
    </section>
  );
}
