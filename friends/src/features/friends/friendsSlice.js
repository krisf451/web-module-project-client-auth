import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosWithAuth from "../../utils/axiosWithAuth";

export const fetchAsyncFriends = createAsyncThunk(
  "friends/fetchAsyncFriends",
  async () => {
    const res = await axiosWithAuth().get(`http://localhost:5000/api/friends`);
    return res.data;
  }
);
export const postAsyncFriend = createAsyncThunk(
  "friends/postAsyncFriend",
  async (newUser) => {
    const res = await axiosWithAuth().post(
      `http://localhost:5000/api/friends`,
      newUser
    );
    addFriend(newUser);
    return res.data;
  }
);

const initialState = {
  friends: [],
  user: {},
};

const friendsSlice = createSlice({
  name: "friends",
  initialState,
  reducers: {
    addFriend: (state, action) => {
      state.friends.push(action.payload);
    },
    getCurrentUser: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = {};
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
    [postAsyncFriend.fulfilled]: (state, action) => {
      console.log("Posted Successfully!");
      return { ...state, friends: [...state.friends, action.payload] };
    },
  },
});

export const { addFriend, getCurrentUser, logout } = friendsSlice.actions;
export const getAllFriends = (state) => state.friends.friends;
export const getUserState = (state) => state.friends.user;
export default friendsSlice.reducer;
