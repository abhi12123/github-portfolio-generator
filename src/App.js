import "./App.css";
import DataFields from "./components/DataFields";
import GenerateData from "./components/GenerateData";
import Preview from "./components/Preview";

function App() {
  return (
    <div className="App">
      <h1 className="w3-center w3-xxxlarge">Profilinator</h1>
      <p className="w3-center w3-xlarge w3-margin">
        Generate a downloadable portfolio website from your Github and Dev.to
      </p>
      <GenerateData/>
      <div className="w3-col s12 l3 m3">
        <DataFields/>
      </div>
      <div className="w3-col s12 l9 m9">
        <Preview/>
      </div>
    </div>
  );
}

export default App;
