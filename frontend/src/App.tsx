import React from "react";
import logo from "./logo.svg";
import "./App.css";
import contractAddress from "./contracts/contract-address.json";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Lock contract was deployed to the address <br />{" "}
          <code style={{ color: "#61dafb" }}>{contractAddress.Lock}</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
