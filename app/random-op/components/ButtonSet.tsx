"use client";

import Button from "@/app/ui/button";
import { useEffect, useState } from "react";
import { AiOutlineLoading as LoadingIcon } from "react-icons/ai";

interface Props {
  who: string;
  active: string;
  disabled: string;
}

function sleep(ms: number = 1000) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const disableAll = (elements: NodeList, disabled: string, active: string) => {
  Object.entries(elements).map(([key, element]) => {
    const isDisabled = (element as HTMLElement).classList.contains(disabled);
    if (isDisabled) return;
    (element as HTMLElement).classList.add(disabled);
    (element as HTMLElement).classList.remove(active);
  });
};

const clearAll = (elements: NodeList, disabled: string, active: string) => {
  Object.entries(elements).map(([key, element]) => {
    (element as HTMLElement).classList.remove(disabled);
    (element as HTMLElement).classList.remove(active);
  });
};

const spin = async (elements: NodeList, disabled: string, active: string) => {
  Object.entries(elements).map(([key, element]) => {
    (element as HTMLDivElement).classList.remove(active);
  });
  const length = Object.keys(elements).length;
  let theChosensNumber = Math.floor(Math.random() * length);
  for (let i = 0, j = 0; j < length + theChosensNumber; i++, j++) {
    if (i >= length) i = 0;
    const isDisabled = (elements[i] as HTMLDivElement).classList.contains(
      disabled
    );
    if (isDisabled) continue;
    (elements[i] as HTMLDivElement).classList.add(active);
    await sleep(150);
    (elements[i] as HTMLDivElement).classList.remove(active);
  }
  while (
    (elements[theChosensNumber] as HTMLDivElement).classList.contains(disabled)
  ) {
    if (theChosensNumber >= length - 1) theChosensNumber = 0;
    theChosensNumber++;
  }
  (elements[theChosensNumber] as HTMLDivElement).classList.add(active);
};

export default function ButtonSet({ who, active, disabled }: Props) {
  const [elements, setElements] = useState<NodeList>();
  const [isSpinning, setIsSpinning] = useState(false);

  useEffect(() => {
    const el: NodeList | undefined = document
      .querySelector(`.${who.split(".")[1]}`)
      ?.querySelectorAll(`.${who.split(".")[2]}`);
    if (!el) return;
    setElements(el);
  }, []);

  if (!elements) {
    return (
      <div className="flex justify-center">
        <LoadingIcon className="animate-spin text-2xl" />
      </div>
    );
  }

  const handleSpinning = async () => {
    setIsSpinning(true);
    await spin(elements, disabled, active);
    setIsSpinning(false);
  };

  return (
    <section className="flex justify-evenly">
      <Button
        style={{ width: "120px" }}
        onClick={() => clearAll(elements, disabled, active)}
      >
        Clear all
      </Button>
      <Button
        onClick={handleSpinning}
        disabled={isSpinning}
      >
        Spin
      </Button>
      <Button
        style={{ width: "120px" }}
        onClick={() => disableAll(elements, disabled, active)}
      >
        Disable all
      </Button>
    </section>
  );
}
