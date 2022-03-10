import React from "react";
import { useSelector } from "react-redux";
import ImageInput from "./ImageInput";
import TextInput from "./TextInput";

export default function DataFields({ setData }) {
  const filledData = useSelector((state) => state.filledData.value);

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
        <TextInput labelText="Name" name="name" />
        <TextInput labelText="Website" name="website" />
        <TextInput labelText="Bio" name="bio" />
        <ImageInput labelText="Profile Pic" name="profilePic" />
        <TextInput labelText="Location" name="location" />
        <TextInput labelText="Blog" name="blog" />
        <TextInput labelText="Github" name="github_username" />
        <TextInput labelText="Twitter" name="twitter_username" />
        <TextInput labelText="Company" name="company" />
        <TextInput labelText="Email" name="email" />
      </form>
      <div style={{ textAlign: "center" }} className="w3-pale-green">
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
