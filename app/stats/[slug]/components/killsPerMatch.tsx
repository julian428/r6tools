interface Props {
  kpm: string; //kills per match
}

export default function KillsPerMatch({ kpm }: Props) {
  return <section>{kpm} kills per match</section>;
}
