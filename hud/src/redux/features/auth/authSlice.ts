import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { Action } from "@remix-run/router";

// Define a type for the slice state
interface CounterState {
  user: { name: string | null; username: string | null; role: string | null };
}

// Define the initial state using that type
const initialState: CounterState = {
  user: { name: null, username: null, role: null },
};

export const counterSlice = createSlice({
  name: "auth",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{
        name: string | null;
        username: string | null;
        role: string | null;
      }>
    ) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = initialState.user;
    },
  },
});

export const { setUser, logout } = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getAuthDetails = (state: RootState) => state.auth;

export default counterSlice.reducer;
