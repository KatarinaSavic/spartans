import logo from "./logo.svg";
import "./App.css";
import UserCard from "./components/UserCard";
import Home from "./components/Home";
import Projects from "./components/Projects";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useState } from "react";
import RepositoryDetails from "./components/RepositoryDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/repositories" element={<Projects />} />
          <Route path="/repositorydetails" element={<RepositoryDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
