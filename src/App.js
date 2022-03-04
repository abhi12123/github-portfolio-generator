
import { useState } from "react";
import "./App.css";
import DataGenerator from "./components/DataGenerator";
import Preview from "./components/Preview";

function App() {
  const [data,setData] = useState({})
  return (
    <div className="App">
      <DataGenerator setData={setData}/>
      <Preview data={data}/>
    </div>
  );
}

export default App;
