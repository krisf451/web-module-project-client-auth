import React, { useState } from "react";
import { useHistory } from "react-router";
import "./Login.css";

import { useDispatch } from "react-redux";
import { getCurrentUser } from "../features/friends/friendsSlice";

import axios from "axios";

const Login = () => {
  const { push } = useHistory();
  const dispatch = useDispatch();

  const [state, setState] = useState({
    credentials: {
      username: "",
      password: "",
      isLogged: true,
    },
  });

  const handleChange = (e) => {
    setState({
      credentials: {
        ...state.credentials,
        [e.target.name]: e.target.value,
      },
    });
  };

  const login = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/login", state.credentials)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        dispatch(getCurrentUser(state.credentials));
        push("/friends");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form className="login-form" onSubmit={login}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={state.credentials.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={state.credentials.password}
          onChange={handleChange}
        />
        <button>Log in</button>
      </form>
    </div>
  );
};

export default Login;
