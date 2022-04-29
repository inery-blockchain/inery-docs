---
id: 1
title: Creating a Wallet on Inery #[chapter title]
description: Inery Wallet Guide - Chapter 2 #[article title] - Chapter [chapter no.]
hide_title: false
hide_table_of_contents: false
#sidebar_label:
#sidebar_position:
#custom_edit_url:
slug: /inery-wallet-guide-2 #/[article title]-[chapter no.]
---

# Creating a Wallet on Inery

<br/>

To create a wallet you need to type in:

<br/>

```shell
cline wallet create -n YOUR_WALLET_NAME --to-console
```

<br/>

This command will create a wallet on your node and give it the name *YOUR_WALLET_NAME*.

This will also print out your wallet password key to console, so be sure to keep your password secure and saved somewhere for unlocking your wallet. To create your wallet and save the password to a file instead of writing it to the console you may use:

<br/>

```shell
cline wallet create -n YOUR_WALLET_NAME --to-file
```

<br/>

It is also possible to create a wallet without providing a name by calling the `create` command without any name argument:

<br/>

```shell
cline wallet create --to-console
```

<br/>

In such a case, the wallet will be the **default** one aptly named as such.