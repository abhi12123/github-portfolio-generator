import React from "react";
import { useSelector } from "react-redux";

export default function InputComp({ labelText, name }) {
  const filledData = useSelector(state=>state.filledData.value);
  const githubData = useSelector(state=>state.githubData.value);
  const devtoData = useSelector(state=>state.devtoData.value);
  return (
    <div className="w3-col l12 m12 s12">
      <label className="w3-small" htmlFor={name}>
        {labelText} :{" "}
        {filledData[name] && (
          <i
            class="fa-solid fa-delete-left w3-text-red w3-large"
            // onClick={() =>
            //   handleChangeForm({ target: { name: name, value: "" } })
            // }
          ></i>
        )}
      </label>
      <input
        name={name}
        value={filledData[name]}
        className="w3-input w3-border"
        // onChange={(e) => handleChangeForm(e)}
      ></input>
    </div>
  );
}
