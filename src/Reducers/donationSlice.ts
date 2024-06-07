import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DonationState {
  amount: string;
  month: number;
  year: number;
}

const initialState: DonationState = {
  amount: "",
  month: new Date().getMonth(),
  year: new Date().getFullYear(),
};

const dontationSlice = createSlice({
  name: "donation",
  initialState,
  reducers: {
    saveAmount(state, action: PayloadAction<string>) {
      state.amount = action.payload;
    },
    saveDate(state, action: PayloadAction<{ month: number; year: number }>) {
      state.month = action.payload.month;
      state.year = action.payload.year;
    },
  },
});

export const { saveDate, saveAmount } = dontationSlice.actions;
export default dontationSlice.reducer;
