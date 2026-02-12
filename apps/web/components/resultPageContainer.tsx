"use client";

import { usePhotoStore } from "@/stores/photoStore";
import PageContainer, { PageContainerProps } from "@/components/pageContainer";
import { twMerge } from "tailwind-merge";

interface ResultPageContainerProps extends PageContainerProps {}

const ResultPageContainer = ({
  className,
  style,
  ...props
}: ResultPageContainerProps) => {
  const photo = usePhotoStore((state) => state.photo);
  const backgroundImage = photo?.download_url
    ? `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.9)), url(${photo.download_url})`
    : undefined;

  return (
    <PageContainer
      className={twMerge("bg-cover bg-center bg-black/30", className)}
      style={backgroundImage ? { backgroundImage, ...style } : style}
      {...props}
    />
  );
};

export default ResultPageContainer;
