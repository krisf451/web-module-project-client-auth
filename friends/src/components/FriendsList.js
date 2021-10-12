import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncFriends,
  getAllFriends,
} from "../features/friends/friendsSlice";

const FriendsList = () => {
  const dispatch = useDispatch();
  const data = useSelector(getAllFriends);
  console.log(data);

  useEffect(() => {
    dispatch(fetchAsyncFriends());
  }, [dispatch]);
  return (
    <div>
      <h2>Friends List</h2>
    </div>
  );
};

export default FriendsList;
