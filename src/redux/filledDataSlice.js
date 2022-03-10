import { createSlice } from "@reduxjs/toolkit";

export const filledDataSlice = createSlice({
  name: "filledData",
  initialState: {
    value: {},
  },
  reducers: {
    setFilledData: (state, action) => {
      state.value = {...state.value,...action.payload};
    },
  },
});

export const { setFilledData } = filledDataSlice.actions;
export default filledDataSlice.reducer;
