import { createJSONStorage, persist } from "zustand/middleware";
import { create } from "zustand";

import { Task } from "@/components/Columns";

type ModalType = {
  data: Task[];
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  addTask: (task: Task) => void;
  removeTask: (id: number) => void;
};

export const useTask = create(
  persist<ModalType>(
    (set, get) => ({
      data: [],
      isOpen: false,
      onOpen: () => set({ isOpen: true }),
      onClose: () => set({ isOpen: false }),
      addTask: (task) =>
        set((state) => ({ data: [...state.data, task], isOpen: false })),
      removeTask: (id) =>
        set((state) => ({ data: state.data.filter((task) => task.id !== id) })),
    }),
    {
      name: "todos",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
