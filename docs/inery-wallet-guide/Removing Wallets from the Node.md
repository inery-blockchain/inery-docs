---
id: 5
title: Removing Wallets from the Node #[chapter title]
description: Inery Wallet Guide - Chapter 6 #[article title] - Chapter [chapter no.]
hide_title: false
hide_table_of_contents: false
#sidebar_label:
#sidebar_position:
#custom_edit_url:
slug: /inery-wallet-guide-6 #/[article title]-[chapter no.]
---

# Removing Wallets from the Node

<br/>

Currently, you have to go through a few steps to completely remove a wallet from your computer.
First, invoke the `stop` command to stop the wallet service running in the background:

<br/>

```shell
cline wallet stop
```

<br/>

After this, you should navigate to your node's root folder, and delete the complete *ineio-wallet* directory, thus removing all wallets on your node:

<br/>

```shell
rm -rf ineio-wallet
```
