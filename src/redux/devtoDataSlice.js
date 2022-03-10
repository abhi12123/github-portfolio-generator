import { createSlice } from "@reduxjs/toolkit";

export const devtoDataSlice = createSlice({
  name: "devtoData",
  initialState: {
    value: {},
  },
  reducers: {
    setDevtoData: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setDevtoData } = devtoDataSlice.actions;
export default devtoDataSlice.reducer;
