'use client';

import { usePhotoInfoQuery } from "@/actions/usePhotoInfoQuery";
import { useThrottledClick } from "@/hooks/useThrottledClick";
import { usePhotoStore } from "@/stores/photoStore";
import { Button, ButtonProps } from "@repo/ui/button";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export interface PhotoLinkButtonProps extends ButtonProps {
    href: string | URL;
}

const PhotoLinkButton = ({ href, children }: PhotoLinkButtonProps) => {
    const { refetch, isFetching } = usePhotoInfoQuery({ enabled: false });
    const photo = usePhotoStore((state) => state.photo);
    const router = useRouter();

    const { handleThrottledClick, isLocked } = useThrottledClick(
        async () => {
            if (!photo) {
                await refetch();
            }
            router.push(String(href));
        },
        { throttleMs: 800, disabled: isFetching }
    );

    // 사진을 한번이라도 조회한 이력이 있을 시 "/result" 페이지로 자동으로 이동
    useEffect(() => {
        if (photo) {
            router.push(String(href));
        }
    }, [photo]);

    return (
        <Button
            type="button"
            className="w-full"
            onClick={handleThrottledClick}
        >
            {isLocked ? (
                <div className="flex w-full items-center justify-center">
                    <DotLottieReact
                        src="/spinner.lottie"
                        autoplay
                        loop
                        className="h-6"
                    />
                </div>
            ) : (
                children
            )}
        </Button>
    );
};

export default PhotoLinkButton;