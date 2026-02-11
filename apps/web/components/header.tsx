import React from "react";
import { twMerge } from "tailwind-merge";

export interface HeaderProps extends React.HTMLAttributes<HTMLHeadElement> {}

export default function Header({ className = "" }: HeaderProps) {
  return (
    <header
      className={twMerge(
        `w-full bg-transparent px-5 py-4 text-white ${className}`,
      )}
      aria-label="Site header"
    >
      <div className="flex justify-center leading-[1.4]">{"정준영"}</div>
    </header>
  );
}
