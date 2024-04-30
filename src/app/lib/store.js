import { create } from "zustand";
import { v4 as uuid } from "uuid";
import { persist } from "zustand/middleware";

export const useTaskStore = create(
  persist(
    (set) => ({
      tasks: [],
      draggedTask: null,
      addNewTask: (title, description) =>
        set((state) => ({
          tasks: [
            ...state.tasks,
            { id: uuid(), title, description, status: "TODO" },
          ],
        })),
      dragTask: (id) => set({ draggedTask: id }),
      deleteTask: (id) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        })),
      editTask: (id, status) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, status } : task
          ),
        })),
    }),
    { name: "task-store", skipHydration: true } // server doesn't have access to localStorage
  )
);

// tasks: [],
// draggedTask: null,
// dragTask: (id) => set({ draggedTask: id }),
// addNewTask: (title, description) =>
//   set((state) => ({
//     tasks: [
//       ...state.tasks,
//       { id: uuid(), title, description, status: "TODO" },
//     ],
//   })),
// editTask: (id, status) =>
//   set((state) => ({
//     tasks: state.tasks.map((task) =>
//       task.id === id ? { ...task, status } : task
//     ),
//   })),
// deleteTask: (id) =>
//   set((state) => ({
//     tasks: state.tasks.filter((task) => task.id !== id),
//   })),
