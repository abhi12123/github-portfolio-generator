import axios from "axios";
import React, { useState } from "react";

export default function GenerateData() {
  const [githubId, setGithubId] = useState("");
  const [devtoId, setDevtoId] = useState("");
  const getGithubAccountData = async (e) => {
    e.preventDefault();
    const x = await axios.get(`https://api.github.com/users/${githubId}`);
    console.log(x.data);
    //send edv to req as well

    //dispatch both data
  };

  return (
    <form
      className="w3-center w3-padding"
      onSubmit={(e) => getGithubAccountData(e)}
    >
      <label htmlFor="login">
        Enter a Github Id <i class="fa-brands fa-github w3-xlarge"></i>{" "}
      </label>
      <input
        name="login"
        className="w3-input w3-content"
        onChange={(e) => setGithubId(e.target.value)}
        style={{ maxWidth: "350px" }}
      ></input>
      <i className='w3-italics'>or</i><br/>
      <label htmlFor="login">
        Enter a Devto Id <i class="fab fa-dev  w3-xlarge"></i>{" "}
      </label>
      <input
        name="login"
        className="w3-input w3-content"
        onChange={(e) => setDevtoId(e.target.value)}
        style={{ maxWidth: "350px" }}
      ></input>
      <button
        type="submit"
        className={`w3-green w3-round w3-button w3-ripple w3-disabled w3-margin`}
      >
        Generate Portfolio
      </button>
    </form>
  );
}
