import React, { useEffect } from "react";
import "./FriendsList.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncFriends,
  getAllFriends,
} from "../features/friends/friendsSlice";
import FriendCard from "./FriendCard";

const FriendsList = () => {
  const dispatch = useDispatch();
  const friends = useSelector(getAllFriends);
  // console.log(friends);

  useEffect(() => {
    dispatch(fetchAsyncFriends());
  }, [dispatch]);
  return (
    <div className="friend-wrapper">
      <div className="friend-list">
        <h2>Friends</h2>
        <div className="friend-container">
          {friends &&
            friends.map((friend) => {
              return <FriendCard friend={friend} key={friend.id} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default FriendsList;
