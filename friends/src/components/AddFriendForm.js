import React, { useState } from "react";
import "./AddFriendForm.css";
import { useDispatch, useSelector } from "react-redux";
import {
  postAsyncFriend,
  getAllFriends,
} from "../features/friends/friendsSlice";
import { useHistory } from "react-router-dom";

const AddFriendForm = () => {
  const { push } = useHistory();
  const dispatch = useDispatch();
  const friends = useSelector(getAllFriends);
  console.log("FRIENDS: ", friends);
  const [state, setState] = useState({
    id: Date.now(),
    name: "",
    age: "",
    email: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postAsyncFriend(state));
    setState({
      ...state,
      name: "",
      age: "",
      email: "",
    });
    push("/friends");
  };
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="add-form-container">
      <h1>Add New Friend</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={state.name}
          placeholder="Name"
          onChange={handleChange}
        />
        <input
          type="number"
          name="age"
          value={state.age}
          placeholder="Age"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          value={state.email}
          placeholder="Email"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddFriendForm;
