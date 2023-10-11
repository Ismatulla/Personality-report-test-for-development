import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  character: {},
};

const sliceReportResult = createSlice({
  name: "reportResult",
  initialState,
  reducers: {
    reports: (state, action) => {
      state.character = action.payload;
    },
  },
});

export default sliceReportResult.reducer;
export const { reports } = sliceReportResult.actions;
