"use client";

import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export const Button = ({ children, className, appName }: ButtonProps) => {
  return (
    <button
      className={twMerge(`rounded-xl font-semibold leading-6 p-3 bg-[#111111] text-white hover:opacity-80 active:opacity-80`,
        className)}
    >
      {children}
    </button>
  );
};
