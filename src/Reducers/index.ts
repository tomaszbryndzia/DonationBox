import { combineReducers } from "@reduxjs/toolkit";
import donationReducer from "./donationSlice";

const rootReducer = combineReducers({
  donation: donationReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
