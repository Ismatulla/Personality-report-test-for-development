import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "../reducers/reportResult";

const store = configureStore({
  reducer: rootReducers,
});

export default store;
