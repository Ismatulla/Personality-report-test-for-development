import { configureStore } from "@reduxjs/toolkit";
import reportsSlice from "../reducers/reportsSlice";

const store = configureStore({
  reducer: {
    report: reportsSlice,
  },

  devTools: true,
});

export default store;
