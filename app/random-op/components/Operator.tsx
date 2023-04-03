"use client";

import { BsSpeedometer2 as SpeedIcon } from "react-icons/bs";
import { GiHealthNormal as HealthIcon } from "react-icons/gi";

import { Operator } from "r6operators";
import { MouseEvent, useRef, useState } from "react";
import ReactCountryFlag from "react-country-flag";
import SVG from "react-inlinesvg";
import Points from "./Points";

interface Props {
  operator: Operator;
}

export default function OperatorCard({ operator }: Props) {
  const svgString = `<svg xmlns="${operator.svg.attributes.xmlns}" xml:space="${operator.svg.attributes.space}" style="${operator.svg.attributes.style}" viewBox="${operator.svg.attributes.viewBox}">${operator.svg.contents}</svg>`;
  const operatorRef = useRef<HTMLDivElement>(null);
  const [infoOpen, setInfoOpen] = useState(false);

  const toggleAbility = (event: MouseEvent) => {
    if (event.ctrlKey) {
      setInfoOpen((state) => !state);
      return;
    }
    if (infoOpen) {
      setInfoOpen(false);
      return;
    }
    const isDisabled = operatorRef.current?.classList.contains("disabled");
    const isActive = operatorRef.current?.classList.contains("active");
    if (isDisabled || isActive) {
      operatorRef.current?.classList.remove("disabled");
      operatorRef.current?.classList.remove("active");
    } else {
      operatorRef.current?.classList.add("disabled");
    }
  };

  return (
    <button
      onClick={toggleAbility}
      className="relative"
    >
      <div
        ref={operatorRef}
        className=" w-24 h-24 operator hover:animate-pulse transition-all"
      >
        <SVG src={svgString} />
      </div>
      <div
        className={`absolute ${
          !infoOpen && "scale-0"
        } bg-30 left-0 top-0 flex bg-opacity-80 flex-col gap-1 items-center right-0 bottom-0 transition-all duration-500 text-60`}
      >
        <h5>{operator.name} </h5>

        <div className="flex items-center gap-1">
          <Points
            points={operator.ratings?.speed || 0}
            max={3}
          />
          <SpeedIcon className=" text-red-500" />
        </div>
        <div className="flex items-center gap-1">
          <Points
            points={operator.ratings?.health || 0}
            max={3}
          />
          <HealthIcon className="text-blue-400" />
        </div>
        <div className="flex items-center gap-1">
          <p>{operator.meta?.season}</p>
          <ReactCountryFlag
            countryCode={operator.meta?.country?.toUpperCase() || "US"}
            style={{
              fontSize: "1rem",
              lineHeight: "1rem",
            }}
          />
        </div>
      </div>
    </button>
  );
}
