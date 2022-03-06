import { createSlice } from "@reduxjs/toolkit";

export const filledDataSlice = createSlice({
  name: "filledData",
  initialState: {
    value: {
      name: "John Doe",
      avatar_url: "https://i.pravatar.cc/300",
      bio: `Web Developer`,
    },
  },
  reducers: {
    setData: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setData } = filledDataSlice.actions;
export default filledDataSlice.reducer;
