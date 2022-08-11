# monero-playground
this is a collection of bash scripts to play with the monero [wallet-rpc](https://www.getmonero.org/resources/developer-guides/wallet-rpc.html)

there are also some scripts to start a local testnet for development of monero related software. (similar to what can be found in the [haveno makefile](https://github.com/haveno-dex/haveno/blob/490180884428d11b206c0bced412799c64ad3d1a/Makefile#L59))

## run a local testnet for development

run this in one terminal to start one daemon: 

```
./local1
```

then in another terminal do this to start a second daemon:

```
./local2
```
use this command to create a wallet for testing:

```
./monero-wallet-cli --testnet --generate-new-wallet ExampleLocalTestnetWallet
```
afterwards run this command in one of the 2 terminals where the daemon is running:
```
start_mining 9yCf2JpFA4kUiPeJEr27A1KnLVg786v2NeYDzN8HYyntRRPysRA23vwaKg3uSNV9XFikVML3KczSvMQFBLkdz3doJvVmur5 1
```
replace 9yCf2JpFA4kUiPeJEr27A1KnLVg786v2NeYDzN8HYyntRRPysRA23vwaKg3uSNV9XFikVML3KczSvMQFBLkdz3doJvVmur5 with the wallet that you just created.  
## getting started with the wallet-rpc

run this in one terminal to start the wallet with daemon: 

```
./start_wallet_rpc_with_daemon 
```

then in another terminal do:

```
./create_wallet
```

now you have a wallet to play with. Next time you run 

```
./open_wallet
```

instead of create wallet

## tips
* sometimes it is best to read the [wallet-rpc source file](https://github.com/monero-project/monero/blob/8349cfe4a63cfc63d50ce3818886b67a05e240a4/src/wallet/wallet_rpc_server.cpp#L2141) directly, because the docs are not updated sometimes. [Context](https://twitter.com/spirobel/status/1528978285354360832)
* start the wallet rpc like seen in start_wallet_rpc without setting a daemon, so it will  respond instantly to requests.
afterwards you can set the daemon connection with set_daemon
* the wallet-rpc is a delicate lady that needs to be handled with care. Sometimes she is a bit unresponsive and stubborn, especially if the daemon does not respond. If nothing else helps I can recommend:
```
kill -9 `pgrep monero`
```
[music tip](https://www.youtube.com/watch?v=rXwMrBb2x1Q)

## important to understand

if you go in with the assumption that this is an asynchronous program, you are mistaken. The wallet-rpc will be unresponsive sometimes. Many of the errors will not be sent back to the consumer of the rpc api and will be instead logged into the log file.

## credits

 * [seth for privacy monero download and install script](https://sethforprivacy.com/guides/run-a-monero-node-advanced/#download-and-install-monerod)
 
 * [the monero rpc](https://github.com/monero-project/monero/blob/8349cfe4a63cfc63d50ce3818886b67a05e240a4/src/wallet/wallet_rpc_server.cpp)

 prs welcome for more scripts like this. Also open issues for quirks and small work arounds you found.

## update to the latest version of monero
(this is just a note to myself to update this repo. You can ignore this.)

run these commands to download the latest version of monero and
 copy the monero-wallet-rpc, monerod (daemon) and monero-wallet-cli

```
cd monero-binaries
./download_monero_binaries.sh
./move_binaries.sh

```
