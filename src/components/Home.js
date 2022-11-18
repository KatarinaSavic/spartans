import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function Home() {
  const [clicked, setClicked] = useState(0);
  const [text, setText] = useState("");
  const [username, setUsername] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const newUser = useSelector((state) => state.newUser);

  /*useEffect(() => {
    axios.get(`https://api.github.com/users`).then(
      (res) => {
        setUsers(res.data);
        //console.log(res.data);
      },
      [clicked]
    );
  });*/

  function handleChangeSearch(e) {
    setSearchInput(e.target.value);
  }

  function findUser() {
    axios
      .get(`https://api.github.com/users/${searchInput}`)
      .then((res) => {
        //vraca 200 OK i 404 not found

        setText("");
        setClicked(clicked + 1);
        const newUser = {
          name: res.data.name,
          avatar_url: res.data.avatar_url,
          bio: res.data.bio,
        };
        setUsername(res.data.login);
        dispatch({ type: "foundUser", payload: { newUser } });
      })
      .catch((err) => {
        setText("User does not exist. Try another :)");
        setClicked(0);
      });
  }

  const findRepos = (username) => {
    axios.get(`https://api.github.com/users/${username}/repos`).then((res) => {
      //vraca uvek 200 znaci proveriti da li je vratio praznu listu
      console.log(res.data.length);
      if (res.data.length > 0) {
        dispatch({ type: "repositoryList", payload: res.data });
        navigate("/repositories");
      } else {
        dispatch({ type: "repositoryList", payload: [] });
        alert("Repositories for this user does not exist");
      }
    });
  };

  return (
    <>
      <div class="jumbotron jumbotron-fluid page-header position-relative overlay-bottom">
        <h1 className="home-header1">Explore projects from</h1>
        <p className="home-header2">Whose projects you want to discover? </p>

        <input
          type="search"
          id="search"
          name="search"
          placeholder="Enter username"
          onChange={handleChangeSearch}
          className="search-box"
        />
        <button onClick={findUser} className="search-button">
          Search
        </button>
        <p className="home-error">{text} </p>
      </div>

      {clicked > 0 && (
        <UserCard
          name={newUser.name}
          avatar_url={newUser.avatar_url}
          bio={newUser.bio}
          username={username}
          findRepos={findRepos}
          showBtn={true}
        />
      )}
    </>
  );
}

export default Home;
