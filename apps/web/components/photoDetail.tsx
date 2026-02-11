"use client";


import withSuspense from "@/components/withSuspense";
import { usePhotoStore } from "@/stores/photoStore";
import { Card } from "@repo/ui/card";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { twMerge } from "tailwind-merge";

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
        <div className={twMerge("w-full flex flex-col lg:flex-row gap-10 justify-center items-center", className)} {...rest}>
            <Image src={photo.download_url} alt={photo.author} width={photo.width} height={photo.height} className="rounded-3xl lg:max-w-[660px] md:max-w-[728px]" />
            <div className="flex flex-col gap-3">
                <Card items={[
                    { label: "id", value: photo.id },
                    { label: "author", value: photo.author },
                ]} />
                <Card items={[
                    { label: "width", value: photo.width },
                    { label: "height", value: photo.height },
                ]} />
                <Card items={[
                    { label: "url", value: photo.url },
                    { label: "download_url", value: photo.download_url },
                ]} />
            </div>
        </div>
    )
}


export interface PhotoDetailSkeletonProps extends React.HTMLAttributes<HTMLDivElement> { }

function PhotoDetailSkeleton({ className, ...rest }: PhotoDetailSkeletonProps) {
    return (
        <div
            className={twMerge("flex w-full flex-col gap-6 py-6 animate-pulse", className)}
            aria-busy="true"
            aria-live="polite"
            {...rest}
        >
            <div className="w-full aspect-[4/3] rounded-3xl bg-neutral-200" />
            <div className="flex flex-col gap-3 mt-4">
                <div className="bg-white rounded-2xl flex flex-wrap gap-4 p-5">
                    <div className="flex gap-4 flex-grow">
                        <span className="h-4 w-10 rounded bg-neutral-200" />
                        <span className="h-4 w-32 rounded bg-neutral-200" />
                    </div>
                    <div className="flex gap-4 flex-grow">
                        <span className="h-4 w-14 rounded bg-neutral-200" />
                        <span className="h-4 w-40 rounded bg-neutral-200" />
                    </div>
                </div>
                <div className="bg-white rounded-2xl flex flex-wrap gap-4 p-5">
                    <div className="flex gap-4 flex-grow">
                        <span className="h-4 w-12 rounded bg-neutral-200" />
                        <span className="h-4 w-24 rounded bg-neutral-200" />
                    </div>
                    <div className="flex gap-4 flex-grow">
                        <span className="h-4 w-14 rounded bg-neutral-200" />
                        <span className="h-4 w-28 rounded bg-neutral-200" />
                    </div>
                </div>
                <div className="bg-white rounded-2xl flex flex-wrap gap-4 p-5">
                    <div className="flex gap-4 flex-grow">
                        <span className="h-4 w-10 rounded bg-neutral-200" />
                        <span className="h-4 w-52 rounded bg-neutral-200" />
                    </div>
                    <div className="flex gap-4 flex-grow">
                        <span className="h-4 w-28 rounded bg-neutral-200" />
                        <span className="h-4 w-60 rounded bg-neutral-200" />
                    </div>
                </div>
            </div>
        </div>
    );
}

const PhotoDetailWithSuspense = withSuspense(
    PhotoDetail,
    <PhotoDetailSkeleton />
);

export default PhotoDetail;