import { configureStore } from "@reduxjs/toolkit";
import reportsSlice from "../reducers/reportsSlice";
import authSlice from "../reducers/authSlice";
const store = configureStore({
  reducer: {
    report: reportsSlice,
    auth: authSlice,
  },

  devTools: true,
});

export default store;
