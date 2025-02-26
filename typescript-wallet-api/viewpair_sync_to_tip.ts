import { ViewPair } from "@spirobel/monero-wallet-api";
export const STAGENET_URL = "http://localhost:38081";

export const PRIMARY_ADDRESS =
  "5B5ieVKGSyfAyh68X6AFB48Gnx9diT8jPbWN6UcZHJUZVQSLRhaaHuHQz3dGuxxZDXPYgCXzrkerK3m6Q1tHoougR7VYyd9";
export const SECRET_VIEW_KEY =
  "10b9885324933ee6055b001a3ee4b70f6832b866db389ad023b51fe7e2e7ca01";
export const START_HEIGHT = 1788708;
const viewPair = await ViewPair.create(
  PRIMARY_ADDRESS,
  SECRET_VIEW_KEY,
  STAGENET_URL
);

await viewPair.scan(START_HEIGHT, (result) => {
  console.log(result);
});
console.log("synced to current height");
