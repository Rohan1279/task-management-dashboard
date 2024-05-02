import create from "zustand";

const useAuthStore = create((set) => ({
  user: null,
  login: (username) => set({ user: username }),
  logout: () => set({ user: null }),
}));

export { useAuthStore };
