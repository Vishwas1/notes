# Proof of Stake

- Proposer election:
- Block proposal
- Block finalization


## Proposer election

Most blockchain protocols work by specifying a designated node or set of nodes that areresponsible for block generation.

The process of choosing those nodes is sometimes calledproposer election, and is generally executed via a distributed protocol. For example, inBitcoin, that distributed protocol is proof-of-work.

Randomness is used to select committee members for block generation This is done through Verifiable Random Functions (VRF). 

In PoS systems, a common approach to proposer election relies on **verifiable randomfunctions (VRFs).** 

Algorithm:


- The ideais that each node will locally execute a `pre-defined function` that takes only public inputs,such as the `blockchain contents`, the `node’s own public key`, and the `current time`
- If thisfunction evaluates to `1`, the node is a proposer; otherwise, it is not. 

Example: considerthe PoSv3 protocol, which is used in Particl, Peercoin, BlackCoin, and Qtum.  Every timeinterval (e.g., 16 seconds), each node computes the following:

```
Hash (BlockchainContents || Coin || CurrentTime) ≤ DifficultyParameter
```

where,

- Hash(·) denotes a hash function
- ‘BlockchainContents’ is a condensed representationof the blockchain contents, 
- ‘Coin’ denotes a user’s token ID, 
- ‘CurrentTime’ the currentquantized timestamp, 
- ‘DifficultyParameter’ a system-wide parameter that ensures the number of proposers is not too high.

This VRF-based approach has the advantage of being fast, distributed, and random. 	A common,critical property of many VRF proposer election mechanisms is that they require input coins to be “old enough”. 

For example, the abpve equation could be modified such that only coins that werelast spent at leastmblocks ago can be used as valid inputs. From the perspective of oureconomic models, this requires users to hold tokens formblocks before they can participatein proposal. 


## Block proposal

The purpose of block proposal is to provide a suggested ordering of transactions that can beaccepted or rejected by the rest of the network.. For efficiency reasons, this is typically doneby the elected proposers

There are many variants of block proposal, butmost commonly, for a given block, each proposer at a given time slot assembles the mostrecent transactions into a block, and then shares its block with the rest of the network forapproval.

Once a proposer has been elected, the main uncertainty in the system is regardingwhere to append the block. 


In some blockchains like Algorand, there is no forking; in otherwords, the likelihood of the system producing two or more concurrently-proposed blocks(for instance) is chosen to be arbitrarily low (Chen and Micali, 2016; Gilad, Hemo, Micali,Vlachos, and Zeldovich, 2017). Hence the block proposer always perceives the blockchain asa single chain, and appends its block to the end of that global blockchain. In chain-basedprotocols, such as those using PoSv3 (e.g, Qtum, Particl), forking is much more common;this happens both because of network delays (a proposer may not know about the mostrecent block) and the fact that multiple proposers may be elected at the same time. Inchain-based protocols, proposers typically append their block to the **longest chain** known to the proposer at the time


## Finalization

Some cryptocurrencies include (or are starting to include) a procedure calledfinalization.Although finalization is not yet widespread, it is being considered for adoption in a fewmajor cryptocurrencies. 


> Finalization relies on a set of nodes that deposit stake inorder to be recognized asvalidators. As long as their stake is locked up, validators canparticipate in the finalization procedure. The finalization procedure consists of periodically(e.g., every 50 blocks) running a voting protocol among the validators.

The job of the validators is to choose one of the forks, and sealthat choice for posterity. The longer they remain validators, the longer they reap theserewards

## Slashing


If a validator misbehaves by, say, trying to finalizetwo blocks at the same height, the validator’s deposit will beslashed, or confiscated. InEthereum’s finalization protocol, Casper the Friendly Finality Gadget (FFG), 4% of theslashed funds are given to the node that reports the misbehavior, and the remaining 96% isburned so that nobody can spend it. 


- a node signals its intent to join the validator pool by sending aspecial deposit transaction to the network, 
- and all of its votes for blocks are also recorded in transactions (votes can be viewed as endorsements). v
- All transactions are signed with thevalidator’s private key, so if an observer notices two transactions from a validator votingfor conflicting blocks, the observer can prove to the rest of the network that the validatorwas misbehaving.
- The observer can then submit its own transaction with a link to thetwo offending transactions to claim its 4% finder’s fee.


## Reference 

- [Economics of Proof-of-Stake Payment Systems](https://pramodv.ece.illinois.edu/pubs/GKV.pdf)
- [About VRF](https://research.nccgroup.com/2020/02/24/reviewing-verifiable-random-functions/)








