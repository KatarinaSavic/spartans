import React from "react";
import RepositoryCard from "./RepositoryCard";
import UserCard from "./UserCard";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const RepositoryDetails = () => {
  const dispatch = useDispatch();

  const repositoryList = useSelector((state) => state.repositoryList);
  const repositoryID = useSelector((state) => state.repositoryID);

  const objectToShow = repositoryList.filter((rep) => rep.id === repositoryID);

  return (
    <>
      <h1 className="line">
        <i>
          REPOSITORY REPOSITORY REPOSITORY REPOSITORY REPOSITORY REPOSITORY
          REPOSITORY REPOSITORY REPOSITORY REPOSITORY REPOSITORY
        </i>
      </h1>
      <div className="row">
        <div className="col-4">
          <RepositoryCard
            name={objectToShow[0].name}
            description={objectToShow[0].description}
            created_at={objectToShow[0].created_at}
            showBtn={false}
          />
        </div>
        <div className="col-2 icons">
          <h3>Watchers</h3>
          <h4>{objectToShow[0].watchers_count}</h4>
        </div>
        <div className="col-2 icons">
          <h3>Stargazers</h3>
          <h4>{objectToShow[0].stargazers_count}</h4>
        </div>
        <div className="col-2 icons">
          <h3>Forks</h3>
          <h4>{objectToShow[0].fork_count}</h4>
        </div>
        <div className="col-2 icons">
          <h3>Licence</h3>
          <h4>{objectToShow[0].licence}</h4>
        </div>
      </div>
    </>
  );
};

export default RepositoryDetails;
