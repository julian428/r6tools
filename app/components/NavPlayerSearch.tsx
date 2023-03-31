import Link from "next/link";
import { LegacyRef, forwardRef } from "react";
import {
  AiOutlineSearch as SearchIcon,
  AiOutlineLoading as LoadingIcon,
} from "react-icons/ai";

interface Props {
  label?: string;
  show: boolean;
  props?: any[];
}

export default forwardRef(function StandardInput(
  { label, show, ...props }: Props,
  ref: LegacyRef<HTMLInputElement> | undefined
) {
  return (
    <section className="flex h-full justify-center items-center md:h-[40px] transition-all">
      <Link
        href="/stats"
        className={`${show && "hide"}`}
      >
        <SearchIcon className="cursor-pointer duration-500 text-3xl" />
      </Link>
      <div
        className={`relative ${!show ? "hide" : "flex gap-4"} transition-all`}
      >
        <input
          type="text"
          id={label || "input"}
          {...props}
          autoComplete="off"
          ref={ref}
          className="border-b-2 outline-none py-1 peer focus:border-10 focus:border-b-2 transition-colors bg-transparent"
        />
        <label
          htmlFor={label || "input"}
          className="absolute text-gray-600 left-0 top-1 peer-focus:text-10 capitalize cursor-text peer-focus:text-xs peer-focus:-top-4 peer-disabled:-top-4 peer-disabled:text-xs transition-all"
        >
          {label || "input"}
        </label>
        <div>
          <SearchIcon className="cursor-pointer duration-500 text-3xl" />
        </div>
      </div>
    </section>
  );
});
