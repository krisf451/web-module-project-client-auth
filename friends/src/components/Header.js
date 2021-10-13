import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useSelector } from "react-redux";
import { getUserState } from "./../features/friends/friendsSlice";

function Header() {
  const data = useSelector(getUserState);
  console.log("DATA", data);
  return (
    <nav className="header">
      <Link to="/">
        <img
          src="https://i.gyazo.com/55842b2a8f97b2418180cd0e5f0f8a59.png"
          className="header_logo"
          alt="logo"
        />
      </Link>
      <div className="header_nav">
        <Link className="header_link" to="/">
          <span>Login</span>
        </Link>
        <Link className="header_link" to="/logout">
          <span>Logout</span>
        </Link>
        {data.isLogged && (
          <Link className="header_link" to="/friends">
            <span>Friends</span>
          </Link>
        )}
        {data.isLogged && (
          <Link className="header_link" to="/friends/addFriend">
            <span>Add New Friend</span>
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Header;
