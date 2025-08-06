import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("theme") === "coffee" ? "coffee" : "silk",
  setTheme: (theme) => {
    localStorage.setItem("theme", theme);
    set({ theme });
  },
  toggleTheme: () =>
    set((state) => {
      const newTheme = state.theme === "coffee" ? "silk" : "coffee";
      localStorage.setItem("theme", newTheme);
      return { theme: newTheme };
    }),
}));
