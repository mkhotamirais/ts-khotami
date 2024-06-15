import { createSlice } from "@reduxjs/toolkit";

// type tInitialState = {
//   dark: boolean;
// };

const storedDark = localStorage.getItem("tskhotamiBasic");
const initialState = {
  dark: storedDark !== null ? JSON.parse(storedDark) : false,
  openNav: false,
};

const basicSlice = createSlice({
  name: "basic",
  initialState,
  reducers: {
    toggleDark(state) {
      state.dark = !state.dark;
    },
    removeDark(state) {
      state.dark = false;
    },
    toggleOpenNav(state) {
      state.openNav = !state.openNav;
    },
    removeOpenNav(state) {
      state.openNav = false;
    },
  },
});

export const { toggleDark, removeDark, toggleOpenNav, removeOpenNav } = basicSlice.actions;
export default basicSlice.reducer;
