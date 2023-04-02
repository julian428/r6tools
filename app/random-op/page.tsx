import axios from "axios";
import OperatorCard from "./components/Operator";
import { Operator } from "r6operators";
import ButtonSet from "./components/ButtonSet";

async function getOperators(): Promise<{
  attackers: Operator[];
  defenders: Operator[];
}> {
  const response = await axios.get("http://localhost:3000/api/operators");
  return response.data;
}

export default async function RandomOpPage() {
  const { attackers, defenders } = await getOperators();
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
            {attackers.map((operator) => (
              <OperatorCard
                key={operator.id}
                operator={operator}
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
            {defenders.map((operator) => (
              <OperatorCard
                key={operator.id}
                operator={operator}
              />
            ))}
          </section>
        </aside>
      </article>
    </article>
  );
}
