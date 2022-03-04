import React from "react";

export default function Preview({ data }) {
  return (
    <div className="w3-black" id="portfolio-website" style={{ position: "relative" }}>
      <div
        className="w3-content w3-margin-16"
        id="myNavbar"
        style={{ position: "sticky", top: 0 }}
      >
        <div className="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
          <a
            href="#"
            className="w3-bar-item w3-button"
            style={{ width: "25% !important" }}
          >
            HOME
          </a>
          <a
            href="#about"
            className="w3-bar-item w3-button"
            style={{ width: "25% !important" }}
          >
            ABOUT
          </a>
          <a
            href="#photos"
            className="w3-bar-item w3-button"
            style={{ width: "25% !important" }}
          >
            PHOTOS
          </a>
          <a
            href="#contact"
            className="w3-bar-item w3-button"
            style={{ width: "25% !important" }}
          >
            CONTACT
          </a>
        </div>
      </div>

      <div className="w3-padding-large" id="main">
        <header
          className="w3-container w3-padding-32 w3-center w3-black"
          id="home"
        >
          <h1 className="w3-jumbo">
            <span className="w3-hide-small">I'm </span>{data.name}
          </h1>
          <p>{data.bio}</p>
          <img
            src={data.avatar_url}
            alt="boy"
            className="w3-image w3-circle"
            width="200"
            height="200"
          />
        </header>

        <div
          className="w3-content w3-justify w3-text-grey w3-padding-64"
          id="about"
        >
          <h2 className="w3-text-light-grey">My Name</h2>
          <hr style={{ width: "200px" }} className="w3-opacity" />
          <p>
            Some text about me. Some text about me. I am lorem ipsum consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
          <h3 className="w3-padding-16 w3-text-light-grey">My Skills</h3>
          <p className="w3-wide">Photography</p>
          <div className="w3-white">
            <div
              className="w3-dark-grey"
              style={{ height: "28px", width: "95%" }}
            ></div>
          </div>
          <p className="w3-wide">Web Design</p>
          <div className="w3-white">
            <div
              className="w3-dark-grey"
              style={{ height: "28px", width: "95%" }}
            ></div>
          </div>
          <p className="w3-wide">Photoshop</p>
          <div className="w3-white">
            <div
              className="w3-dark-grey"
              style={{ height: "28px", width: "95%" }}
            ></div>
          </div>
          <br />

          <div className="w3-row w3-center w3-padding-16 w3-section w3-light-grey">
            <div className="w3-quarter w3-section">
              <span className="w3-xlarge">11+</span>
              <br />
              Partners
            </div>
            <div className="w3-quarter w3-section">
              <span className="w3-xlarge">55+</span>
              <br />
              Projects Done
            </div>
            <div className="w3-quarter w3-section">
              <span className="w3-xlarge">89+</span>
              <br />
              Happy Clients
            </div>
            <div className="w3-quarter w3-section">
              <span className="w3-xlarge">150+</span>
              <br />
              Meetings
            </div>
          </div>

          <h3 className="w3-padding-24 w3-text-light-grey">My Reputation</h3>
          <img
            src={data.avatar_url}
            alt="Avatar"
            className="w3-left w3-circle w3-margin-right"
            style={{ width: "80px" }}
          />
          <p>
            <span className="w3-large w3-margin-right">Chris Fox.</span> CEO at
            Mighty Schools.
          </p>
          <p>John Doe saved us from a web disaster.</p>
          <br />

          <img
            src="https://i.pravatar.cc/300"
            alt="Avatar"
            className="w3-left w3-circle w3-margin-right"
            style={{ width: "80px" }}
          />
          <p>
            <span className="w3-large w3-margin-right">Rebecca Flex.</span> CEO
            at Company.
          </p>
          <p>No one is better than John Doe.</p>
        </div>

        <div className="w3-padding-64 w3-content w3-text-grey" id="contact">
          <h2 className="w3-text-light-grey">Contact Me</h2>
          <hr style={{ width: "20px%" }} className="w3-opacity" />

          <div className="w3-section">
            <p>
              <i className="fa-brands fa-twitter fa-fw w3-text-white w3-xxlarge w3-margin-right"></i>{" "}
              {data.twitter_username}
            </p>
            <p>
              <i className="fa-brands fa-github fa-fw w3-text-white w3-xxlarge w3-margin-right"></i>{" "}
              {data.login}
            </p>
            <p>
              <i className="fa-solid fa-blog fa-fw w3-text-white w3-xxlarge w3-margin-right">
                {" "}
              </i>{" "}
              {data.blog}
            </p>
          </div>
          <br />
          <p>Let's get in touch. Send me a message:</p>

          <form action="/action_page.php" target="_blank">
            <p>
              <input
                className="w3-input w3-padding-16"
                type="text"
                placeholder="Name"
                required=""
                name="Name"
              />
            </p>
            <p>
              <input
                className="w3-input w3-padding-16"
                type="text"
                placeholder="Email"
                required=""
                name="Email"
              />
            </p>
            <p>
              <input
                className="w3-input w3-padding-16"
                type="text"
                placeholder="Subject"
                required=""
                name="Subject"
              />
            </p>
            <p>
              <input
                className="w3-input w3-padding-16"
                type="text"
                placeholder="Message"
                required=""
                name="Message"
              />
            </p>
            <p>
              <button
                className="w3-button w3-light-grey w3-padding-large"
                type="submit"
              >
                <i className="fa fa-paper-plane"></i> SEND MESSAGE
              </button>
            </p>
          </form>
        </div>

        <footer className="w3-content w3-padding-64 w3-text-grey w3-xlarge">
          <i className="fa fa-facebook-official w3-hover-opacity"></i>
          <i className="fa fa-instagram w3-hover-opacity"></i>
          <i className="fa fa-snapchat w3-hover-opacity"></i>
          <i className="fa fa-pinterest-p w3-hover-opacity"></i>
          <i className="fa fa-twitter w3-hover-opacity"></i>
          <i className="fa fa-linkedin w3-hover-opacity"></i>
        </footer>
      </div>
    </div>
  );
}
