import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <a
          className="App-link"
          href="../README.md"
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          See our Documentation here.
        </a>
      </header>
    </div>
  );
}

export default App;
