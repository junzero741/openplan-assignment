"use client";

import React from "react";
import GoBackButton, { GoBackButtonProps } from "./goBackButton";
import { twMerge } from "tailwind-merge";
import { usePhotoStore } from "@/stores/photoStore";
import { useQueryClient } from "@tanstack/react-query";
import { PHOTO_QUERY_KEY } from "@/actions/usePhotoInfoQuery";

const ResultGoBackButton = ({
  onClick,
  className,
  ...rest
}: GoBackButtonProps) => {
    const clearPhoto = usePhotoStore((state) => state.clearPhoto);
    const queryClient = useQueryClient();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    clearPhoto();
    queryClient.removeQueries({queryKey: PHOTO_QUERY_KEY});
    
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
