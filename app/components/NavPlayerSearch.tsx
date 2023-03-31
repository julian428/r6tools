import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FormEvent, useEffect, useRef, useState } from "react";
import {
  AiOutlineSearch as SearchIcon,
  AiOutlineLoading as LoadingIcon,
} from "react-icons/ai";

interface Props {
  label?: string;
  show: boolean;
  props?: any[];
}

export default function StandardInput({ label, show, ...props }: Props) {
  const [loading, setLoading] = useState(false);
  const userNameRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const pathName = usePathname();

  const searchHandler = (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    const userName = userNameRef.current?.value || "";
    router.push(`/stats/${userName}`);
  };

  useEffect(() => {
    setLoading(false);
  }, [pathName]);

  return (
    <form
      onSubmit={searchHandler}
      className="flex h-full justify-center items-center md:h-[40px] transition-all"
    >
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
          ref={userNameRef}
          disabled={loading}
          required
          className="border-b-2 outline-none py-1 peer focus:border-10 focus:border-b-2 transition-colors bg-transparent"
        />
        <label
          htmlFor={label || "input"}
          className="absolute text-gray-600 -z-10 left-0 top-1 peer-focus:text-10 capitalize cursor-text peer-focus:text-xs peer-focus:-top-4 peer-disabled:-top-4 peer-disabled:text-xs transition-all"
        >
          {label || "input"}
        </label>
        <button>
          {loading ? (
            <LoadingIcon className="duration-500 text-2xl animate-spin" />
          ) : (
            <SearchIcon className="cursor-pointer duration-500 text-3xl" />
          )}
        </button>
      </div>
    </form>
  );
}
