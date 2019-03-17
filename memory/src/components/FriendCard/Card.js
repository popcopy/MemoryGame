import React from "react";
import "./style.css";

const FriendCard = props => {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} id={props.id}
          onClick={() => props.shuffleScoreCard(props.id)} className='shuffleScore' />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FriendCard;
