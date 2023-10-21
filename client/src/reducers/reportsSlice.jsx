import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  username: null,
  isOpen: true,
};

const reportSlice = createSlice({
  name: "reportResult",
  initialState,
  reducers: {
    reports: (state, action) => {
      state.username = action.payload;
    },
    modalWindow: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

export default reportSlice.reducer;
export const { reports, modalWindow } = reportSlice.actions;
