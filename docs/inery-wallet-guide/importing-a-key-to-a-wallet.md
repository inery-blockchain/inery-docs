---
id: 3
title: Importing a Key to a Wallet #[chapter title]
description: Inery Wallet Guide - Chapter 4 #[article title] - Chapter [chapter no.]
hide_title: false
hide_table_of_contents: false
#sidebar_label:
#sidebar_position:
#custom_edit_url:
slug: /inery-wallet-guide-4 #/[article title]-[chapter no.]
---

# Importing a Key to a Wallet

<br/>

To import your key into the Inery wallet on your node you need to execute the following command:

<br/>

```shell
cline wallet import -n YOUR_WALLET_NAME –private-key
```

<br/>

This will prompt you to input the corresponding private key of your public-private key pair. By entering it, your public key will be added to your wallet. The list of keys in your wallet can be checked by executing the following command:

<br/>

```shell
cline wallet keys -n YOUR_WALLET_NAME
```
