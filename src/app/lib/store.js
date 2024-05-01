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
              id: "1",
              title: "Task 1",
              description: "Description 1",
              status: "TODO",
            },
            {
              id: "2",
              title: "Task 2",
              description: "Description 2",
              status: "IN_PROGRESS",
            },
            {
              id: "3",
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
              id: "4",
              title: "Task 4",
              description: "Description 4",
              status: "TODO",
            },
            {
              id: "5",
              title: "Task 5",
              description: "Description 5",
              status: "IN_PROGRESS",
            },
            {
              id: "6",
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
              id: "7",
              title: "Task 7",
              description: "Description 7",
              status: "TODO",
            },
            {
              id: "8",
              title: "Task 8",
              description: "Description 8",
              status: "IN_PROGRESS",
            },
            {
              id: "9",
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
              id: "10",
              title: "Task 10",
              description: "Description 10",
              status: "TODO",
            },
            {
              id: "11",
              title: "Task 11",
              description: "Description 11",
              status: "IN_PROGRESS",
            },
            {
              id: "12",
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
              id: "13",
              title: "Task 13",
              description: "Description 13",
              status: "TODO",
            },
            {
              id: "14",
              title: "Task 14",
              description: "Description 14",
              status: "IN_PROGRESS",
            },
            {
              id: "15",
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
              id: "16",
              title: "Task 16",
              description: "Description 16",
              status: "TODO",
            },
            {
              id: "17",
              title: "Task 17",
              description: "Description 17",
              status: "IN_PROGRESS",
            },
            {
              id: "18",
              title: "Task 18",
              description: "Description 18",
              status: "DONE",
            },
          ],
        },
      ],
      tasks: [],
      draggedTask: null,
      addNewTask: (projectId, title, description) =>
        set((state) => ({
          projects: state.projects.map((project) => {
            if (project.id === projectId) {
              return {
                ...project,
                tasks: [
                  ...project.tasks,
                  {
                    id: uuid(),
                    title,
                    description,
                    status: "TODO",
                  },
                ],
              };
            }
            return project;
          }),
        })),
      dragTask: (id) => set({ draggedTask: id }),
      deleteTask: (id) =>
        set((state) => ({
          projects: state.projects.map((project) => ({
            ...project,
            tasks: project.tasks.filter((task) => task.id !== id),
          })),
        })),
      editTask: (id, status) =>
        set((state) => ({
          projects: state.projects.map((project) => ({
            ...project,
            tasks: project.tasks.map((task) =>
              task.id === id ? { ...task, status } : task
            ),
          })),
        })),
    }),
    { name: "task-store", skipHydration: true } // server doesn't have access to localStorage
  )
);
