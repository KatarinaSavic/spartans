import React from "react";
import RepositoryCard from "./RepositoryCard";
import UserCard from "./UserCard";

import { useSelector, useDispatch } from "react-redux";

const Projects = () => {
  const dispatch = useDispatch();
  const foundUser = useSelector((state) => state.newUser);
  const repositoryList = useSelector((state) => state.repositoryList);

  return (
    <>
      <UserCard
        name={foundUser.name}
        avatar_url={foundUser.avatar_url}
        bio={foundUser.bio}
        showBtn={false}
      />
      <h1 className="line">
        <i>
          REPOSITORIES REPOSITORIES REPOSITORIES REPOSITORIES REPOSITORIES
          REPOSITORIES REPOSITORIES
        </i>
      </h1>
      <div className="row repositories-grid">
        {repositoryList.map((repository) => {
          return (
            <div className="col-3">
              <RepositoryCard
                repoID={repository.id}
                name={repository.name}
                description={repository.description}
                created_at={repository.created_at}
                showBtn={true}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Projects;
