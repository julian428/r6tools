"use client";

export default function Button({ children, ...props }: any) {
  return (
    <button
      {...props}
      className="bg-transparent border-2 border-30 px-4 py-1 rounded transition-all shadow-2xl disabled:opacity-25 disabled:cursor-wait hover:border-10 hover:text-10 hover:shadow-10 active:border-10 active:text-10 active:shadow-10"
    >
      {children}
    </button>
  );
}
