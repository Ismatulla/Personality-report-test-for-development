import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
};

const sliceReportResult = createSlice({
  name: "reportResult",
  initialState,
  reducers: {
    reports: (state, action) => {
      state.data = action.payload;
    },
  },
});

export default sliceReportResult.reducer;
export const { reports } = sliceReportResult.actions;
