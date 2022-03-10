import React from "react";
import { useSelector } from "react-redux";

export default function Preview() {
  const data = useSelector((state) => state.filledData.value);
  return (
    <div
      className="w3-sand"
      id="portfolio-website"
      style={{ position: "relative" }}
    >
      <div
        className="w3-content w3-margin-16 w3-sand"
        id="myNavbar"
        style={{ position: "sticky", top: 0 }}
      >
        <div className="w3-bar w3-center w3-small w3-margin-left">
          <a
            href="#"
            className="w3-bar-item w3-button w3-hover-brown w3-margin-top"
            style={{ width: "25% !important" }}
          >
            HOME
          </a>
          <a
            href="#about"
            className="w3-bar-item w3-button w3-hover-brown w3-margin-top"
            style={{ width: "25% !important" }}
          >
            ABOUT
          </a>
          <a
            href="#portfolio"
            className="w3-bar-item w3-button w3-hover-brown w3-margin-top"
            style={{ width: "25% !important" }}
          >
            PORTFOLIO
          </a>
          <a
            href="#contact"
            className="w3-bar-item w3-button w3-hover-brown w3-margin-top"
            style={{ width: "25% !important" }}
          >
            CONTACT
          </a>
        </div>
      </div>

      <div className="w3-padding-large" id="main">
        <header className="w3-container w3-padding-32 w3-center" id="home">
          <h1 className="w3-jumbo">{data.name}</h1>
          <p>{data.bio}</p>
          <img
            src={data.avatar_url}
            alt="boy"
            className="w3-image w3-circle"
            width="200"
            height="200"
          />
          <div
            className="w3-section "
            style={{ display: "flex", justifyContent: "center" }}
          >
            <p>
              <i className="fa-brands fa-twitter fa-fw w3-text-brown w3-xxlarge w3-margin-right w3-margin-left"></i>{" "}
              {data.twitter_username}
            </p>
            <p>
              <i className="fa-brands fa-github fa-fw w3-text-brown w3-xxlarge w3-margin-right w3-margin-left"></i>{" "}
              {data.login}
            </p>
            <p>
              <i className="fa-solid fa-blog fa-fw w3-text-brown w3-xxlarge w3-margin-right w3-margin-left">
                {" "}
              </i>{" "}
              {data.blog}
            </p>
          </div>
        </header>

        <div className="w3-content w3-justify" id="about">
          <h2 className="">About me</h2>
          <p style={{ textIndent: "100px" }} className="w3-text-dark-grey">
            {`Hello! My name is ${data.name} and I enjoy creating things that live on
            the internet. My interest in web development started back in 2012
            when I decided to try editing custom Tumblr themes — turns out
            hacking together a custom reblog button taught me a lot about HTML &
            CSS! Fast-forward to today, and I’ve had the privilege of working at
            an advertising agency, a start-up, a huge corporation, and a
            student-led design studio. My main focus these days is building
            accessible, inclusive products and digital experiences at
            Upstatement for a variety of clients. I also recently launched a
            course that covers everything you need to build a web app with the
            Spotify API using Node & React.`}
          </p>
        </div>
        <div className="w3-content w3-justify ">
          <h2 className="w3-padding-top-64">My Skills</h2>
          <div className="w3-row">
            <div className=" w3-col s12 m6 l6 w3-padding">
              <p className="w3-wide">HTML5</p>
              <div className="w3-white w3-round w3-border">
                <div
                  className="w3-brown"
                  style={{ height: "28px", width: "65%" }}
                ></div>
              </div>
            </div>
            <div className=" w3-col s12 m6 l6 w3-padding">
              <p className="w3-wide">React</p>
              <div className="w3-white w3-round w3-border">
                <div
                  className="w3-brown"
                  style={{ height: "28px", width: "65%" }}
                ></div>
              </div>
            </div>
            <div className=" w3-col s12 m6 l6 w3-padding">
              <p className="w3-wide">CSS</p>
              <div className="w3-white w3-round w3-border">
                <div
                  className="w3-brown"
                  style={{ height: "28px", width: "65%" }}
                ></div>
              </div>
            </div>
            <div className=" w3-col s12 m6 l6 w3-padding">
              <p className="w3-wide">ES6</p>
              <div className="w3-white w3-round w3-border">
                <div
                  className="w3-brown"
                  style={{ height: "28px", width: "65%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="w3-padding-top-64 w3-content" id="work">
          <h2 className="w3-margin-bottom">Work Experience</h2>
          <div className="w3-row  w3-content w3-card w3-white w3-padding-16  w3-margin-bottom">
            <h3 className="w3-col s12 m6 l6 w3-container w3-right-align ">
              ICT Academy of Kerala
            </h3>
            <div className="w3-col s12 m6 l6 w3-container">
              <h4>Intern</h4>
              <p>Jul 2016 - Aug 2016 </p>
              <p>Thiruvananthapuram, Kerala, India</p>
            </div>
          </div>
          <div className="w3-row  w3-content w3-card w3-white w3-padding-16  w3-margin-bottom">
            <h3 className="w3-col s12 m6 l6 w3-container w3-right-align ">
              ICT Academy of Kerala
            </h3>
            <div className="w3-col s12 m6 l6 w3-container">
              <h4>Intern</h4>
              <p>Jul 2016 - Aug 2016 </p>
              <p>Thiruvananthapuram, Kerala, India</p>
            </div>
          </div>
        </div>
        <div className="w3-padding-top-64 w3-content" id="portfolio">
          <h2 className="w3-margin-bottom">Porfolio</h2>
          <div className="w3-row w3-row-padding">
            <div className="w3-col s12 m6 l4 ">
              <div className="w3-container w3-margin-bottom w3-card w3-white">
                <img
                  className="w3-margin-top"
                  src="https://via.placeholder.com/468x60"
                  style={{
                    width: "100%",
                    aspectRatio: "1.4",
                    objectFit: "cover",
                  }}
                />
                <h4 className="w3-center">halcyon-site</h4>
                <p>Site for all Halcyon themes</p>
                <p>
                  <div className="w3-tag w3-teal w3-round-large">
                    JavaScript
                  </div>
                </p>
                <div className="w3-margin-bottom w3-xlarge">
                  <a
                    href="https://github.com/bchiang7/halcyon-site"
                    className="w3-margin-right"
                    target="_blank"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                  <a
                    href="https://github.com/bchiang7/halcyon-site"
                    className="w3-margin-right"
                    target="_blank"
                  >
                    <i className="fa-solid fa-globe"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="w3-col s12 m6 l4 ">
              <div className="w3-container w3-margin-bottom w3-card w3-white">
                <img
                  className="w3-margin-top"
                  src="https://via.placeholder.com/468x60"
                  style={{
                    width: "100%",
                    aspectRatio: "1.4",
                    objectFit: "cover",
                  }}
                />
                <h4 className="w3-center">halcyon-site</h4>
                <p>Site for all Halcyon themes</p>
                <p>
                  <div className="w3-tag w3-teal w3-round-large">
                    JavaScript
                  </div>
                </p>
                <div className="w3-margin-bottom w3-xlarge">
                  <a
                    href="https://github.com/bchiang7/halcyon-site"
                    className="w3-margin-right"
                    target="_blank"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                  <a
                    href="https://github.com/bchiang7/halcyon-site"
                    className="w3-margin-right"
                    target="_blank"
                  >
                    <i className="fa-solid fa-globe"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="w3-col s12 m6 l4 ">
              <div className="w3-container w3-margin-bottom w3-card w3-white">
                <img
                  className="w3-margin-top"
                  src="https://via.placeholder.com/468x60"
                  style={{
                    width: "100%",
                    aspectRatio: "1.4",
                    objectFit: "cover",
                  }}
                />
                <h4 className="w3-center">halcyon-site</h4>
                <p>Site for all Halcyon themes</p>
                <p>
                  <div className="w3-tag w3-teal w3-round-large">
                    JavaScript
                  </div>
                </p>
                <div className="w3-margin-bottom w3-xlarge">
                  <a
                    href="https://github.com/bchiang7/halcyon-site"
                    className="w3-margin-right"
                    target="_blank"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                  <a
                    href="https://github.com/bchiang7/halcyon-site"
                    className="w3-margin-right"
                    target="_blank"
                  >
                    <i className="fa-solid fa-globe"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w3-padding-top-64 w3-content" id="work">
          <h2 className="w3-margin-bottom">Blog</h2>
          <div className="w3-row  w3-content w3-margin-bottom w3-border w3-padding w3-row">
            <small className>Feb 27</small>
            <a
              className="w3-container w3-margin-left"
              href="https://abhinavvp.com/posts/portfolio-website-using-only-html/"
              target="_blank"
            >
              I made a portfolio website using only HTML without any Styles.
              This is what I learned
            </a>
          </div>
          <div className="w3-row  w3-content w3-margin-bottom w3-border w3-padding w3-row">
            <small className>Feb 27</small>
            <a
              className="w3-container w3-margin-left"
              href="https://abhinavvp.com/posts/portfolio-website-using-only-html/"
              target="_blank"
            >
              I made a portfolio website using only HTML without any Styles.
              This is what I learned
            </a>
          </div>
          <div className="w3-row  w3-content w3-margin-bottom w3-border w3-padding w3-row">
            <small className>Feb 27</small>
            <a
              className="w3-container w3-margin-left"
              href="https://abhinavvp.com/posts/portfolio-website-using-only-html/"
              target="_blank"
            >
              I made a portfolio website using only HTML without any Styles.
              This is what I learned
            </a>
          </div>
          <a className="w3-button" target="_blank" href="https://abhinavvp.com">
            Read more +{" "}
          </a>
        </div>
        <div className="w3-padding-top-64 w3-content" id="contact">
          <h2 className="w3-margin-bottom">Contact Me</h2>
          <div className="w3-center">
            <p className="">joedoe@gmail.com</p>
            <a href="mailto:someone@example.com" className="w3-button w3-brown">
              Send email
            </a>
            <div className="w3-center w3-xxlarge w3-margin-top">
              <i className="fa-brands fa-linkedin-in w3-btn"></i>
              <i className="fa-brands fa-twitter w3-btn"></i>
              <i className="fa-brands fa-instagram w3-btn"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
