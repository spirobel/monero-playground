import { ViewPairs } from "@spirobel/monero-wallet-api";

const viewpairs = await ViewPairs.create([
  {
    primary_address:
      "5B5ieVKGSyfAyh68X6AFB48Gnx9diT8jPbWN6UcZHJUZVQSLRhaaHuHQz3dGuxxZDXPYgCXzrkerK3m6Q1tHoougR7VYyd9",
    secret_view_key:
      "10b9885324933ee6055b001a3ee4b70f6832b866db389ad023b51fe7e2e7ca01",
  },
  {
    primary_address:
      "57wmxQgZugZRrsaZ2mhcVtZqrUxAB6nXdEj4pnQ975Te2J2djFbBEubUFxTwxurF4cYE1oF8m26BkA9QcZZXLkf3FM7qX9U",
    secret_view_key:
      "8e4fe64233b5a0213e06ef4662582f72d47f7304502654485050c8ac06ee0309",
  },
]);
viewpairs.scan(1731707, (result) => {
  if ("error" in result) {
    console.error("Error during scan:", result.error);
  } else {
    console.log("Scan result:", result);
    // Here you can handle the scan result, e.g., save outputs to a database
  }
});
//console.log(viewpairs);
