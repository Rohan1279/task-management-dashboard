import { create } from "zustand";
import { v4 as uuid } from "uuid";
import { persist } from "zustand/middleware";

export const useTaskStore = create(
  persist(
    (set) => ({
      projects: [
        {
          title: "Project 1",
          id: "1",
          description: "Description 1",
          tasks: [
            {
              title: "Task 1",
              description: "Description 1",
              status: "TODO",
            },
            {
              title: "Task 2",
              description: "Description 2",
              status: "IN_PROGRESS",
            },
            {
              title: "Task 3",
              description: "Description 3",
              status: "DONE",
            },
          ],
        },
        {
          title: "Project 2",
          id: "2",
          description: "Description 2",
          tasks: [
            {
              title: "Task 4",
              description: "Description 4",
              status: "TODO",
            },
            {
              title: "Task 5",
              description: "Description 5",
              status: "IN_PROGRESS",
            },
            {
              title: "Task 6",
              description: "Description 6",
              status: "DONE",
            },
          ],
        },
        {
          title: "Project 3",
          id: "3",
          description: "Description 3",
          tasks: [
            {
              title: "Task 7",
              description: "Description 7",
              status: "TODO",
            },
            {
              title: "Task 8",
              description: "Description 8",
              status: "IN_PROGRESS",
            },
            {
              title: "Task 9",
              description: "Description 9",
              status: "DONE",
            },
          ],
        },
        {
          title: "Project 4",
          id: "4",
          description: "Description 4",
          tasks: [
            {
              title: "Task 10",
              description: "Description 10",
              status: "TODO",
            },
            {
              title: "Task 11",
              description: "Description 11",
              status: "IN_PROGRESS",
            },
            {
              title: "Task 12",
              description: "Description 12",
              status: "DONE",
            },
          ],
        },
        {
          title: "Project 5",
          id: "5",
          description: "Description 5",
          tasks: [
            {
              title: "Task 13",
              description: "Description 13",
              status: "TODO",
            },
            {
              title: "Task 14",
              description: "Description 14",
              status: "IN_PROGRESS",
            },
            {
              title: "Task 15",
              description: "Description 15",
              status: "DONE",
            },
          ],
        },
        {
          title: "Project 6",
          id: "6",
          description: "Description 6",
          tasks: [
            {
              title: "Task 16",
              description: "Description 16",
              status: "TODO",
            },
            {
              title: "Task 17",
              description: "Description 17",
              status: "IN_PROGRESS",
            },
            {
              title: "Task 18",
              description: "Description 18",
              status: "DONE",
            },
          ],
        },
      ],
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
