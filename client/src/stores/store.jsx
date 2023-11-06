import { configureStore } from "@reduxjs/toolkit";
import reportModalSlice from "../reducers/reportModalSlice";
import authSlice from "../reducers/authSlice";
import profileDataSlice from "../reducers/profileDataSlice";

const store = configureStore({
  reducer: {
    reportModal: reportModalSlice,
    auth: authSlice,
    data: profileDataSlice,
  },

  devTools: true,
});

export default store;
