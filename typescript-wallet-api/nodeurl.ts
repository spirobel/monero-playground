import { ViewPair, NodeUrl } from "@spirobel/monero-wallet-api";
export const STAGENET_URL = "http://localhost:38081";
export const START_HEIGHT = 1788708;

const nodeurl = await NodeUrl.create(STAGENET_URL);
const response = await nodeurl.getBlocksBin({ start_height: START_HEIGHT });
console.log(response);
