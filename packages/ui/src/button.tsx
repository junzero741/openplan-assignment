"use client";

import { twMerge } from "tailwind-merge";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
}

export const Button = ({ children, className }: ButtonProps) => {
  return (
    <button
      className={twMerge(`rounded-xl font-semibold leading-6 p-3 bg-[#111111] text-white hover:opacity-80 active:opacity-80`,
        className)}
    >
      {children}
    </button>
  );
};
