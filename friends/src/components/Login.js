import React, { useState } from "react";
import { useHistory } from "react-router";
import "./Login.css";

import axios from "axios";

const Login = () => {
  const { push } = useHistory();
  const [state, setState] = useState({
    credentials: {
      username: "",
      password: "",
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
        // console.log(res);
        localStorage.setItem("token", res.data.payload);
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
