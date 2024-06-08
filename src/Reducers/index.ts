import { combineReducers } from "@reduxjs/toolkit";
import donationReducer from "./donationSlice";

const rootReducer = combineReducers({
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
