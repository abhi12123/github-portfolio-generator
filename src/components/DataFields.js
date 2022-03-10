import React from "react";
import { useSelector } from "react-redux";
import TextInput from "./TextInput";

export default function DataFields({ setData }) {
  const filledData = useSelector(state=>state.filledData.value);

  const handleChangeForm = (e) => {
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
        <TextInput
          labelText="Name"
          name="name"
        />
        
        <TextInput
          labelText="Bio"
          name="bio"
        />

        <div className="w3-col l12 m12 s12">
          <label htmlFor="bio" className="w3-small">
            Profile image src
          </label>
          <input
            name="profilePic"
            value={filledData.profilePic}
            className="w3-input w3-border"
            onChange={(e) => handleChangeForm(e)}
          ></input>
          <img src={filledData.profilePic} className="w3-circle w3-image w3-col l6 m6 s6"></img>
          <img src={filledData.profilePic} className="w3-circle w3-image w3-col l6 m6 s6"></img>
        </div>

        <TextInput
          labelText="Blog"
          name="blog"
        />
        <TextInput
          labelText="Github"
          name="github"
        />
        <TextInput
          labelText="Company"
          name="company"
        />
        <TextInput
          labelText="Email"
          name="email"
        />
        <TextInput
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
