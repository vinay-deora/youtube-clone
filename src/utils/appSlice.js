import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    togglerMenuHeader: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu:(state)=>{
      state.isMenuOpen=false
    }
  },
});

export const { togglerMenuHeader ,closeMenu} = appSlice.actions;
export default appSlice.reducer;
