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
  clearPhoto: () => void;
};

export const usePhotoStore = create<PhotoState>()(
  persist(
    (set, _get, api) => ({
      photo: null,
      setPhoto: (photo) => set({ photo }),
      clearPhoto: () => {
        set({ photo: null });
        api.persist.clearStorage();
      },
    }),
    {
      name: "photo-store",
      partialize: (state) => ({ photo: state.photo }),
    },
  ),
);
