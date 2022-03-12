import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilledData } from "../redux/filledDataSlice";

export default function TextAreaInput({ labelText, name }) {
  const filledData = useSelector((state) => state.filledData.value);
  const githubData = useSelector((state) => state.githubData.value);
  const devtoData = useSelector((state) => state.devtoData.value);

  const dispatch = useDispatch();
  return (
    <div className="w3-col l12 m12 s12 w3-border w3-padding w3-white w3-card w3-margin-bottom w3-round">
      <label className="w3-small" htmlFor={name}>
        {labelText} :{" "}
      </label>
      <textarea
        name={name}
        value={filledData[name]}
        rows='3'
        className="w3-input w3-border"
        onChange={(e) => dispatch(setFilledData({ [name]: e.target.value }))}
        style={{ fontSize: 12 }}
      ></textarea>
      <div style={{display:'flex',flexWrap:'wrap'}}>
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
      </div>
    </div>
  );
}
