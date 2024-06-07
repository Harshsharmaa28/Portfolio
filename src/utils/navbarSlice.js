import { createSlice } from "@reduxjs/toolkit";

const initialTheme = localStorage.getItem("Theme") === "true";

const navbarSlice = createSlice({
  name: "navbar",
  initialState: {
    showSelectedPage: localStorage.getItem("selectedPage") || "Home",
    selectedTheme: initialTheme,
  },
  reducers: {
    toggleSelectedPage: (state, action) => {
        state.showSelectedPage = action.payload;
        localStorage.setItem("selectedPage", action.payload); 
    },
    toggleSelectedTheme: (state) => {
      state.selectedTheme = !state.selectedTheme;
      localStorage.setItem("Theme", state.selectedTheme); 
    }
  },
});

export const { toggleSelectedPage, toggleSelectedTheme } = navbarSlice.actions;
export default navbarSlice.reducer;
