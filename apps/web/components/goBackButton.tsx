"use client";

import { Button, ButtonProps } from "@repo/ui/button";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";

export interface GoBackButtonProps extends ButtonProps {}

const GoBackButton = ({ onClick, className, ...rest }: GoBackButtonProps) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(e);
    }
    router.back();
  };

  return (
    <Button
      onClick={handleClick}
      className={twMerge("w-full", className)}
      {...rest}
    >
      {"이전"}
    </Button>
  );
};

export default GoBackButton;
