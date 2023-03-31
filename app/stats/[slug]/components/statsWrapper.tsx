import { StatsRank } from "r6s-stats-api/types/rank";
import Matches from "./matches";
import TimePlayed from "./timePlayed";
import Rank from "./rank";
import Ratio from "./Ratio";
import { FaSkull as DeathIcon } from "react-icons/fa";
import { GiPistolGun as KillIcon } from "react-icons/gi";
import { GiLaurelCrown as WinIcon } from "react-icons/gi";
import { AiOutlineCloseCircle as LoseIcon } from "react-icons/ai";

interface Props {
  stats: StatsRank;
  label: string;
}

export default function StatsWrapper({ stats, label }: Props) {
  return (
    <article className="flex flex-col md:w-fit md:flex-grow bg-03 p-8 rounded-xl text-60 items-center gap-8">
      <h2 className="border-b-2 border-b-10 w-fit h-fit text-2xl px-8 my-4">
        {label}
      </h2>
      <article className="flex flex-col md:flex-row gap-8">
        <section className="flex flex-col gap-8 items-center">
          <Ratio
            left={stats.kills}
            right={stats.deaths}
            IconLeft={KillIcon}
            IconRight={DeathIcon}
          />
          <section className="flex flex-col items-center gap-2">
            <Ratio
              left={stats.wins}
              right={stats.losses}
              IconLeft={WinIcon}
              IconRight={LoseIcon}
            />
            <Matches matches={stats.matches} />
          </section>
        </section>
        <section className="flex flex-col gap-8 items-center">
          <TimePlayed time={stats.time_played} />
          <Rank
            mmr={stats.mmr}
            rank_img={stats.rank_img}
          />
        </section>
      </article>
    </article>
  );
}
