import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilledData } from "../redux/filledDataSlice";

export default function ImageInput({ labelText, name }) {
  const filledData = useSelector((state) => state.filledData.value);
  const githubData = useSelector((state) => state.githubData.value);
  const devtoData = useSelector((state) => state.devtoData.value);

  const dispatch = useDispatch();
  return (
    <div className="w3-col l12 m12 s12 w3-card w3-padding w3-white w3-margin-bottom">
      <label className="w3-small" htmlFor={name}>
        {labelText} :{" "}
      </label>
      <input
        name={name}
        value={filledData[name]}
        className="w3-input w3-border"
        onChange={(e) => dispatch(setFilledData({ [name]: e.target.value }))}
        style={{height:25,fontSize:12}}
      ></input>
      <div style={{display:'flex',flexWrap:'wrap'}}>
      {githubData[name] && (
        <div
            style={{ marginTop: "5px",width:'fit-content',cursor:'pointer' }}
            className="w3-border w3-hover-white w3-margin-left w3-hover-shadow"
            onClick={()=>dispatch(setFilledData({[name]:githubData[name]}))}
          >
            <i className="w3-large fa-brands fa-github w3-display-position w3-white w3-round" style={{padding:'4px'}}></i>
            <img
            src={githubData[name]}
            style={{padding:4}}
            width='100'
          ></img>
          </div>
      )}
      {devtoData[name] && (
        <div
          style={{ marginTop: "5px",marginLeft:'5px',width:'fit-content',cursor:'pointer' }}
          className="w3-border w3-hover-white w3-hover-shadow"
          onClick={()=>dispatch(setFilledData({[name]:devtoData[name]}))}
        >
          <i className="w3-large fa-brands fa-dev w3-display-position w3-white w3-round" style={{padding:'4px'}}></i>
          <img
            src={githubData[name]}
            style={{padding:4}}
            width='100'
          ></img>
        </div>
      )}
      </div>
      
    </div>
  );
}
