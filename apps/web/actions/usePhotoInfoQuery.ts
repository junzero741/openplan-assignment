"use client";

import { useQuery, type UseQueryOptions } from "@tanstack/react-query";
import { useEffect } from "react";
import { usePhotoStore, type PhotoInfo } from "@/stores/photoStore";

const PHOTO_INFO_URL = "https://picsum.photos/id/0/info";

async function fetchPhotoInfo(): Promise<PhotoInfo> {
    const response = await fetch(PHOTO_INFO_URL);

    if (!response.ok) {
        throw new Error("Failed to fetch photo info");
    }

    return response.json();
}

type UsePhotoInfoQueryOptions = Omit<
    UseQueryOptions<PhotoInfo, Error>,
    "queryKey" | "queryFn"
>;

export function usePhotoInfoQuery(options: UsePhotoInfoQueryOptions = {}) {
    const setPhoto = usePhotoStore((state) => state.setPhoto);

    const query = useQuery({
        queryKey: ["photo-info", 0],
        queryFn: fetchPhotoInfo,
        ...options,
    });

    useEffect(() => {
        if (query.data) {
            setPhoto(query.data);
        }
    }, [query.data, setPhoto]);

    return query;
}
