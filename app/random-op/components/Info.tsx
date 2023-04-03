"use client";
import { useEffect, useState } from "react";
import { AiOutlineInfoCircle as InfoIcon } from "react-icons/ai";

interface Props {
  message: string;
}

export default function Info({ message }: Props) {
  const [contextOpen, setContextOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.innerWidth > 789);
  }, []);

  return (
    <div className="relative">
      <InfoIcon
        onMouseEnter={setContextOpen.bind(null, true)}
        onMouseLeave={setContextOpen.bind(null, false)}
        className="cursor-pointer text-10 text-xl"
      />
      <article
        className={`absolute ${
          !contextOpen && "scale-0"
        } bg-30 text-60 px-2 py-1 rounded -${
          isDesktop ? "right" : "left"
        }-48 -bottom-28 z-50 transition-all w-48`}
      >
        {message}
      </article>
    </div>
  );
}
