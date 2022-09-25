import { chain, createClient } from "wagmi";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { JsonRpcProvider, getNetwork } from "@ethersproject/providers";

// could be configure in .env file and call here with process.env.RPC_URL and process.env.CHAIN_ID
const ethProvider = new JsonRpcProvider(
  "http://127.0.0.1:8545/",
  getNetwork(1337)
);
const connector = new MetaMaskConnector({ chains: [chain.hardhat] });

export const client = createClient({
  autoConnect: true,
  provider: ethProvider,
  connectors: [connector],
});
