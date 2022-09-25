import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { WagmiConfig } from "wagmi";
import { client } from "./utils/wagmi-config";
import Navbar from "./components/Navbar";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <WagmiConfig client={client}>
      <Navbar />
      <App />
    </WagmiConfig>
  </React.StrictMode>
);
