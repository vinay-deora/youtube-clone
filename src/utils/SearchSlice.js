import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
      state = Object.assign(state , action.payload)
      console.log("action.payload1111" ,action.payload)
    },
  },
});
export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;
