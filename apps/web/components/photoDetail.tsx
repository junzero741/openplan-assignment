"use client";

import { usePhotoStore } from "@/stores/photoStore";
import { Card } from "@repo/ui/card";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { twMerge } from "tailwind-merge";

const LAYOUT_CLASS = "w-full flex flex-col lg:flex-row gap-10 justify-center items-center";
const IMAGE_CLASS = "rounded-3xl lg:max-w-[50%]";
const META_CLASS = "flex flex-col flex-grow w-full gap-3";

interface PhotoDetailProps extends React.HTMLAttributes<HTMLElement> {

}
const PhotoDetail = ({ className, ...rest }: PhotoDetailProps) => {
    const photo = usePhotoStore((state) => state.photo);
    const router = useRouter();

    // 사진을 조회한 이력없이 "/result"로 이동하는 경우, 1초 뒤 메인 페이지로 이동
    useEffect(() => {
        if (photo) return;

        const timeoutId = window.setTimeout(() => {
            if (!usePhotoStore.getState().photo) {
                router.replace("/");
            }
        }, 1000);

        return () => window.clearTimeout(timeoutId);
    }, [photo, router]);

    if (!photo) {
        return (
            <PhotoDetailSkeleton className={className} {...rest} />
        )
    }
    return (
        <PhotoDetailLayout className={twMerge(LAYOUT_CLASS, className)} {...rest}>
            <Image
                src={photo.download_url}
                alt={photo.author}
                width={photo.width}
                height={photo.height}
                className={IMAGE_CLASS}
            />
            <PhotoMetaList items={[
                [
                    { label: "id", value: photo.id },
                    { label: "author", value: photo.author },
                ],
                [
                    { label: "width", value: photo.width },
                    { label: "height", value: photo.height },
                ],
                [
                    { label: "url", value: photo.url },
                    { label: "download_url", value: photo.download_url },
                ]
            ]} />
        </PhotoDetailLayout>
    )
}


export interface PhotoDetailSkeletonProps extends React.HTMLAttributes<HTMLDivElement> { }

const PhotoDetailSkeleton = ({ className, ...rest }: PhotoDetailSkeletonProps) => {
    return (
        <PhotoDetailLayout
            className={twMerge("animate-pulse", className)}
            aria-busy="true"
            aria-live="polite"
            {...rest}
        >
            <PhotoImageSkeleton />
            <PhotoMetaList items={[[], [], []]} />
        </PhotoDetailLayout>
    );
};

const PhotoDetailLayout = ({ className, ...rest }: React.HTMLAttributes<HTMLDivElement>) => {
    return <div className={twMerge(LAYOUT_CLASS, className)} {...rest} />;
};

const PhotoMetaList = ({ items }: { items: Array<Array<{ label: string; value: string | number }>> }) => {
    return (
        <div className={META_CLASS}>
            {items.map((cardItems, index) => (
                <Card key={index} items={cardItems} />
            ))}
        </div>
    );
};

const PhotoImageSkeleton = ({ className, ...rest }: React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <div
            className={twMerge("w-full aspect-[4/3] bg-neutral-200", IMAGE_CLASS, className)}
            {...rest}
        />
    );
};




export default PhotoDetail;