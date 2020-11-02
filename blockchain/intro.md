## Introduction to blockchain

A blockchain is an abstraction that can be viewed as a DAG. 

> DAG stands of a Directed Acyclic Graph. It is a directed graph data structure that uses a topological ordering. The sequence can only go from earlier to later. DAG is often applied to problems related to data processing, scheduling, finding the best route in navigation, and data compression.

A blockchain can be defined as a DAG `l = <B, P>` such that block of `B` points to each other with pointers `P` and a special block `g \in B`, called _genesis block_, which does not point to any block but serves as the common first block. The new block gets appended to chain by pointing towards the block that was appended to the chain list. 

More precisely pointers `P` are recoreded in a block as hash of the previous block. For example, `<b1, b0> /in P` is a pointer from block `b1` to `b0` that was appended immediately before `b1`: 

> this means that block `b1` contains the result of hash function applied to the content of block `b0`.


## blockhain abstravtion

> What does it mean when a blockchain abstraction is implemented in a distributed way?

