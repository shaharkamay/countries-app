import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import DropDown from "./Components/DropDown";

function App() {
  return (
    <div className="App">
      <h1 className="title">Countries Dictionary</h1>
      <DropDown />
    </div>
  );
}

export default App;
