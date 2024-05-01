import { create } from "zustand";
import { v4 as uuid } from "uuid";
import { persist } from "zustand/middleware";

export const useTaskStore = create(
  persist(
    (set) => ({
      projects: [
        // {
        //   title: "Project 1",
        //   id: "1",
        //   description: "Description 1",
        //   tasks: [
        //     {
        //       id: "1",
        //       title: "as",
        //       description: "dasd",
        //       priority: "high",
        //       tags: ["gold"],
        //       deadline: "2024-05-01T18:00:00.000Z",
        //       assignee: "Lucy",
        //       status: "in progress",
        //     },
        //     {
        //       id: "2",
        //       title: "Task 2",
        //       description: "Description 2",
        //       priority: "low",
        //       tags: ["green"],
        //       deadline: "2024-05-01T18:00:00.000Z",
        //       assignee: "Lucy",
        //       status: "done",
        //     },
        //   ],
        // },
        // {
        //   title: "Project 2",
        //   id: "2",
        //   description: "Description 2",
        //   tasks: [
        //     {
        //       id: "3",
        //       title: "as",
        //       description: "dasd",
        //       priority: "high",
        //       tags: ["gold"],
        //       deadline: "2024-05-01T18:00:00.000Z",
        //       assignee: "Lucy",
        //       status: "in progress",
        //     },
        //     {
        //       id: "4",
        //       title: "Task 2",
        //       description: "Description 2",
        //       priority: "low",
        //       tags: ["green"],
        //       deadline: "2024-05-01T18:00:00.000Z",
        //       assignee: "Lucy",
        //       status: "done",
        //     },
        //   ],
        // },
      ],
      members: [
        {
          name: "🧔🏻‍♂️ fairuj",
        },
        {
          name: "👨🏻‍🦰 fahim",
        },
        {
          name: "👦🏻 asif",
        },
        {
          name: "👨🏻 imran",
        },
        {
          name: "👨🏻‍🦲 micheal",
        },
        {
          name: "👩🏻‍🦰    robin",
        },
      ],
      deleteProject: (id) =>
        set((state) => ({
          projects: state.projects.filter((project) => project.id !== id),
        })),

      tasks: [],
      draggedTask: null,
      addNewProject: (title, description, members) =>
        set((state) => ({
          projects: [
            ...state.projects,
            {
              title,
              description,
              id: uuid(),
              tasks: [],
              members,
            },
          ],
        })),
      addNewTask: (
        projectId,
        title,
        description,
        priority,
        tags,
        deadline,
        assignee,
        status
      ) =>
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
                    priority,
                    tags,
                    deadline,
                    assignee,
                    status,
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
