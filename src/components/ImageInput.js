import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilledData } from "../redux/filledDataSlice";

export default function ImageInput({ labelText, name }) {
  const filledData = useSelector((state) => state.filledData.value);
  const githubData = useSelector((state) => state.githubData.value);
  const devtoData = useSelector((state) => state.devtoData.value);

  const dispatch = useDispatch();
  return (
    <div className="w3-col l12 m12 s12">
      <label className="w3-small" htmlFor={name}>
        {labelText} :{" "}
      </label>
      <input
        name={name}
        value={filledData[name]}
        className="w3-input w3-border"
        onChange={(e) => dispatch(setFilledData({ [name]: e.target.value }))}
      ></input>
      <div className='w3-cell-row w3-padding-small '>
      {githubData[name] && (
        <div
            style={{ marginTop: "5px",width:'fit-content',cursor:'pointer' }}
            className="w3-green w3-padding-small w3-round-xlarge w3-margin-left w3-cell"
            onClick={()=>dispatch(setFilledData({[name]:githubData[name]}))}
          >
            <i className="w3-large w3-margin-right fa-brands fa-github w3-cell"></i>
            <img
            src={githubData[name]}
            className="w3-circle w3-image"
          ></img>
          </div>
      )}
      {devtoData[name] && (
        <div
          style={{ marginTop: "5px",width:'fit-content',cursor:'pointer' }}
          className="w3-orange w3-padding-small w3-round-xlarge w3-margin-left w3-cell"
          onClick={()=>dispatch(setFilledData({[name]:devtoData[name]}))}
        >
          <i className="w3-large w3-margin-right fa-brands fa-dev"></i>
          <img
            src={devtoData[name]}
            className="w3-circle w3-image"
          ></img>
        </div>
      )}
      </div>
      
    </div>
  );
}
