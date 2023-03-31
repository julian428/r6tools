"use client";
import { useEffect, useState } from "react";
import { MdKeyboardControlKey as ControlIcon } from "react-icons/md";
import { SiTaichilang as ContrastIcon } from "react-icons/si";
import { GiPerspectiveDiceSixFacesRandom as RandomIcon } from "react-icons/gi";
import { FiSettings as SettingsIcon } from "react-icons/fi";
import {
  BsWrenchAdjustableCircle as Logo,
  BsMap as MapIcon,
} from "react-icons/bs";
import Link from "next/link";

export default function MainNav() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    setOpen(!(window.innerWidth < 769));
  }, [window.innerWidth]);

  return (
    <nav
      className={`${
        open ? "md:w-72" : "md:w-20"
      } bg-30 h-20 md:h-screen flex justify-between md:flex-col md:items-start relative p-5 md:pt-8 top-0 bottom-0 z-10 text-60 transition-all`}
    >
      <button
        type="button"
        onClick={() => setOpen((state) => !state)}
        className="absolute scale-0 md:scale-100 border-2 border-10 cursor-pointer w-7 flex justify-center items-center bg-60 text-10 -right-3 top-9 h-7 rounded-full"
      >
        <ControlIcon
          className={`${
            open ? "-rotate-90" : "rotate-90"
          } duration-500 text-lg transition-all`}
        />
      </button>
      <header className="flex md:gap-x-4 h-full justify-center items-center md:h-[40px] transition-all ">
        <Link href="/">
          <Logo className={`cursor-pointer duration-500 text-4xl`} />
        </Link>
        <h1
          className={`text-60 origin-left font-medium text-xl transition-all duration-300 ${
            !open && "scale-0"
          }`}
        >
          R6 tools
        </h1>
      </header>
      <aside className="flex md:flex-col md:gap-4">
        <section className="flex md:gap-x-4 h-full justify-center items-center md:h-[40px] transition-all">
          <Link href="/player-contrast">
            <ContrastIcon className="text-2xl" />
          </Link>
          <h2
            className={`text-60 origin-left text-sm transition-all duration-300 ${
              !open && "scale-0"
            }`}
          >
            Player Contrast
          </h2>
        </section>
        <section className="flex md:gap-x-4 h-full justify-center items-center md:h-[40px] transition-all">
          <Link href="/maps">
            <MapIcon className="text-2xl" />
          </Link>
          <h2
            className={`text-60 origin-left text-sm transition-all duration-300 ${
              !open && "scale-0"
            }`}
          >
            Player Contrast
          </h2>
        </section>
        <section className="flex md:gap-x-4 h-full justify-center items-center md:h-[40px] transition-all">
          <Link href="/random-op">
            <RandomIcon className="text-2xl" />
          </Link>
          <h2
            className={`text-60 origin-left text-sm transition-all duration-300 ${
              !open && "scale-0"
            }`}
          >
            Player Contrast
          </h2>
        </section>
        <section className="flex md:gap-x-4 h-full justify-center items-center md:h-[40px] transition-all">
          <Link href="/settings">
            <SettingsIcon className="text-2xl" />
          </Link>
          <h2
            className={`text-60 origin-left text-sm transition-all duration-300 ${
              !open && "scale-0"
            }`}
          >
            Player Contrast
          </h2>
        </section>
      </aside>
    </nav>
  );
}
