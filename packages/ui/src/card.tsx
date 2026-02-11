"use client";

import { twMerge } from "tailwind-merge";


type CardItem = {
  label: string,
  value: string | number
}

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  items: CardItem[]
}

export function Card({
  className, items, ...rest
}: CardProps) {
  return (
    <div className={twMerge("bg-white rounded-2xl flex flex-wrap gap-4 p-5", className)} {...rest}>
      {items.map((item, index) => (
        <div key={index} className="flex gap-4 flex-grow">
          <span className="text-[#111111]">{item.label}</span>
          <span className="text-[#111111] opacity-50 break-all">{item.value}</span>
        </div>
      ))}
    </div>
  );
}
