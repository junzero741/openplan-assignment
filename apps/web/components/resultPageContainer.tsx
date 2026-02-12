"use client";

import { usePhotoStore } from "@/stores/photoStore";
import PageContainer, { PageContainerProps } from "@/components/pageContainer";
import { twMerge } from "tailwind-merge";

const OVERLAY_OPACITY_START = 0.7;
const OVERLAY_OPACITY_END = 0.9;

interface ResultPageContainerProps extends PageContainerProps {}

const ResultPageContainer = ({
  className,
  style,
  ...props
}: ResultPageContainerProps) => {
  const photo = usePhotoStore((state) => state.photo);
  const backgroundImage = photo?.download_url
    ? `linear-gradient(rgba(255, 255, 255, ${OVERLAY_OPACITY_START}), rgba(255, 255, 255, ${OVERLAY_OPACITY_END})), url(${photo.download_url})`
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
