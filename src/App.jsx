import logo from "./logo.svg";
import "./App.css";
import Count from "./Components/Count.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Hellow pellow!</p>
        <Count name="Arnau"></Count>
      </header>
    </div>
  );
}

export default App;
