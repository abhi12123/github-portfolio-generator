import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setDevtoData } from "../redux/devtoDataSlice";
import { setGithubData } from "../redux/githubDataSlice";
import ArrayInput from "./ArrayInput";

export default function GenerateData() {
  const [githubId, setGithubId] = useState(undefined);
  const [devtoId, setDevtoId] = useState(undefined);
  const [githubSpinner, setGithubSpinner] = useState(false);
  const [devtoSpinner, setDevtoSpinner] = useState(false);
  const dispatch = useDispatch();
  const populateGithubData = (data) => {
    const {
      avatar_url,
      bio,
      blog,
      company,
      email,
      html_url,
      location,
      login,
      name,
      twitter_username,
    } = data;
    const ghData = {
      profilePic: avatar_url,
      bio,
      blog,
      company,
      email,
      githubUrl: html_url,
      location,
      github_username: login,
      name,
      twitter_username,
    };
    dispatch(setGithubData(ghData));
  };

  const populateDevtoData = (data) => {
    const {
      github_username,
      location,
      name,
      profile_image,
      summary,
      twitter_username,
      username,
      website_url,
    } = data;
    const devtoData = {
      github_username,
      location,
      name,
      profilePic: profile_image,
      bio: summary,
      twitter_username,
      devto_username: username,
      website: website_url,
    };
    dispatch(setDevtoData(devtoData));
  };

  const generateData = async (e) => {
    e.preventDefault();
    setGithubSpinner(true);
    setDevtoSpinner(true);
    try {
      const githubResp = githubId && await axios.get(
        `https://api.github.com/users/${githubId}`
      );
      populateGithubData(githubResp.data);
      setGithubSpinner(false)
    } catch (error) {
      alert("cannot find user with the given github id");
      setGithubSpinner(false)
    }
    try {
      console.log(devtoId)
      const devtoResp = devtoId && await axios.get(
        `https://dev.to/api/users/by_username?url=${devtoId}`
      );
      populateDevtoData(devtoResp.data);
      setDevtoSpinner(false);
    } catch (error) {
      alert("cannot find user with the given devto id");
      setDevtoSpinner(false);
    }
  };

  return (
    <form className="w3-center w3-padding" onSubmit={(e) => generateData(e)}>
      <label htmlFor="login">
        Enter a Github Id <i className="fa-brands fa-github w3-xlarge"></i>{" "}
      </label>
      {githubSpinner ? (
        <div>
          <i className="fas fa-spinner"></i>
        </div>
      ) : (
        <input
          name="login"
          className="w3-input w3-content"
          onChange={(e) => setGithubId(e.target.value)}
          style={{ maxWidth: "350px" }}
        ></input>
      )}
      <i className="w3-italics">or</i>
      <br />
      <label htmlFor="login">
        Enter a Devto Id <i className="fab fa-dev  w3-xlarge"></i>{" "}
      </label>
      {devtoSpinner ? (
        <div>
          <i className="fas fa-spinner"></i>
        </div>
      ) : (
        <input
          name="login"
          className="w3-input w3-content"
          onChange={(e) => setDevtoId(e.target.value)}
          style={{ maxWidth: "350px" }}
        ></input>
      )}
      <button
        type="submit"
        className="w3-green w3-round w3-button w3-ripple w3-margin"
        disabled={!githubId && !devtoId}
      >
        Generate Portfolio
      </button>
    </form>
  );
}
