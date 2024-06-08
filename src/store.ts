import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./Reducers"; // Import your root reducer

const store = configureStore({
  reducer: rootReducer,
});

export default store;
