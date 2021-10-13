import React from "react";
import { Link } from "react-router-dom";
import "./FriendCard.css";

const FriendCard = (props) => {
  const { friend } = props;

  return (
    <div className="card-item">
      <Link to={`/friends/${friend.id}`}>
        <div className="card-inner">
          <div className="card-top">
            <img
              src="https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg"
              alt="friends"
            />
          </div>
          <div className="card-bottom">
            <div className="card-info">
              <h4>Name: {friend.name}</h4>
              <p>Age: {friend.age}</p>
              <p>Email: {friend.email}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default FriendCard;
