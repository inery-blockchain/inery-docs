---
id: 1
title: Becoming a Master Node #[chapter title]
description: Becoming a Master Node - Chapter 2 #[article title] - Chapter [chapter no.]
hide_title: false
hide_table_of_contents: false
#sidebar_label:
#sidebar_position:
#custom_edit_url:
slug: /becoming-a-master-node-2 #/[article title]-[chapter no.]
---

# Becoming a Master Node

<br/>

To become a master node, you must first register yourself by executing:

<br/>

```shell
cline system regproducer YOUR_ACCOUNT_NAME YOUR_MASTER_NODE_KEY 0.0.0.0:8888
```

<br/>

Afterwards, having fulfilled our technical requirements, to activate the master node you should execute:

<br/>

```shell
cline system makeprod approve YOUR_ACCOUNT_NAME YOUR_ACCOUNT_NAME
```
