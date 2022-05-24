#!/bin/bash
# Download binaryfate's GPG key
wget -q -O binaryfate.asc https://raw.githubusercontent.com/monero-project/monero/master/utils/gpg_keys/binaryfate.asc

# Verify binaryfate's GPG key
echo "1. Verify binaryfate's GPG key: "
gpg --keyid-format long --with-fingerprint binaryfate.asc

# Prompt user to confirm the key matches that posted on https://src.getmonero.org/resources/user-guides/verification-allos-advanced.html
echo
read -p "Does the above output match https://src.getmonero.org/resources/user-guides/verification-allos-advanced.html?" -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]
then
        # Import binaryfate's GPG key
        echo
        echo "----------------------------"
        echo "2. Import binaryfate's GPG key"
        gpg --import binaryfate.asc
fi

# Delete stale .bz2 Monero downloads
rm monero-linux-x64-*.tar.bz2

# Download hashes.txt
wget -q -O hashes.txt https://getmonero.org/downloads/hashes.txt

# Verify hashes.txt
echo
echo "--------------------"
echo "3. Verify hashes.txt"
gpg --verify hashes.txt

# Download latest 64-bit binaries
echo
echo "-------------------------------------"
echo "4. Download latest Linux binaries"
echo "Downloading..."
wget -q --content-disposition https://downloads.getmonero.org/cli/linux64

# Verify shasum of downloaded binaries
echo
echo "---------------------------------------"
echo "5. Verify hashes of downloaded binaries"
if shasum -a 256 -c hashes.txt -s --ignore-missing
then
        echo
        echo "Success: The downloaded binaries verified properly!"
else
        echo
        echo -e "\e[31mDANGER: The download binaries have been tampered with or corrupted\e[0m"
        rm -rf monero-linux-x64-*.tar.bz2
        exit 1
fi