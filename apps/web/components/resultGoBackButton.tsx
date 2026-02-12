"use client";

import React from "react";
import GoBackButton, { GoBackButtonProps } from "./goBackButton";
import { twMerge } from "tailwind-merge";

const ResultGoBackButton = ({
  onClick,
  className,
  ...rest
}: GoBackButtonProps) => {


  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {

    if (onClick) {
      onClick(e);
    }
  };

  return (
    <GoBackButton
      onClick={handleClick}
      className={twMerge("md:max-w-[154px]", className)}
      {...rest}
    />
  );
};

export default ResultGoBackButton;
