import { create } from "zustand";

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

export const usePhotoStore = create<PhotoState>((set) => ({
    photo: null,
    setPhoto: (photo) => set({ photo }),
}));
