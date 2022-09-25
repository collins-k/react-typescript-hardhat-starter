import React from "react";
import logo from "./logo.svg";
import "./App.css";
import contractAddress from "./contracts/contract-address.json";
import Connect from "./components/Connect";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Lock contract was deployed to the address <br />{" "}
          <code style={{ color: "#61dafb" }}>{contractAddress.Lock}</code>
        </p>
        <Connect />
      </header>
    </div>
  );
}

export default App;
