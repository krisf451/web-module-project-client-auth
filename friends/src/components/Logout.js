import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";
import { logout } from "../features/friends/friendsSlice";
import { useDispatch } from "react-redux";

const Logout = () => {
  const { push } = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    axiosWithAuth()
      .post("http://localhost:5000/api/logout")
      .then((res) => {
        // console.log(res);
        localStorage.removeItem("token");
        dispatch(logout());
        push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }, [push, dispatch]);
  return <div></div>;
};

export default Logout;
