import { NextRequest, NextResponse } from "next/server";
import R6 from "r6s-stats-api";

export function getUrlParams(url: string): { [key: string]: string } | string {
  if (typeof url !== "string") return "Bad URL";
  const paramsURL = url.slice(url.indexOf("?") + 1);
  let params: { [key: string]: string } = {};
  paramsURL.split("&").map((param: string) => {
    const [paramName, paramValue] = param.split("=");
    params[paramName] = paramValue;
  });
  return params;
}

export async function GET(request: NextRequest) {
  const params = getUrlParams(request.url);
  if (typeof params === "string") return NextResponse.json(`Error: ${params}`);
  const casual = await R6.casual("pc", params.name);
  const rank = await R6.rank("pc", params.name);
  const general = await R6.general("pc", params.name);
  const deathmatch = await R6.deathmatch("pc", params.name);
  return NextResponse.json({ rank, casual, general, deathmatch });
}
