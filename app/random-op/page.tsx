import * as operators from "r6operators";
import OperatorCard from "./components/Operator";
import ButtonSet from "./components/ButtonSet";
import Info from "./components/Info";

function getOperators(): string {
  const attackers: operators.Operator[] = [];
  const defenders: operators.Operator[] = [];

  const customSort = (
    operatorA: operators.Operator,
    operatorB: operators.Operator
  ) => {
    const a =
      (operatorA.meta?.season === "Release"
        ? "Y0S0"
        : operatorA.meta?.season) || "Y0S0";
    const b =
      (operatorB.meta?.season === "Release"
        ? "Y0S0"
        : operatorB.meta?.season) || "Y0S0";

    const splitYearNSeason = (item: string) => {
      const year = parseInt(item.charAt(1));
      const season = parseInt(item.charAt(3));
      return [year, season];
    };

    const [yearA, seasonA] = splitYearNSeason(a);
    const [yearB, seasonB] = splitYearNSeason(b);

    if (yearA < yearB) return -1;
    if (yearA > yearB) return 1;
    if (seasonA < seasonB) return -1;
    if (seasonA > seasonB) return 1;
    return 0;
  };

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

  attackers.sort(customSort);
  defenders.sort(customSort);

  return JSON.stringify({ attackers, defenders });
}

export default function RandomOpPage() {
  const response = getOperators();
  const { attackers, defenders } = JSON.parse(response);
  return (
    <article className="p-8 text-center w-full">
      <div className="flex gap-2 justify-center items-center mb-8">
        <h1 className="text-2xl">Random Operator</h1>
        <Info message="Click an operator icon to enable or disable. CTRL click an operator to show info" />
      </div>
      <article className="flex flex-col gap-8 md:flex-row md:flex-wrap md:justify-center">
        <aside className="flex flex-col gap-4 items-center">
          <ButtonSet
            who=".attackers.operator"
            active="active"
            disabled="disabled"
          />
          <section className="attackers flex flex-wrap items-center md:justify-start min-w-[24rem] max-w-5xl justify-center">
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
          <section className="defenders flex flex-wrap items-center justify-center md:justify-start max-w-5xl">
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
