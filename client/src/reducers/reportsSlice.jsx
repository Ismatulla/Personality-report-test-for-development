import { createSlice } from "@reduxjs/toolkit";
import { getUsername } from "../utils/localStorage";
const initialState = {
  username: getUsername() ? getUsername() : null,
};

const reportSlice = createSlice({
  name: "reportResult",
  initialState,
  reducers: {
    reports: (state, action) => {
      state.username = action.payload;
    },
  },
});

export default reportSlice.reducer;
export const { reports } = reportSlice.actions;
