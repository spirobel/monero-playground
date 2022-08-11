#!/bin/bash
tar xvf monero-linux-*.tar.bz2
rm monero-linux-*.tar.bz2
cp monero-x86_64-linux-gnu-*/monero-wallet-rpc ../monero-wallet-rpc
cp monero-x86_64-linux-gnu-*/monerod ../monerod
cp monero-x86_64-linux-gnu-*/monero-wallet-cli ../monero-wallet-cli

chmod +x ../monero-wallet-rpc
chmod +x ../monerod
chmod +x ../monero-wallet-cli