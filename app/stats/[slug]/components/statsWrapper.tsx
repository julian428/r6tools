import { StatsRank } from "r6s-stats-api/types/rank";
import Matches from "./matches";
import KD from "./kdDisplay";
import Kills from "./kills";
import Wins from "./winsDisplaye";
import TimePlayed from "./timePlayed";
import KillsPerMatch from "./killsPerMatch";
import Rank from "./rank";

interface Props {
  stats: StatsRank;
  label: string;
}

export default function StatsWrapper({ stats, label }: Props) {
  return (
    <>
      <h2>{label}</h2>
      <Matches matches={stats.matches} />
      <KD kd={stats.kd} />
      <Kills
        kills={stats.kills}
        deaths={stats.deaths}
      />
      <Wins
        wins={stats.wins}
        losses={stats.losses}
      />
      <TimePlayed time={stats.time_played} />
      <KillsPerMatch kpm={stats.kills_match} />
      <Rank
        mmr={stats.mmr}
        rank={stats.rank}
        rank_img={stats.rank_img}
      />
    </>
  );
}
