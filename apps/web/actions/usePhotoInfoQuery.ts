"use client";

import { useQuery } from "@tanstack/react-query";

type PhotoInfo = {
    id: string,
    author: string;
    width: number;
    height: number;
    url: string;
    download_url: string;
};

const PHOTO_INFO_URL = "https://picsum.photos/id/0/info";

async function fetchPhotoInfo(): Promise<PhotoInfo> {
    const response = await fetch(PHOTO_INFO_URL);

    if (!response.ok) {
        throw new Error("Failed to fetch photo info");
    }

    return response.json();
}

export function usePhotoInfoQuery() {
    return useQuery({
        queryKey: ["photo-info", 0],
        queryFn: fetchPhotoInfo,
    });
}
