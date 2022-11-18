import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UserCard(props) {
  //const navigate = useNavigate();

  const findUsersRepositories = (e) => {
    props.findRepos(props.username);
  };
  return (
    <div className="user-card">
      <h1 className="user-name">{props.name}</h1>
      <p className="user-bio">{props.bio}</p>
      <img className="user-avatar" src={props.avatar_url} />

      {props.showBtn && (
        <button className="show-reps" onClick={findUsersRepositories}>
          Show projects
        </button>
      )}
    </div>
  );
}

export default UserCard;
