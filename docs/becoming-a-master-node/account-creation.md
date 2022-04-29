---
id: 0
title: Account Creation #[chapter title]
description: Becoming a Master Node - Chapter 1 #[article title] - Chapter [chapter no.]
hide_title: false
hide_table_of_contents: false
#sidebar_label:
#sidebar_position:
#custom_edit_url:
slug: /becoming-a-master-node-1 #/[article title]-[chapter no.]
---

# Account Creation

<br/>

:::tip
Follow the [*Starting a Node*](./becoming-a-master-node-2) guide first.
:::

<br/>

To create your account you need to type:

<br/>

```shell
cline system newaccount  --transfer createacc YOUR_ACC_NAME OWNER_KEY ACTIVE_KEY --stake-net "1 INR" --stake-cpu "1 INR" --buy-mem-bytes 1048576
```

<br/>

You should then import your active key into the wallet you created on the node:

<br/>

```shell
cline wallet import --private-key YOUR_PRIVATE_KEY
```
