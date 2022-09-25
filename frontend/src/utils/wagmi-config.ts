import { configureChains, createClient, defaultChains } from "wagmi";
import { publicProvider } from "wagmi/providers/public";

const { provider, webSocketProvider } = configureChains(defaultChains, [
  publicProvider(),
]);

export const client = createClient({
  autoConnect: true,
  provider,
  webSocketProvider,
});
