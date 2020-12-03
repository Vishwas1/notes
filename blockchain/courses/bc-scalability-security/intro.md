## Introduction to blockchain

A blockchain is an abstraction that can be viewed as a DAG. 

> DAG stands of a Directed Acyclic Graph. It is a directed graph data structure that uses a topological ordering. The sequence can only go from earlier to later. DAG is often applied to problems related to data processing, scheduling, finding the best route in navigation, and data compression.

A blockchain can be defined as a DAG `l = <B, P>` such that block of `B` points to each other with pointers `P` and a special block `g \in B`, called _genesis block_, which does not point to any block but serves as the common first block. The new block gets appended to chain by pointing towards the block that was appended to the chain list. 

More precisely pointers `P` are recoreded in a block as hash of the previous block. For example, `<b1, b0> /in P` is a pointer from block `b1` to `b0` that was appended immediately before `b1`: 

> this means that block `b1` contains the result of hash function applied to the content of block `b0`.


## blockhain abstravtion

> What does it mean when a blockchain abstraction is implemented in a distributed way?

Theblockchain systemoften refers to the distributed protocol that implementsthe aforementioned blockchain abstraction. Due to its distributed nature andbecause it records asset transfers, the blockchain system is also commonly re-ferred to as a distributed ledger.

We consider a communication graph `G = <V,E>` with nodes or processes `V` connected to each other through fixed communication links `E`.

Processes can act as clients by issuing transac-tions to the system and/or servers by _mining_, the action of trying to combine transactions into a block. 

For the sake of simplicity, we consider that eachprocess possesses a single account and that a transaction issued by process `pi` is a transfer of digital assets or coins from the account of the source process `pi` to the account of a destination process. `pj != pi`.

Blockchain construction at node `pi`:

```

1. l = <Bi, Pi>, local blockchian at node pi is directed acyclic graph of blocks Bi and pointers Pi
2. Upon reception of a new Block <Bj, Pj>
3. Bi <- Bi U Pj
4. Pi <- Pi U Pj

```




