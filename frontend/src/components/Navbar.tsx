import React from "react";
import "./Navbar.css";
import { useConnect, useAccount, useDisconnect, useBalance } from "wagmi";
import { getFormattedAddress } from "../utils/formatted-address";

export const Navbar = () => {
  const { address, connector, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const { connect, connectors, pendingConnector, error } = useConnect();
  const { data, isLoading } = useBalance({ addressOrName: address });

  if (isConnected)
    return (
      <div className="container">
        <div className="profile">
          <p style={{ color: "#fff", fontWeight: "bold", fontSize: "1.2rem" }}>
            {address && getFormattedAddress(address)}{" "}
            <em style={{ fontSize: "12px", fontWeight: "400" }}>
              {data?.formatted} {data?.symbol}
            </em>
          </p>
          <p style={{ color: "#f3f3f3" }}>Connected to {connector?.name}</p>
        </div>
        <button className="btn" onClick={() => disconnect()}>
          Disconnect
        </button>
      </div>
    );

  return (
    <div className="container">
      <h3 className="logo">React TypeScript Hardhat Starter</h3>
      {connectors.map((connector) => (
        <button
          className="btn"
          disabled={!connector.ready}
          key={connector.id}
          onClick={() => connect({ connector })}
        >
          Connect Wallet
          {!connector.ready && " (unsupported)"}
          {isLoading &&
            connector.id === pendingConnector?.id &&
            " (connecting)"}
        </button>
      ))}

      {error && <div style={{ color: "red" }}>{error.message}</div>}
    </div>
  );
};

export default Navbar;
