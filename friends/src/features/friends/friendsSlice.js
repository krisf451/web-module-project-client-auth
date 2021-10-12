import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAsyncFriends = createAsyncThunk(
  "friends/fetchAsyncFriends",
  async () => {
    const res = await axios.get(`http://localhost:5000/api/friends`);
    return res.data;
  }
);

const initialState = {
  friends: [],
};

const friendsSlice = createSlice({
  name: "friends",
  initialState,
  reducers: {
    addFriends: (state, action) => {
      state.friends.push(action.payload);
    },
  },
  extraReducers: {
    [fetchAsyncFriends.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncFriends.fulfilled]: (state, action) => {
      console.log("Fetched Successfully!");
      return { ...state, friends: action.payload };
    },
    [fetchAsyncFriends.rejected]: () => {
      console.log("Fetch Failed");
    },
  },
});

export const { getFriends } = friendsSlice.actions;
export const getAllFriends = (state) => state.friends.friends;
export default friendsSlice.reducer;
