import { createSlice } from "@reduxjs/toolkit";

const navbarSlice = createSlice({
  name: "navbar",
  initialState: {
    showSelectedPage: localStorage.getItem("selectedPage") || "Home",
  },
  reducers: {
    toggleSelectedPage: (state, action) => {
        state.showSelectedPage = action.payload;
        localStorage.setItem("selectedPage", action.payload); 
    },
  },
});

export const { toggleSelectedPage } = navbarSlice.actions;
export default navbarSlice.reducer;
