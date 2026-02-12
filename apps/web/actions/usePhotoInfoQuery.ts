"use client";

import {
  useQuery,
  type UseQueryOptions,
} from "@tanstack/react-query";
import { useEffect } from "react";
import { usePhotoStore, type PhotoInfo } from "@/stores/photoStore";

const DEFAULT_PHOTO_ID = 0;
const PHOTO_INFO_URL = `https://picsum.photos/id/${DEFAULT_PHOTO_ID}/info`;

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

export const PHOTO_QUERY_KEY = ["photo-info", DEFAULT_PHOTO_ID];

export function usePhotoInfoQuery(options: UsePhotoInfoQueryOptions = {}) {
  const setPhoto = usePhotoStore((state) => state.setPhoto);

  const query = useQuery({
    queryKey: PHOTO_QUERY_KEY,
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
