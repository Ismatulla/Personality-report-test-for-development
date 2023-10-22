import { configureStore } from "@reduxjs/toolkit";
import reportsSlice from "../reducers/reportsSlice";
import authSlice from "../reducers/authSlice";
import reportModalSlice from "../reducers/reportModalSlice";
const store = configureStore({
  reducer: {
    report: reportsSlice,
    auth: authSlice,
    reportModal: reportModalSlice,
  },

  devTools: true,
});

export default store;
