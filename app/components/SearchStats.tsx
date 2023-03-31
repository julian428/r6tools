"use client";
import {
  AiOutlineSearch as SearchIcon,
  AiOutlineLoading as LoadingIcon,
} from "react-icons/ai";
import StandardInput from "../ui/input";
import { FormEvent, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchStats() {
  const searchRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const searchPlayer = (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    const player = searchRef.current?.value;
    router.push(`/stats/${player}`);
  };

  return (
    <form
      onSubmit={searchPlayer}
      className="flex items-end gap-1"
    >
      <StandardInput
        label="username"
        disabled={loading}
        required
        ref={searchRef}
      />
      <button
        disabled={loading}
        className="text-xl pb-1 flex justify-center items-center"
      >
        {!loading ? <SearchIcon /> : <LoadingIcon className=" animate-spin" />}
      </button>
    </form>
  );
}
