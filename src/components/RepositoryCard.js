import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function RepositoryCard(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const showUserRepository = (e) => {
    dispatch({ type: "repoID", repositoryID: props.repoID });
    //<Link to="/repositorydetails" target="_blank" rel="noopener noreferrer" />;
    navigate("/repositorydetails");
    //window.open("/repositorydetails", "_blank");
  };

  return (
    <div className="repository-card">
      <h1 className="repository-name">{props.name}</h1>
      <p className="repository-description">{props.description}</p>
      <p className="repository-created">
        Created on: {props.created_at.slice(0, 10)}
      </p>
      {props.showBtn && (
        <button className="show-more" onClick={showUserRepository}>
          Show more
        </button>
      )}
    </div>
  );
}

export default RepositoryCard;
