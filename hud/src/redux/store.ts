import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";
import mapSlice from "./features/app/appSlice";
// ...
// import socketIO from "socket.io-redux";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    app: mapSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
