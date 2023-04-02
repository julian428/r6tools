"use client";

import { Operator } from "r6operators";
import { useRef } from "react";
import SVG from "react-inlinesvg";

interface Props {
  operator: Operator;
}

export default function OperatorCard({ operator }: Props) {
  const svgString = `<svg xmlns="${operator.svg.attributes.xmlns}" xml:space="${operator.svg.attributes.space}" style="${operator.svg.attributes.style}" viewBox="${operator.svg.attributes.viewBox}">${operator.svg.contents}</svg>`;
  const operatorRef = useRef<HTMLDivElement>(null);

  const toggleAbility = () => {
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
    <button onClick={toggleAbility}>
      <div
        ref={operatorRef}
        className="w-20 h-20 md:w-24 md:h-24 operator hover:animate-pulse transition-all"
      >
        <SVG src={svgString} />
      </div>
    </button>
  );
}
