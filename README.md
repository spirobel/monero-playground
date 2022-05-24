# monero-playground
this is a collection of bash scripts to play with the monero [wallet-rpc](https://www.getmonero.org/resources/developer-guides/wallet-rpc.html)
## tips
* sometimes it is best to read the [wallet-rpc source file](https://github.com/monero-project/monero/blob/8349cfe4a63cfc63d50ce3818886b67a05e240a4/src/wallet/wallet_rpc_server.cpp#L2141) directly, because the docs are not updated sometimes. [Context](https://twitter.com/spirobel/status/1528978285354360832)
* start the wallet rpc like seen in start_wallet_rpc without setting a daemon, so it will  respond instantly to requests.
afterwards you can set the daemon connection with set_daemon
## credits
 [seth for privacy monero download and install script](https://sethforprivacy.com/guides/run-a-monero-node-advanced/#download-and-install-monerod)