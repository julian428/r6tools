import { NextRequest, NextResponse } from "next/server";
import * as operators from "r6operators";

export async function GET(request: NextRequest) {
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
  return NextResponse.json({ attackers, defenders });
}
