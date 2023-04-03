import * as operators from "r6operators";
import OperatorCard from "./components/Operator";
import ButtonSet from "./components/ButtonSet";
import { notFound } from "next/navigation";

function getOperators(): string {
  const attackers: operators.Operator[] = [];
  const defenders: operators.Operator[] = [];

  Object.entries(operators).map(([name, operator]) => {
    const role = (operator as operators.Operator).role;
    switch (role) {
      case "Attacker":
        attackers.push(operator as operators.Operator);
        break;
      case "Defender":
        defenders.push(operator as operators.Operator);
        break;
      case "Recruit":
        break;
    }
  });
  return JSON.stringify({ attackers, defenders });
}

export default function RandomOpPage() {
  const response = getOperators();
  const { attackers, defenders } = JSON.parse(response);
  return (
    <article className="p-8 text-center w-full">
      <h1 className="text-2xl mb-8">Random Operator</h1>
      <article className="flex flex-col gap-8 md:flex-row">
        <aside className="flex flex-col gap-4 items-center">
          <ButtonSet
            who=".attackers.operator"
            active="active"
            disabled="disabled"
          />
          <section className="attackers flex flex-wrap items-center md:justify-start min-w-[24rem] max-w-3xl justify-center">
            {attackers.map((attacker: operators.Operator) => (
              <OperatorCard
                key={attacker.id}
                operator={attacker}
              />
            ))}
          </section>
        </aside>
        <aside className="flex flex-col gap-4 items-center">
          <ButtonSet
            who=".defenders.operator"
            active="active"
            disabled="disabled"
          />
          <section className="defenders flex flex-wrap items-center justify-center md:justify-start max-w-3xl">
            {defenders.map((defender: operators.Operator) => (
              <OperatorCard
                key={defender.id}
                operator={defender}
              />
            ))}
          </section>
        </aside>
      </article>
    </article>
  );
}
