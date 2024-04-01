import { createSlice } from "@reduxjs/toolkit";

const GlobalSlice = createSlice({
  name: "Global",
  initialState: {
    isShow: false,
  },
  reducers: {
    ShowSlider: (state) => {
      state.isShow = true;
    },
    closeSlider: (state) => {
      state.isShow = false;
    },
  },
});
export const { ShowSlider, closeSlider } = GlobalSlice.actions;
export default GlobalSlice.reducer;
