import { configureStore } from "@reduxjs/toolkit";
import friendsReducer from "./friends/friendsSlice";

export const store = configureStore({
  reducer: {
    friends: friendsReducer,
  },
});
