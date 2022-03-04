import axios from "axios";
import React, { useEffect, useState } from "react";

export default function DataGenerator({ setData }) {
  const [form, setForm] = useState({});

  const getGithubAccountData = async (e) => {
    e.preventDefault();
    const x = await axios.get(`https://api.github.com/users/${form.githubId}`);
    console.log(x.data);
    setForm(x.data);
  };

  const handleChangeForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const download = () => {
    const beg = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <title>${form.name}</title>
      </head>
      <body>`;
    const end = `</body>
    </html>`;
    var data = beg+document.getElementById("portfolio-website").outerHTML+end;
    var c = document.createElement("a");
    c.download = "portfolio.html";

    var t = new Blob([data], {
      type: "text/html",
    });
    c.href = window.URL.createObjectURL(t);
    c.click();
  };

  useEffect(() => {
    setData(form);
  }, [form]);
  
  return (
    <>
      <h1>Gh-portfolio generator</h1>
      <form onSubmit={(e) => getGithubAccountData(e)}>
        <label htmlFor="githubId">Enter the Gh account</label>
        <input name="githubId" onChange={(e) => handleChangeForm(e)}></input>
        <button type="submit">Generate Portfolio</button>
      </form>
      <hr></hr>
      <form className="" style={{ display: "flex", flexWrap: "wrap" }}>
        <div>
          <label htmlFor="bio">bio</label>
          <textarea
            name="bio"
            value={form.bio}
            onChange={(e) => {
              handleChangeForm(e);
            }}
            rows="6"
          ></textarea>
        </div>
        <div>
          <label htmlFor="bio">Profile image</label>
          <img src={form.avatar_url} className="w3-circle"></img>
        </div>
        <div>
          <label htmlFor="blog">Blog</label>
          <input
            name="blog"
            value={form.blog}
            onChange={(e) => handleChangeForm(e)}
          ></input>
        </div>
        <div>
          <label htmlFor="name">name</label>
          <input
            name="name"
            value={form.name}
            onChange={(e) => handleChangeForm(e)}
          ></input>
        </div>
        <div>
          <label htmlFor="html_url">Github Url</label>
          <input
            name="html_url"
            value={form.html_url}
            onChange={(e) => handleChangeForm(e)}
          ></input>
        </div>
        <div>
          <label htmlFor="company">Comany</label>
          <input
            name="company"
            value={form.company}
            onChange={(e) => handleChangeForm(e)}
          ></input>
        </div>
        <div>
          <label htmlFor="email">email</label>
          <input
            name="email"
            value={form.email}
            onChange={(e) => handleChangeForm(e)}
          ></input>
        </div>
        <div>
          <label htmlFor="twitter_username">twitter</label>
          <input
            name="twitter_username"
            value={form.twitter_username}
            onChange={(e) => handleChangeForm(e)}
          ></input>
        </div>
      </form>
      <button
        className="w3-center w3-padding-large w3-margin w3-green"
        onClick={() => download()}
      >
        Generate and Download website
      </button>
    </>
  );
}
