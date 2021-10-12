import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";

const Logout = () => {
  const { push } = useHistory();
  useEffect(() => {
    axiosWithAuth()
      .post("http://localhost:5000/api/logout")
      .then((res) => {
        // console.log(res);
        localStorage.removeItem("token");
        push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }, [push]);
  return <div></div>;
};

export default Logout;
