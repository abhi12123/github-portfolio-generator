import React from "react";
import { useSelector } from "react-redux";
import InputComp from "./InputComp";

export default function DataFields({ setData }) {
  const filledData = useSelector(state=>state.filledData.value);

  const handleChangeForm = (e) => {
    console.log(e)
    //dispatch change form

    // setForm({
    //   ...form,
    //   [e.target.name]: e.target.value,
    // });
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
        <title>${filledData.name}</title>
      </head>
      <body>`;
    const end = `</body>
    </html>`;
    var data =
      beg + document.getElementById("portfolio-website").outerHTML + end;
    var c = document.createElement("a");
    c.download = "portfolio.html";

    var t = new Blob([data], {
      type: "text/html",
    });
    c.href = window.URL.createObjectURL(t);
    c.click();
  };

  return (
    <>
      <form className="w3-margin w3-left">
        <InputComp
          labelText="Name"
          name="name"
        />
        <div className="w3-col l12 m12 s12">
          <label htmlFor="bio" className="w3-small">
            bio
          </label>
          <textarea
            name="bio"
            value={filledData.bio}
            className="w3-input w3-border"
            onChange={(e) => {
              handleChangeForm(e);
            }}
            rows="2"
          ></textarea>
        </div>

        <div className="w3-col l12 m12 s12">
          <label htmlFor="bio" className="w3-small">
            Profile image src
          </label>
          <input
            name="avatar_url"
            value={filledData.avatar_url}
            className="w3-input w3-border"
            onChange={(e) => handleChangeForm(e)}
          ></input>
          <img src={filledData.avatar_url} className="w3-circle w3-image w3-col l6 m6 s6"></img>
        </div>

        <InputComp
          labelText="Blog"
          name="blog"
        />
        <InputComp
          labelText="Github"
          name="html_url"
        />
        <InputComp
          labelText="Company"
          name="company"
        />
        <InputComp
          labelText="Email"
          name="email"
        />
        <InputComp
          labelText="Twitter"
          name="twitter_username"
        />
      </form>
      <div style={{ textAlign: "center" }} className='w3-pale-green'>
        <button
          className={`w3-green w3-round w3-button w3-ripple w3-margin`}
          onClick={() => download()}
        >
          Download HTML
        </button>
      </div>
    </>
  );
}
