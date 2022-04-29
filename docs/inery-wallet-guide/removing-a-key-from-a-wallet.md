---
id: 4
title: Removing a Key from a Wallet #[chapter title]
description: Inery Wallet Guide - Chapter 5 #[article title] - Chapter [chapter no.]
hide_title: false
hide_table_of_contents: false
#sidebar_label:
#sidebar_position:
#custom_edit_url:
slug: /inery-wallet-guide-5 #/[article title]-[chapter no.]
---

# Removing a Key from a Wallet

<br/>

If you wish to remove a particular key from a specific named wallet, you may do so by executing the following command:

<br/>

```shell
cline wallet remove_key -n YOUR_WALLET_NAME PUBLIC_KEY_TO_REMOVE
```

<br/>

This will remove a public key from your wallet, granted your wallet has been unlocked beforehand.
If you wish to remove a key from a default wallet, you may simply invoke the same command without the `-n` option tag:

<br/>

```shell
cline wallet remove_key PUBLIC_KEY_TO_REMOVE
```
