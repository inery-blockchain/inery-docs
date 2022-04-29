---
id: 0
title: Using Inery CLI #[chapter title]
description: Command Line - Chapter 1 #[article title] - Chapter [chapter no.]
hide_title: true
hide_table_of_contents: false
sidebar_label: Using Inery CLI
sidebar_position: 1
#custom_edit_url:
keywords:
    - inery
    - api
    - commands
    - documentation
tags: [CLI, API, reference, commands, cline, Inery, database]
image: /media/main-icon.png
slug: /command-line-1 #/[article title]-[chapter no.]
---

## ![](https://img.shields.io/badge/CLINE-royalblue) VERSION

<hr/>

Retrieves version information.

<br/>

### CLIENT

<br/>

```shell title='Retrieve basic version information about the client:'
cline version client
```

```shell title='Expected output:'
v2.0.7
```

<br/>

### FULL

<br/>

```shell title='Retrieve full version information about the client:'
cline version full
```

```shell title='Expected output:'
v2.0.7-0d87dff8bee56179aa01472dd00a089b2aa7b9fa-dirty
```

<br/>

## ![](https://img.shields.io/badge/CLINE-royalblue) CREATE

<hr/>

Creates various items on the blockchain.

<br/>

### KEY

<br/>

```shell title='Create a key:'
cline create key [options]
```

```shell title='Expected output:'
Private key: 5JfDwUpADzN5pN9NCSvx9mtfVFdsFLMLQXaUKB5DAKG1rA1Qbg8
Public key: INE8ax1GprXbTxjeAWE5bXGsl8cTin89xdekTRSvYwRUFpD1uK5ZnE

```

```shell title='Optional arguments:'

--to-console # Print the key pair to the console.

--file # Save the key pair in the provided file.

```

<br/>

## ![](https://img.shields.io/badge/CLINE-royalblue) GET

<hr/>

<br/>

### INFO

<br/>

```shell title='Get current blockchain information:'
cline get info
```

<br/>

### BLOCK

<br/>

```shell title='Retrieve a full block from the blockchain:'
cline get block [option] block

# option : --header-state ->  get block header state from fork database instead

# mandatory : block -> the number of ID of the block to retrieve
```

```shell title='Output:'
{
        "timestamp": "2022-01-27T21:26:02.000",
        "producer": "ineio",
        "confirmed": 0,
        "previous": "000000e9e22a93a56d90eca5a978f1fa6ee722315f4f226d9ab0ccf23508d139",
        "transaction_mroot": "0000000000000000000000000000000000000000000000000000000000000000",
        "action_mroot": "b0d80f635db7aa01e9234a3c4b2f37757534acb4a6954b4d62362980d267343f",
        "schedule_version": 0,
        "new_producers": null,
        "producer_signature": "SIG_K1_Kia5XNAFxoPLdJtFUyADLmuWHzCJFwPhSs5yDpycR82AgH4Xm5s9Bm1szjdRXUBfYHvLQWB6	3ZgBpEY9UgDgSi3296VZPf",
        "transactions": [],
        "id": "000000ea299700ff21db49ffc938d7a1a3b179d111e2d2805dd2a9563d767b19",
        "block_num": 234,
        "ref_block_prefix": 4283030305
}
```

<br/>

### ACCOUNT

<br/>

```shell title='Retrieve an account from the blockchain:'
cline get account [option] <account_name>
```

The `account_name` represents the name of an account to retrieve and is **mandatory**.

```shell title='Options:'
-j # Save output as JSON
```

```shell title='Output:'
created: 2022-02-18T15:43:25.000
permissions:
    owner     1:    1 INE5z1ZD4rHSCDaiXREDGMgAAQm1pgAkmkc8Mj6hMNgHwcpmFQwbP
        active     1:    1 INE6dH8EstohYdqVxgJLuBv9oNsHBwT8ACGr8wJHvgh9nJc3b9eau
memory:
        quota:     1.001 MiB    used:     3.365 KiB

net bandwidth:
        staked:          1.0000 INR           (total stake delegated from account to self)
        delegated:       2.0000 INR           (total staked delegated to account from others)
        used:                 0 bytes
    available:        18.31 TiB
    limit:            18.31 TiB

cpu bandwidth:
        staked:          1.0000 INR           (total stake delegated from account to self)
        delegated:       2.0000 INR           (total staked delegated to account from others)
        used:                 0 us
        available:         1067 hr
        limit:             1067 hr

INR balances:
        liquid:        50000.0000 INR
        staked:            2.0000 INR
        unstaking:         0.0000 INR
        total:         50002.0000 INR

producers:     <not voted>
```

<br/>

### CODE

<br/>

```shell title='Retrieve the code and ABI for an account:'
cline get code [options] account_name
```

```shell title='Options:'
--code	TEXT # The name of the file to save the contract .wast/wasm to
--abi	TEXT # The name of the file to save the contract .abi to
--wasm	# Save contract as wasm
```

The `account_name` represents the name of an account to retrieve code for and is **mandatory**.

```shell title='Output:'
code hash: 86b610153cc930302d266bcd7d861a3ebebab73fa9a6120d88d0159eddbf59d1
```

<br/>

### ABI

<br/>

```shell title='Retrieve the ABI for an account:'
cline get abi [options] name
```

```shell title='Options:'
-f # The name of the file to save the contract .abi to
```

The `account_name` represents the name of an account to retrieve code for and is **mandatory**.

```shell title='Output:'
{
  "version": "ineio::abi/1.1",
  "types": [],
  "structs": [{
      "name": "create",
      "base": "",
      "fields": [{
          "name": "name",
          "type": "string"
        },{
          "name": "email",
          "type": "string"
        },{
          "name": "number",
          "type": "int32"
        }
      ]
    },{
      "name": "read",
      "base": "",
      "fields": [{
          "name": "id",
          "type": "uint64"
        }
      ]
    },{
      "name": "remove",
      "base": "",
      "fields": [{
          "name": "id",
          "type": "uint64"
        }
      ]
    },{
      "name": "update",
      "base": "",
      "fields": [{
          "name": "id",
          "type": "uint64"
        },{
          "name": "name",
          "type": "string"
        },{
          "name": "email",
          "type": "string"
        },{
          "name": "number",
          "type": "int32"
        }
      ]
    },{
      "name": "user",
      "base": "",
      "fields": [{
          "name": "id",
          "type": "uint64"
        },{
          "name": "name",
          "type": "string"
        },{
          "name": "email",
          "type": "string"
        },{
          "name": "number",
          "type": "int32"
        }
      ]
    }
  ],
  "actions": [{
      "name": "count",
      "type": "count",
      "ricardian_contract": ""
    },{
      "name": "create",
      "type": "create",
      "ricardian_contract": ""
    },{
      "name": "read",
      "type": "read",
      "ricardian_contract": ""
    },{
      "name": "remove",
      "type": "remove",
      "ricardian_contract": ""
    },{
      "name": "update",
      "type": "update",
      "ricardian_contract": ""
    }
  ],
  "tables": [{
      "name": "users",
      "index_type": "i64",
      "key_names": [],
      "key_types": [],
      "type": "user"
    }
  ],
  "ricardian_clauses": [],
  "error_messages": [],
  "abi_extensions": [],
  "variants": []
}
```

<br/>

### TABLE

<br/>

```shell title='Retrieve the contents of a database table:'
cline get table [options] account scope table
```

```shell title='Options:'
--limit # The maximum number of rows to return
--lower # JSON object of lower bound value of key, defaults to first
--upper # JSON object2 of upper bound value of key, defaults to last
--reverse # Iterate in reverse order
--key-type # The key type of index
```

```shell title='Positionals:'
--limit # The maximum number of rows to return
--lower # JSON object of lower bound value of key, defaults to first
--upper # JSON object2 of upper bound value of key, defaults to last
--reverse # Iterate in reverse order
--key-type # The key type of index
```

```shell title='Output:'
{
  "rows": [{
        "id": 0,
        "name": "Sony",
        "email": "sony@hotmail.com",
        "number": 99999
      }
  ],
  "more": false,
  "next_key": ""
}
```

<br/>

### SCOPE

<br/>

```shell title='Retrieve a list of scopes and tables owned by a contract:'
cline get scope [options] contract
```

```shell title='Options:'
--table # The name of the table as filter
--limit # The maximum number of rows to return
--lower # lower bound of scope
--upper # upper bound of scope
--reverse # Iterate in reverse order
```

```shell title='Positionals:'
contract # The contract who owns the table
```

```shell title='Output:'
{
  "rows": [{
        "code": "test523",
        "scope": "test523",
        "table": "users",
        "payer": "test523",
        "count": 1
  }],
"more": ""
}
```

<br/>

### CURRENCY

<br/>

Retrieve information related to standard currencies.

<br/>

#### BALANCE

<br/>

```shell title='Retrieve the balance of an account for a given currency:'
cline get currency balance [options] contract account
```

```shell title='Options:'
--json # Output in JSON format
```

```shell title='Positionals:'
contract # The contract that operates the currency
account	# The account to query balances for
```

```shell title='Example:'
cline get currency balance ineio.token test523
```

```shell title='Output:'
400.0000 INR
```

<br/>

#### STATS

<br/>

```shell title='Retrieve the stats of for a given currency:'
cline get currency stats contract symbol
```

```shell title='Positionals:'
contract # The contract that operates the currency
symbol # The symbol for the currency
```

```shell title='Example:'
cline get currency stats ineio.token INR
```

```shell title='Output:'
{
  "INR": {
      "supply": "353600000.0000 INR",
      "max_supply": "353600000.0000 INR",
      "issuer": "ineio"
  }
}
```

<br/>

### ACCOUNTS

<br/>

```shell title='Retrieve accounts associated with a public key:'
cline get accounts [OPTIONS] public_key
```

```shell title='Positionals:'
public_key # The public key to retrieve accounts for
```

```shell title='Example:'
cline get accounts INE5z1ZD4rHSCDaiXREDGMgAAQm1pgAkmkc8Mj6hMNgHwcpmFQwbP
```

```shell title='Output:'
{
  "account_names": [
      "createacc",
      "gafy",
      "sony",
      "vany"
  ]
}
```

<br/>

### TRANSACTION

<br/>

```shell title='Retrieve a transaction from the blockchain:'
cline get transaction [options] id
```

```shell title='Positionals:'
id  TEXT # ID of the transaction to retrieve
```

```shell title='Options:'
-b, --block-hint	UINT # The block number this transaction may be in
```

```shell title='Example:'
cline get transaction 824f248f65e38bf282636418a86b9a3b6e4b8636c45a4c6ef7ec21636cef4641 -b 1694783
```

```shell title='Output:'
{
  "id": "824f248f65e38bf282636418a86b9a3b6e4b8636c45a4c6ef7ec21636cef4641",
  "trx": {
    "receipt": {
      "status": "executed",
      "cpu_usage_us": 357,
      "net_usage_words": 18,
      "trx": [
        1,{
          "signatures": [
            "SIG_K1_K8dzy7qy8z5CT5qNmdTEMEDbaH2gY5oeQD8kVNij8rbzz4BeYoSUpf3HSDxJT5nmL7WnNJLtGWDFyhw3f1YvnRbFvLE2zk"
          ],
          "compression": "none",
          "packed_context_free_data": "",
          "packed_trx": "14921c623ddcab91ad760000000001000000000435694400000000a86cd44501000000000435694400000000a8ed32323211537264616e205374616d656e6b6f7669631b737264616e7374616d656e6b6f7669633436407a6f686f2e636f6dabcc7c2600"
        }
      ]
    },
    "trx": {
      "expiration": "2022-02-28T09:12:52",
      "ref_block_num": 56381,
      "ref_block_prefix": 1991086507,
      "max_net_usage_words": 0,
      "max_cpu_usage_ms": 0,
      "delay_sec": 0,
      "context_free_actions": [],
      "actions": [{
          "account": "clone1",
          "name": "create",
          "authorization": [{
              "actor": "clone1",
              "permission": "active"
            }
          ],
          "data": {
            "name": "Srdan Stamenkovic",
            "email": "srdanstamenkovic46@zoho.com",
            "number": 645713067
          },
          "hex_data": "11537264616e205374616d656e6b6f7669631b737264616e7374616d656e6b6f7669633436407a6f686f2e636f6dabcc7c26"
        }
      ],
      "transaction_extensions": [],
      "signatures": [
        "SIG_K1_K8dzy7qy8z5CT5qNmdTEMEDbaH2gY5oeQD8kVNij8rbzz4BeYoSUpf3HSDxJT5nmL7WnNJLtGWDFyhw3f1YvnRbFvLE2zk"
      ],
      "context_free_data": []
    }
  },
  "block_time": "2022-02-28T09:12:22.500",
  "block_num": 1694783,
  "last_irreversible_block": 1694881,
  "traces": []
}
```

<br/>

## ![](https://img.shields.io/badge/CLINE-royalblue) SET

<hr/>

<br/>

### CODE

<br/>

```shell title='Create or update the code on an account:'
cline set code [OPTIONS] account [code-file]
```

```shell title='Positionals:'
account TEXT REQUIRED # The account to set code for
code-file TEXT # The path containing the contract WASM
```

```shell title='Options:'
-b, --block-hint	UINT # The block number this transaction may be in
```

```shell title='Example:'
cline set code -j tomy123 cloning.wasm
```

```shell title='Output:'
{
  "transaction_id": "1b21ae6af018cb0856870ab7034cbdd516b1e4a94912521ba7432d1af064b6a9",
  "processed": {
    "id": "1b21ae6af018cb0856870ab7034cbdd516b1e4a94912521ba7432d1af064b6a9",
    "block_num": 1702429,
    "block_time": "2022-02-28T10:16:05.500",
    "producer_block_id": null,
    "receipt": {
      "status": "executed",
      "cpu_usage_us": 2348,
      "net_usage_words": 926
    },
    "elapsed": 2348,
    "net_usage": 7408,
    "scheduled": false,
    "action_traces": [{
        "action_ordinal": 1,
        "creator_action_ordinal": 0,
        "closest_unnotified_ancestor_action_ordinal": 0,
        "receipt": {
          "receiver": "ineio",
          "act_digest": "0b3b818c883cfff4f638e4abebf857016453c326b9a051c48996ae7e22a421a5",
          "global_sequence": 2139456,
          "recv_sequence": 1703031,
          "auth_sequence": [[
              "tomy123",
              1
            ]
          ],
          "code_sequence": 2,
          "abi_sequence": 2
        },
        "receiver": "ineio",
        "act": {
          "account": "ineio",
          "name": "setcode",
          "authorization": [{
              "actor": "tomy123",
              "permission": "active"
            }
          ],
          "data": {
            "account": "tomy123",
            "vmtype": 0,
            "vmversion": 0,
            "code": "0061736d0100000001a6011b60...nest 20 pages...00006000017f60027f7f1000b0488230000"
        },
        "context_free": false,
        "elapsed": 2057,
        "console": "",
        "trx_id": "1b21ae6af018cb0856870ab7034cbdd516b1e4a94912521ba7432d1af064b6a9",
        "block_num": 1702429,
        "block_time": "2022-02-28T10:16:05.500",
        "producer_block_id": null,
        "account_mem_deltas": [{
            "account": "tomy123",
            "delta": 186890
          }
        ],
        "except": null,
        "error_code": null
      }
    ],
    "account_mem_delta": null,
    "except": null,
    "error_code": null
  }
}
```

<br/>

### ABI

<br/>

```shell title='Create or update the abi on an account:'
cline set abi [OPTIONS] account [abi-file]
```

```shell title='Positionals:'
account TEXT (required) # The account to set the ABI for
abi-file TEXT # The path containing the contract ABI
```

```shell title='Options:'
-b, --block-hint	UINT # The block number this transaction may be in
```

```shell title='Example:'
cline set abi -j tomy123 cloning.abi
```

```shell title='Output:'
{
  "transaction_id": "6a7785ea6efb6fabb4fad31a3ef44bceaaa79c14d02cdbe0b3d61ac7b0a8151f",
  "processed": {
    "id": "6a7785ea6efb6fabb4fad31a3ef44bceaaa79c14d02cdbe0b3d61ac7b0a8151f",
    "block_num": 1703095,
    "block_time": "2022-02-28T10:21:38.500",
    "producer_block_id": null,
    "receipt": {
      "status": "executed",
      "cpu_usage_us": 311,
      "net_usage_words": 45
    },
    "elapsed": 311,
    "net_usage": 360,
    "scheduled": false,
    "action_traces": [{
        "action_ordinal": 1,
        "creator_action_ordinal": 0,
        "closest_unnotified_ancestor_action_ordinal": 0,
        "receipt": {
          "receiver": "ineio",
          "act_digest": "b2d3e1732ae9b042560867cb59fb3fceca95da28fd2d90a15d495917a903d70b",
          "global_sequence": 2140125,
          "recv_sequence": 1703700,
          "auth_sequence": [[
              "tomy123",
              4
            ]
          ],
          "code_sequence": 2,
          "abi_sequence": 2
        },
        "receiver": "ineio",
        "act": {
          "account": "ineio",
          "name": "setabi",
          "authorization": [{
              "actor": "tomy123",
              "permission": "active"
            }
          ],
          "data": {
            "account": "tomy123",
            "abi": "0e696e65696f3a3a6162692f312e31000b05636f756e740000066372656174650003046e616d6506737472696e6705656d61696c06737472696e67066e756d62657205696e743332047265616400010269640675696e7436340772656164616c6c00000a7265616462796e616d650001046e616d6506737472696e67097265616472616e67650002036c6f770675696e74363404686967680675696e7436340672656d6f766500010269640675696e7436340972656d6f7665616c6c00000c72656d6f766562796e616d650001046e616d6506737472696e670675706461746500040269640675696e743634046e616d6506737472696e6705656d61696c06737472696e67066e756d62657205696e743332047573657200040269640675696e743634046e616d6506737472696e6705656d61696c06737472696e67066e756d62657205696e7433320a00000000803c354505636f756e740000000000a86cd44506637265617465000000000000908cba0472656164000000002046938cba0772656164616c6c0000809266fa938cba0a7265616462796e616d65000000506c9a9b8cba097265616472616e67650000000000a84da5ba0672656d6f766500000088d1a84da5ba0972656d6f7665616c6c00a0a499fea84da5ba0c72656d6f766562796e616d650000000000a86c52d506757064617465000100000000007c15d6036936340000047573657200000000"
          },
          "hex_data": "0000006088e025cd90040e696e65696f3a3a6162692f312e31000b05636f756e740000066372656174650003046e616d6506737472696e6705656d61696c06737472696e67066e756d62657205696e743332047265616400010269640675696e7436340772656164616c6c00000a7265616462796e616d650001046e616d6506737472696e67097265616472616e67650002036c6f770675696e74363404686967680675696e7436340672656d6f766500010269640675696e7436340972656d6f7665616c6c00000c72656d6f766562796e616d650001046e616d6506737472696e670675706461746500040269640675696e743634046e616d6506737472696e6705656d61696c06737472696e67066e756d62657205696e743332047573657200040269640675696e743634046e616d6506737472696e6705656d61696c06737472696e67066e756d62657205696e7433320a00000000803c354505636f756e740000000000a86cd44506637265617465000000000000908cba0472656164000000002046938cba0772656164616c6c0000809266fa938cba0a7265616462796e616d65000000506c9a9b8cba097265616472616e67650000000000a84da5ba0672656d6f766500000088d1a84da5ba0972656d6f7665616c6c00a0a499fea84da5ba0c72656d6f766562796e616d650000000000a86c52d506757064617465000100000000007c15d6036936340000047573657200000000"
        },
        "context_free": false,
        "elapsed": 149,
        "console": "",
        "trx_id": "6a7785ea6efb6fabb4fad31a3ef44bceaaa79c14d02cdbe0b3d61ac7b0a8151f",
        "block_num": 1703095,
        "block_time": "2022-02-28T10:21:38.500",
        "producer_block_id": null,
        "account_mem_deltas": [{
            "account": "tomy123",
            "delta": 528
          }
        ],
        "except": null,
        "error_code": null
      }
    ],
    "account_mem_delta": null,
    "except": null,
    "error_code": null
  }
}
```

#### CONTRACT

<br/>

```shell title='Create or update the contract on an account:'
cline set  contract [OPTIONS] account [contract-dir] [wasm-file] [abi-file]
```

```shell title='Positionals:'
account TEXT(required) # The account to publish a contract for
contract-dir TEXT # The path containing the .wasm and .abi
wasm-file TEXT # The file containing the contract WASM
abi-file TEXT # The ABI for the contract
```

```shell title='Options:'
-b, --block-hint	UINT # The block number this transaction may be in
```

```shell title='Output:'
{
  "transaction_id": "1477087cdaf138303a8f4b1a6f5692fed50f058b0824200de300a0aaa27c0fe2",
  "processed": {
    "id": "1477087cdaf138303a8f4b1a6f5692fed50f058b0824200de300a0aaa27c0fe2",
    "block_num": 1704843,
    "block_time": "2022-02-28T10:36:12.500",
    "producer_block_id": null,
    "receipt": {
      "status": "executed",
      "cpu_usage_us": 3431,
      "net_usage_words": 956
    },
    "elapsed": 3431,
    "net_usage": 7648,
    "scheduled": false,
    "action_traces": [{
        "action_ordinal": 1,
        "creator_action_ordinal": 0,
        "closest_unnotified_ancestor_action_ordinal": 0,
        "receipt": {
          "receiver": "ineio",
          "act_digest": "d72bf93b986b475e33582089da81a7a9b872425f96b5bc4ff8a110deca688b89",
          "global_sequence": 2142661,
          "recv_sequence": 1705459,
          "auth_sequence": [[
              "tomy225",
              5
            ]
          ],
          "code_sequence": 2,
          "abi_sequence": 2
        },
        "receiver": "ineio",
        "act": {
          "account": "ineio",
          "name": "setcode",
          "authorization": [{
              "actor": "tomy225",
              "permission": "active"
            }
          ],
          "data": {
            "account": "tomy225",
            "vmtype": 0,
            "vmversion": 0,
            "code": "0061736d0100000001a6011b6000006000017f60027f7f006003...next 20 pages..
        },
        "context_free": false,
        "elapsed": 2971,
        "console": "",
        "trx_id": "1477087cdaf138303a8f4b1a6f5692fed50f058b0824200de300a0aaa27c0fe2",
        "block_num": 1704843,
        "block_time": "2022-02-28T10:36:12.500",
        "producer_block_id": null,
        "account_mem_deltas": [{
            "account": "tomy225",
            "delta": 186890
          }
        ],
        "except": null,
        "error_code": null
      },{
        "action_ordinal": 2,
        "creator_action_ordinal": 0,
        "closest_unnotified_ancestor_action_ordinal": 0,
        "receipt": {
          "receiver": "ineio",
          "act_digest": "7ca9b71bf31d744abcb6b89f31ebd2aa5296f28da2bca835e7438a73a9f378eb",
          "global_sequence": 2142662,
          "recv_sequence": 1705460,
          "auth_sequence": [[
              "tomy225",
              6
            ]
          ],
          "code_sequence": 2,
          "abi_sequence": 2
        },
        "receiver": "ineio",
        "act": {
          "account": "ineio",
          "name": "setabi",
          "authorization": [{
              "actor": "tomy225",
              "permission": "active"
            }
          ],
          "data": {
            "account": "tomy225",
            "abi": "0e696e65696f3a3a6162692f312e31000b05636f756e740000066372656174650003046e616d6506737472696e6705656d61696c06737472696e67066e756d62657205696e743332047265616400010269640675696e7436340772656164616c6c00000a7265616462796e616d650001046e616d6506737472696e67097265616472616e67650002036c6f770675696e74363404686967680675696e7436340672656d6f766500010269640675696e7436340972656d6f7665616c6c00000c72656d6f766562796e616d650001046e616d6506737472696e670675706461746500040269640675696e743634046e616d6506737472696e6705656d61696c06737472696e67066e756d62657205696e743332047573657200040269640675696e743634046e616d6506737472696e6705656d61696c06737472696e67066e756d62657205696e7433320a00000000803c354505636f756e740000000000a86cd44506637265617465000000000000908cba0472656164000000002046938cba0772656164616c6c0000809266fa938cba0a7265616462796e616d65000000506c9a9b8cba097265616472616e67650000000000a84da5ba0672656d6f766500000088d1a84da5ba0972656d6f7665616c6c00a0a499fea84da5ba0c72656d6f766562796e616d650000000000a86c52d506757064617465000100000000007c15d6036936340000047573657200000000"
          },
          "hex_data": "000000a008e125cd90040e696e65696f3a3a6162692f312e31000b05636f756e740000066372656174650003046e616d6506737472696e6705656d61696c06737472696e67066e756d62657205696e743332047265616400010269640675696e7436340772656164616c6c00000a7265616462796e616d650001046e616d6506737472696e67097265616472616e67650002036c6f770675696e74363404686967680675696e7436340672656d6f766500010269640675696e7436340972656d6f7665616c6c00000c72656d6f766562796e616d650001046e616d6506737472696e670675706461746500040269640675696e743634046e616d6506737472696e6705656d61696c06737472696e67066e756d62657205696e743332047573657200040269640675696e743634046e616d6506737472696e6705656d61696c06737472696e67066e756d62657205696e7433320a00000000803c354505636f756e740000000000a86cd44506637265617465000000000000908cba0472656164000000002046938cba0772656164616c6c0000809266fa938cba0a7265616462796e616d65000000506c9a9b8cba097265616472616e67650000000000a84da5ba0672656d6f766500000088d1a84da5ba0972656d6f7665616c6c00a0a499fea84da5ba0c72656d6f766562796e616d650000000000a86c52d506757064617465000100000000007c15d6036936340000047573657200000000"
        },
        "context_free": false,
        "elapsed": 178,
        "console": "",
        "trx_id": "1477087cdaf138303a8f4b1a6f5692fed50f058b0824200de300a0aaa27c0fe2",
        "block_num": 1704843,
        "block_time": "2022-02-28T10:36:12.500",
        "producer_block_id": null,
        "account_mem_deltas": [{
            "account": "tomy225",
            "delta": 528
          }
        ],
        "except": null,
        "error_code": null
      }
    ],
    "account_mem_delta": null,
    "except": null,
    "error_code": null
  }
}
```

### ACCOUNT

<br/>

#### PERMISSION

<br/>

```shell title='Set parameters dealing with account permissions:'
cline set account permission [OPTIONS] account permission [authority] [parent]
```

```shell title='Positionals:'
account TEXT(required) # The account to set/delete a permission authority for
permission TEXT(required) # The permission name to set/delete an authority for
authority TEXT [delete] NULL, [create/update] public key, JSON string or filename defining the authority, [code] contract name
parent TEXT [create] # The permission name of this parents permission, defaults to 'active'
```

```shell title='Options:'
-b, --block-hint	UINT # The block number this transaction may be in
```

```shell title='Example:'
cline set account permission -j tomy225 mypermission INE5UQf4BcmPZ5vFQ68TFUjk994hCbFEDvJvJEUdrdTPVkvPE2Hv5
```

```shell title='Output:'
{
  "transaction_id": "99bdd694b08f4fc262a8b9333038f7ab30b2cb82f295564e084344ee9630d101",
  "processed": {
    "id": "99bdd694b08f4fc262a8b9333038f7ab30b2cb82f295564e084344ee9630d101",
    "block_num": 1705841,
    "block_time": "2022-02-28T10:44:31.500",
    "producer_block_id": null,
    "receipt": {
      "status": "executed",
      "cpu_usage_us": 519,
      "net_usage_words": 20
    },
    "elapsed": 519,
    "net_usage": 160,
    "scheduled": false,
    "action_traces": [{
        "action_ordinal": 1,
        "creator_action_ordinal": 0,
        "closest_unnotified_ancestor_action_ordinal": 0,
        "receipt": {
          "receiver": "ineio",
          "act_digest": "8ccf70b1939ae3c9ac7f6b845940c3e8c5ed1cfcab6fd66f3f78545da637817c",
          "global_sequence": 2144591,
          "recv_sequence": 1706459,
          "auth_sequence": [[
              "tomy225",
              7
            ]
          ],
          "code_sequence": 2,
          "abi_sequence": 2
        },
        "receiver": "ineio",
        "act": {
          "account": "ineio",
          "name": "updateauth",
          "authorization": [{
              "actor": "tomy225",
              "permission": "active"
            }
          ],
          "data": {
            "account": "tomy225",
            "permission": "mypermission",
            "parent": "active",
            "auth": {
              "threshold": 1,
              "keys": [{
                  "key": "INE5UQf4BcmPZ5vFQ68TFUjk994hCbFEDvJvJEUdrdTPVkvPE2Hv5",
                  "weight": 1
                }
              ],
              "accounts": [],
              "waits": []
            }
          },
          "hex_data": "000000a008e125cd30a9c3d8c9abaa9700000000a8ed3232010000000100024d046d17c02c834a2b7b41c1e8e638f8145eb6132e1ef1b109ceb6e67d1f00ad01000000"
        },
        "context_free": false,
        "elapsed": 258,
        "console": "",
        "trx_id": "99bdd694b08f4fc262a8b9333038f7ab30b2cb82f295564e084344ee9630d101",
        "block_num": 1705841,
        "block_time": "2022-02-28T10:44:31.500",
        "producer_block_id": null,
        "account_mem_deltas": [{
            "account": "tomy225",
            "delta": 338
          }
        ],
        "except": null,
        "error_code": null
      }
    ],
    "account_mem_delta": null,
    "except": null,
    "error_code": null
  }
}
```

<br/>

## ![](https://img.shields.io/badge/CLINE-royalblue) TRANSFER

<hr/>

<br/>

```shell title='Transfer tokens from account to account:'
cline transfer [OPTIONS] sender recipient amount [memo]
```

```shell title='Positionals:'
  sender TEXT(required) # The account sending tokens
  recipient TEXT(required) # The account receiving tokens
  amount TEXT(required) # The amount of tokens to send
  memo TEXT # The memo for the transfer
```

```shell title='Output:'
{
  "transaction_id": "682f4c92d8800c38f4f13722d7410edabd0bd235f947a9ca6d540d166cba4084",
  "processed": {
    "id": "682f4c92d8800c38f4f13722d7410edabd0bd235f947a9ca6d540d166cba4084",
    "block_num": 1706736,
    "block_time": "2022-02-28T10:51:59.000",
    "producer_block_id": null,
    "receipt": {
      "status": "executed",
      "cpu_usage_us": 413,
      "net_usage_words": 16
    },
    "elapsed": 413,
    "net_usage": 128,
    "scheduled": false,
    "action_traces": [{
        "action_ordinal": 1,
        "creator_action_ordinal": 0,
        "closest_unnotified_ancestor_action_ordinal": 0,
        "receipt": {
          "receiver": "ineio.token",
          "act_digest": "35b2417f23273f6448186de99b28f71d75b4ba2ead469ff32f94996451d17a31",
          "global_sequence": 2146326,
          "recv_sequence": 440,
          "auth_sequence": [[
              "aa4",
              11900
            ]
          ],
          "code_sequence": 1,
          "abi_sequence": 1
        },
        "receiver": "ineio.token",
        "act": {
          "account": "ineio.token",
          "name": "transfer",
          "authorization": [{
              "actor": "aa4",
              "permission": "active"
            }
          ],
          "data": {
            "from": "aa4",
            "to": "tomy225",
            "quantity": "10.0000 INR",
            "memo": ""
          },
          "hex_data": "0000000000008831000000a008e125cda086010000000000044253550000000000"
        },
        "context_free": false,
        "elapsed": 157,
        "console": "",
        "trx_id": "682f4c92d8800c38f4f13722d7410edabd0bd235f947a9ca6d540d166cba4084",
        "block_num": 1706736,
        "block_time": "2022-02-28T10:51:59.000",
        "producer_block_id": null,
        "account_mem_deltas": [],
        "except": null,
        "error_code": null
      },{
        "action_ordinal": 2,
        "creator_action_ordinal": 1,
        "closest_unnotified_ancestor_action_ordinal": 1,
        "receipt": {
          "receiver": "aa4",
          "act_digest": "35b2417f23273f6448186de99b28f71d75b4ba2ead469ff32f94996451d17a31",
          "global_sequence": 2146327,
          "recv_sequence": 11897,
          "auth_sequence": [[
              "aa4",
              11901
            ]
          ],
          "code_sequence": 1,
          "abi_sequence": 1
        },
        "receiver": "aa4",
        "act": {
          "account": "ineio.token",
          "name": "transfer",
          "authorization": [{
              "actor": "aa4",
              "permission": "active"
            }
          ],
          "data": {
            "from": "aa4",
            "to": "tomy225",
            "quantity": "10.0000 INR",
            "memo": ""
          },
          "hex_data": "0000000000008831000000a008e125cda086010000000000044253550000000000"
        },
        "context_free": false,
        "elapsed": 12,
        "console": "",
        "trx_id": "682f4c92d8800c38f4f13722d7410edabd0bd235f947a9ca6d540d166cba4084",
        "block_num": 1706736,
        "block_time": "2022-02-28T10:51:59.000",
        "producer_block_id": null,
        "account_mem_deltas": [],
        "except": null,
        "error_code": null
      },{
        "action_ordinal": 3,
        "creator_action_ordinal": 1,
        "closest_unnotified_ancestor_action_ordinal": 1,
        "receipt": {
          "receiver": "tomy225",
          "act_digest": "35b2417f23273f6448186de99b28f71d75b4ba2ead469ff32f94996451d17a31",
          "global_sequence": 2146328,
          "recv_sequence": 2,
          "auth_sequence": [[
              "aa4",
              11902
            ]
          ],
          "code_sequence": 1,
          "abi_sequence": 1
        },
        "receiver": "tomy225",
        "act": {
          "account": "ineio.token",
          "name": "transfer",
          "authorization": [{
              "actor": "aa4",
              "permission": "active"
            }
          ],
          "data": {
            "from": "aa4",
            "to": "tomy225",
            "quantity": "10.0000 INR",
            "memo": ""
          },
          "hex_data": "0000000000008831000000a008e125cda086010000000000044253550000000000"
        },
        "context_free": false,
        "elapsed": 11,
        "console": "",
        "trx_id": "682f4c92d8800c38f4f13722d7410edabd0bd235f947a9ca6d540d166cba4084",
        "block_num": 1706736,
        "block_time": "2022-02-28T10:51:59.000",
        "producer_block_id": null,
        "account_mem_deltas": [],
        "except": null,
        "error_code": null
      }
    ],
    "account_mem_delta": null,
    "except": null,
    "error_code": null
  }
}
```

<br/>

## ![](https://img.shields.io/badge/CLINE-royalblue) NET

<hr/>

<br/>

### CONNECT

<br/>

```shell title='Start a new connection to a peer:'
cline net connect [OPTIONS] host
```

```shell title='Positionals:'
host TEXT REQUIRED # The hostname:port to connect to
```

```shell title='Example:'
cline net connect dev-test3.inery.network:9010
```

```shell title='Output:'
"added connection"
```

<br/>

### DISCONNECT

<br/>

```shell title='Close an existing connection:'
cline net disconnect [OPTIONS] host
```

```shell title='Positionals:'
host TEXT REQUIRED # The hostname:port to disconnect from.
```

```shell title='Example:'
cline net disconnect dev-test3.inery.network:9010
```

```shell title='Output:'
"connection removed"
```

<br/>

### STATUS

<br/>

```shell title='Status of existing connection:'
cline net status [OPTIONS] host
```

```shell title='Positionals:'
host TEXT REQUIRED # The hostname: port to query status of connection
```

```shell title='Example:'
cline net status dev-test3.inery.network:9010
```

```shell title='Output:'
{
  "peer": "dev-test3.inery.network:9010",
  "connecting": false,
  "syncing": false,
  "last_handshake": {
    "network_version": 1206,
    "chain_id": "54aaf66ac6bc5ce7cd1f035976401749542eaadf63ec36312889414e1dc272ed",
    "node_id": "fdaee14abbecdeddf0bd607a47c9c3cbdbb6e139e6275b180d200d3244a4cda2",
    "key": "INE1111111111111111111111111111111114T1Anm",
    "time": "1646053423273766570",
    "token": "0000000000000000000000000000000000000000000000000000000000000000",
    "sig": "SIG_K1_111111111111111111111111111111111111111111111111111111111111111116uk5ne",
    "p2p_address": "dev-test3.inery.network:9010 - fdaee14",
    "last_irreversible_block_num": 1721998,
    "last_irreversible_block_id": "001a468ec25df0806fa3d816af9908467b869bd564148dface2109865a656b8d",
    "head_num": 1721999,
    "head_id": "001a468fa902b9582f3fa453c2c8e727bb84e0086910e97811df9569850db22c",
    "os": "linux",
    "agent": "\"INE Test Agent\"",
    "generation": 1
  }
}
```

<br/>

### PEERS

<br/>

```shell title='Status of all existing peers:'
cline net peers [OPTIONS]
```

```shell title='Positionals:'
account TEXT # The account to set/delete a permission authority for
permission TEXT # The permission name to set/delete an authority for
authority TEXT [delete] NULL, [create/update] public key, JSON string or filename defining the authority, [code] contract name
parent TEXT [create] # The permission name of this parents permission, defaults to 'active'
```

```shell title='Example:'
cline net peers
```

```shell title='Output:'
[{
    "peer": "dev-test5.inery.network:9010",
    "connecting": false,
    "syncing": false,
    "last_handshake": {
      "network_version": 1206,
      "chain_id": "54aaf66ac6bc5ce7cd1f035976401749542eaadf63ec36312889414e1dc272ed",
      "node_id": "50917256e82a3b35fb2c4e046d0de4aa037b25b479f8ce156f42a3bf56670032",
      "key": "INE1111111111111111111111111111111114T1Anm",
      "time": "1646053423279984205",
      "token": "0000000000000000000000000000000000000000000000000000000000000000",
      "sig": "SIG_K1_111111111111111111111111111111111111111111111111111111111111111116uk5ne",
      "p2p_address": "dev-test5.inery.network:9010 - 5091725",
      "last_irreversible_block_num": 1721998,
      "last_irreversible_block_id": "001a468ec25df0806fa3d816af9908467b869bd564148dface2109865a656b8d",
      "head_num": 1721999,
      "head_id": "001a468fa902b9582f3fa453c2c8e727bb84e0086910e97811df9569850db22c",
      "os": "linux",
      "agent": "\"INE Test Agent\"",
      "generation": 1
    }
  },{
    "peer": "dev-test4.inery.network:9010",
    "connecting": false,
    "syncing": false,
    "last_handshake": {
      "network_version": 1206,
      "chain_id": "54aaf66ac6bc5ce7cd1f035976401749542eaadf63ec36312889414e1dc272ed",
      "node_id": "39ecb8568b2d2551288356caadfd45ec4eed93cfacc7700c145d6771c7e6a9ef",
      "key": "INE1111111111111111111111111111111114T1Anm",
      "time": "1646053423291008507",
      "token": "0000000000000000000000000000000000000000000000000000000000000000",
      "sig": "SIG_K1_111111111111111111111111111111111111111111111111111111111111111116uk5ne",
      "p2p_address": "dev-test4.inery.network:9010 - 39ecb85",
      "last_irreversible_block_num": 1721998,
      "last_irreversible_block_id": "001a468ec25df0806fa3d816af9908467b869bd564148dface2109865a656b8d",
      "head_num": 1721999,
      "head_id": "001a468fa902b9582f3fa453c2c8e727bb84e0086910e97811df9569850db22c",
      "os": "linux",
      "agent": "\"INE Test Agent\"",
      "generation": 1
    }
  },{
    "peer": "server1.inery.dev:9010",
    "connecting": false,
    "syncing": false,
    "last_handshake": {
      "network_version": 1206,
      "chain_id": "54aaf66ac6bc5ce7cd1f035976401749542eaadf63ec36312889414e1dc272ed",
      "node_id": "ec642fd8e5dbf2df26f180012e61b1078b59382fcb30d729fb24cc5c5b19437b",
      "key": "INE1111111111111111111111111111111114T1Anm",
      "time": "1646053423291901727",
      "token": "0000000000000000000000000000000000000000000000000000000000000000",
      "sig": "SIG_K1_111111111111111111111111111111111111111111111111111111111111111116uk5ne",
      "p2p_address": "server1.inery.dev:9010 - ec642fd",
      "last_irreversible_block_num": 1721998,
      "last_irreversible_block_id": "001a468ec25df0806fa3d816af9908467b869bd564148dface2109865a656b8d",
      "head_num": 1721999,
      "head_id": "001a468fa902b9582f3fa453c2c8e727bb84e0086910e97811df9569850db22c",
      "os": "linux",
      "agent": "\"INE Test Agent\"",
      "generation": 1
    }
  },{
    "peer": "dev-test3.inery.network:9010",
    "connecting": false,
    "syncing": false,
    "last_handshake": {
      "network_version": 1206,
      "chain_id": "54aaf66ac6bc5ce7cd1f035976401749542eaadf63ec36312889414e1dc272ed",
      "node_id": "fdaee14abbecdeddf0bd607a47c9c3cbdbb6e139e6275b180d200d3244a4cda2",
      "key": "INE1111111111111111111111111111111114T1Anm",
      "time": "1646054100867418629",
      "token": "0000000000000000000000000000000000000000000000000000000000000000",
      "sig": "SIG_K1_111111111111111111111111111111111111111111111111111111111111111116uk5ne",
      "p2p_address": "dev-test3.inery.network:9010 - fdaee14",
      "last_irreversible_block_num": 1723017,
      "last_irreversible_block_id": "001a4a89249f6f28245c39997376ca4d71158a0443a3987cc5b60a6305380c56",
      "head_num": 1723018,
      "head_id": "001a4a8a42e842df8e2bee76787affc343281ae4f3f06f8f9d54b9d83cd6415d",
      "os": "linux",
      "agent": "\"INE Test Agent\"",
      "generation": 1
    }
  }]
```

<br/>

## ![](https://img.shields.io/badge/CLINE-royalblue) WALLET

<hr/>

<br/>

### CREATE

<br/>

```shell title='Create a new wallet locally:'
cline wallet create [OPTIONS]
```

```shell title='Options:'
-h,--help # Print this help message and exit
-n,--name TEXT # The name of the new wallet
-f,--file TEXT # Name of file to write wallet password output to
--to-console # Print password to console.
```

```shell title='Example:'
cline wallet create -n mywallet --to-console
```

```shell title='Output:'
Creating wallet: mywallet
Save password to use in the future to unlock this wallet.
Without password imported keys will not be retrievable.
"PW5JhkPXuBzmjy8vCe1pRaEvKbRxNs5LojS69YCTE5KPoEKkXbdPZ"
```

<br/>

### OPEN

<br/>

```shell title='Open an existing wallet:'
cline wallet open [OPTIONS]
```

```shell title='Options:'
-n,--name TEXT # The name of the wallet to open
```

```shell title='Example:'
cline wallet open -n mywallet
```

```shell title='Output:'
Opened: mywallet
```

<br/>

### LOCK

<br/>

```shell title='Lock wallet:'
cline wallet lock [OPTIONS]
```

```shell title='Options:'
-n,--name TEXT # The name of the wallet to lock
```

```shell title='Example:'
cline wallet lock -n mywallet
```

```shell title='Output:'
Locked: mywallet
```

<br/>

### LOCK_ALL

<br/>

```shell title='Lock all unlocked wallets:'
cline wallet lock_all
```

```shell title='Example:'
cline wallet lock_all
```

```shell title='Output:'
Locked All Wallets
```

<br/>

### UNLOCK

<br/>

```shell title='Unlock wallet:'
cline wallet unlock [OPTIONS]
```

```shell title='Options:'
-n,--name TEXT # The name of the wallet to unlock
--password TEXT # The password returned by wallet create
```

```shell title='Example:'
cline wallet unlock -n mywallet --password PW5JhkPXuBzmjy8vCe1pRaEvKbRxNs5LojS69YCTE5KPoEKkXbdPZ
```

```shell title='Output:'
Unlocked: mywallet
```

<br/>

### IMPORT

<br/>

```shell title='Import private key into wallet:'
cline wallet import [OPTIONS]
```

```shell title='Options:'
-n,--name TEXT # The name of the wallet to import key into
--private-key TEXT # Private key in WIF format to import
```

```shell title='Example:'
cline wallet import -n mywallet --private-key 5Ht8Hp3cfMPBBbFJaTss2QMz7TWShiA6qeG7sLsEG8BUzKMdNwj
```

```shell title='Output:'
imported private key for: INE5PnPPJaw3cQcc573954cY7DUwUSKk37GmGYgrzBiUrPMrfw7Wg
```

<br/>

### REMOVE_KEY

<br/>

```shell title='Remove key from wallet:'
cline wallet remove_key [OPTIONS] key
```

```shell title='Positionals:'
key TEXT REQUIRED # Public key in WIF format to remove
```

```shell title='Options:'
-n,--name TEXT # The name of the wallet to remove key from
--password TEXT # The password returned by wallet create
```

```shell title='Example:'
cline wallet remove_key -n mywallet --password PW5JhkPXuBzmjy8vCe1pRaEvKbRxNs5LojS69YCTE5KPoEKkXbdPZ INE5PnPPJaw3cQcc573954cY7DUwUSKk37GmGYgrzBiUrPMrfw7Wg
```

```shell title='Output:'
removed private key for: INE5PnPPJaw3cQcc573954cY7DUwUSKk37GmGYgrzBiUrPMrfw7Wg
```

<br/>

### CREATE_KEY

<br/>

```shell title='Create private key within wallet:'
cline wallet create_key [OPTIONS] [key_type]
```

```shell title='Positionals:'
key_type K1/R1 # Key type to create (K1/R1)
```

```shell title='Options:'
-n,--name TEXT=default # The name of the wallet to create key into
```

```shell title='Example:'
cline wallet create_key -n mywallet K1
```

```shell title='Output:'
Created new private key with a public key of: "INE6bRLzTCa4b65p2asqqB25jErFNTXTLaTo17CuSSjdXDxfAy6fQ"
```

<br/>

### LIST

<br/>

```shell title='List opened wallets:'
cline wallet list
```

:::tip
`*` indicates an unlocked wallet.
:::

```shell title='Output:'
Wallets:
[
  "inery",
  "default",
  "mywallet *"
]
```

<br/>

### KEYS

<br/>

```shell title='List of public keys from all unlocked wallets:'
cline wallet keys
```

```shell title='Output:'
[
  "INE65t8vkjd8e2VGZ5AnkMD2VGUcym6yYzRd3rLpRcQ825y6Q75kR",
  "INE6bRLzTCa4b65p2asqqB25jErFNTXTLaTo17CuSSjdXDxfAy6fQ",
  "PUB_R1_7raBQLvbZxg2cczxxKabrihv5bSmUvZFAqx1fcAi4VvT5SZEEw"
]
```

<br/>

### PRIVATE_KEYS

<br/>

```shell title='List of private keys from an unlocked wallet in wif or PVT_R1 format:'
cline wallet private_keys [OPTIONS]
```

```shell title='Options:'
-n,--name TEXT=default # The name of the wallet to list keys from
--password TEXT # The password returned by wallet create
```

```shell title='Example:'
cline wallet private_keys -n mywallet --password PW5JhkPXuBzmjy8vCe1pRaEvKbRxNs5LojS69YCTE5KPoEKkXbdPZ
```

```shell title='Output:'
[[
  "INE65t8vkjd8e2VGZ5AnkMD2VGUcym6yYzRd3rLpRcQ825y6Q75kR",
  "5KN5NiDHUEGHejxbmsiv5Fz3k74QSWCHWGLwECxH3oEpp4RP5D9"
],[
  "INE6bRLzTCa4b65p2asqqB25jErFNTXTLaTo17CuSSjdXDxfAy6fQ",
  "5Hqif7syrTk9D74yHp73Bqb6fusLmknJ5RqaQxyamKkhC4DGBEw"
],[
  "PUB_R1_7raBQLvbZxg2cczxxKabrihv5bSmUvZFAqx1fcAi4VvT5SZEEw",
  "PVT_R1_21S2zDFiW1ohbFh3dBbsUyH9UoYeRmFwFWwK1yLTbGVbxsi9NY"
]]
```

<br/>

### STOP

<br/>

```shell title='Stop kined:'
cline wallet stop
```

<br/>

## ![](https://img.shields.io/badge/CLINE-royalblue) PUSH

<hr/>

<br/>

### ACTION

<br/>

```shell title='Push a transaction with a single action:'
cline push action [OPTIONS] account action data
```

```shell title='Positionals:'
account TEXT REQUIRED # The account providing the contract to execute
action TEXT REQUIRED # A JSON string or filename defining the action to execute
data TEXT REQUIRED # The arguments to the contract
```

```shell title='Options:'
-b, --block-hint	UINT # The block number this transaction may be in
```

<br/>

### TRANSACTION

<br/>

```shell title='Push an arbitrary JSON transaction:'
cline push transaction [OPTIONS] transaction
```

```shell title='Positionals:'
transaction TEXT REQUIRED # The JSON string or filename defining the transaction to push
```

```shell title='Options:'
-b, --block-hint	UINT # The block number this transaction may be in
```

<br/>

### TRANSACTIONS

<br/>

```shell title='Push an array of arbitrary JSON transactions:'
cline push transactions [OPTIONS] transactions
```

```shell title='Positionals:'
transactions TEXT REQUIRED # The JSON string or filename defining the array of the transactions to push
```