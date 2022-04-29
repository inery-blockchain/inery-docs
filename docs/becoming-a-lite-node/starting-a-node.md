---
id: 1
title: Starting a Node #[chapter title]
description: Becoming a Lite Node - Chapter 2 #[article title] - Chapter [chapter no.]
hide_title: false
hide_table_of_contents: false
#sidebar_label:
#sidebar_position:
#custom_edit_url:
slug: /becoming-a-lite-node-2 #/[article title]-[chapter no.]
---

# Starting a Node

<br/>

To start a node, after downloading the Inery node package, you should enter the *ine.setup* folder, then in the *tools* folder change the *config.json* file.

In the Staked Accounts section change the PEER_ADDRESS to your own IP ADDRESS:

<br/>

```json title=".config.json"
"PEER_ADDRESS": "YOUR_IP_ADDRESS:9010"
```

<br/>

Also, change the NAME to your preferred node name, as well as PUBLIC_KEY and PRIVATE_KEY to public and private_key of your account:

<br/>

```json title=".config.json"
"NAME": "YOUR_NODE_NAME",
"PUBLIC_KEY": "YOUR_PUBLIC_KEY",
"PRIVATE_KEY":"YOUR_PRIVATE_KEY"
```

<br/>

After that, save the *config.json* file and go back to the *ine.setup* folder.

There you should run the *ine.py* script like:

<br/>

```shell
./ine.py --producers 1
```

<br/>

This will run the node, and create an appropriate node folder for you.
