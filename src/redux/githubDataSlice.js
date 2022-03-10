import { createSlice } from "@reduxjs/toolkit";

export const githubDataSlice = createSlice({
  name: "githubData",
  initialState: {
    value: {},
  },
  reducers: {
    setGithubData: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setGithubData } = githubDataSlice.actions;
export default githubDataSlice.reducer;
