import { create } from "zustand";
import { persist } from "zustand/middleware";

export type PhotoInfo = {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
};

type PhotoState = {
  photo: PhotoInfo | null;
  setPhoto: (photo: PhotoInfo) => void;
};

export const usePhotoStore = create<PhotoState>()(
  persist(
    (set) => ({
      photo: null,
      setPhoto: (photo) => set({ photo }),
    }),
    {
      name: "photo-store",
      partialize: (state) => ({ photo: state.photo }),
    },
  ),
);
