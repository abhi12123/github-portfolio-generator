import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilledData } from "../redux/filledDataSlice";

export default function ArrayInput({ labelText, name }) {
  const filledData = useSelector((state) => state.filledData.value);
  const githubData = useSelector((state) => state.githubData.value);
  const devtoData = useSelector((state) => state.devtoData.value);
  const [value, setValue] = useState(70);
  const [skills, setSkills] = useState([]);
  const dispatch = useDispatch();
  return (
    <div className="w3-col l12 m12 s12 w3-border w3-padding w3-white w3-card w3-margin-bottom w3-round">
      <label className="w3-small" htmlFor={name}>
        {labelText} :{" "}
      </label>
      <form className="array-input ">
        <div className="w3-padding-small w3-col l6 m6 s6">
          <label className="w3-small">Name:</label>
          <input
            rows="3"
            className="w3-input w3-border"
            style={{ fontSize: 12 }}
          ></input>
        </div>
        <div className="w3-padding-small w3-col l6 m6 s6">
          <label className="w3-small">Level(optional):</label>
          <input
            rows="3"
            className="w3-input w3-border"
            type="range"
            step="10"
            min="0"
            max="100"
            style={{ fontSize: 12 }}
            onChange={(e) => setValue(e.target.value)}
          ></input>
          <output>{value}</output>
        </div>
      </form>
      {/* <div style={{display:'flex',flexWrap:'wrap'}}>
        {githubData[name] && (
          <div
            style={{
              marginTop: "5px",
              width: "fit-content",
              cursor: "pointer",
              fontSize: 12,
              padding: "2px 4px",
            }}
            className="w3-border w3-hover-white w3-margin-left w3-hover-shadow"
            onClick={() =>
              dispatch(setFilledData({ [name]: githubData[name] }))
            }
          >
            <i className="w3-large w3-margin-right fa-brands fa-github"></i>
            {githubData[name]}
          </div>
        )}
        {devtoData[name] && (
          <div
            style={{
              marginTop: "5px",
              width: "fit-content",
              cursor: "pointer",
              fontSize: 12,
              padding: "2px 4px",
            }}
            className="w3-border w3-hover-white w3-margin-left w3-hover-shadow"
            onClick={() => dispatch(setFilledData({ [name]: devtoData[name] }))}
          >
            <i className="w3-large w3-margin-right fa-brands fa-dev"></i>
            {devtoData[name]}
          </div>
        )}
      </div> */}
    </div>
  );
}
