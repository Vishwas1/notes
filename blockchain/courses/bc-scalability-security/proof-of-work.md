## Sybil attack

A Sybil attack is an attack where a malicious node
forgers fake faulty nodes to the point where the number of Byzantine nodes or
identities exceed a third of the entire set of nodes.

In which case, consensus will not be possible to solve.

## POW

A solution to cope with this attack is proof of work. 

Remember, the problem with Byzantine nodes is that they could flood
the system with block proposals. 


> So to prevent Byzantine nodes from spamming the system with blocks or
any other messages, one can request a solution to a puzzle for
each of these blocks or messages. 

[This was what was proposed by Dwork an Naor in 1993 to combatting junk emails.](http://www.wisdom.weizmann.ac.il/~naor/PAPERS/pvp.pdf)


- As the puzzle is computationally hard to solve, the Byzantine node
would require computational power proportional to the number of
identities it wants to impersonate. 

- The solution to the puzzle is called the **proof of work.**

- It is hard to find but easy to verify that it solves the problem or the puzzle. 

## How does POW work?

- The way it works is by including an **nonce** in a block that is called
the proof of work. 
- Finding the nonce will take time but
validating that the nonce is correct is easy. 
- Everyone can verify that someone lied about having solved the puzzle. 
- miners are specialized nodes.
They receive a reward for verifying transaction provably by solving
a cryptopuzzle to append a new transaction block to the blockchain. 

## What is the cryptopuzzle?

- A miner is given a block and a threshold,
with this a minor will repeatedly select a nonce and
apply of pseudo-random function to this block and the selected nonce
- It will do this until it obtains a result lower than the threshold.
If it's not the case, it will just do it again.
-  If it succeeds and
the result is lower than the threshold then it solves the cryptopuzzle in
which case it will include the nonce in the block as a proof of his work.


> The notion of [hashcash](http://www.hashcash.org/papers/) cryptopuzzle that is described here came from
Adam Back in his paper from 2002. 


## Strategies to resolve the fork

> So essentially by applying the strategy that allows every node to agree
on a single block among multiple candidate blocks at a given index,
will resolve the fork.


There are different strategies to resolve a fork:


- In order to resolve a fork and maintain a single chain,
all nodes would have to use the same strategy to decide what
particular blocks are to be appended to that chain.

- One strategy that is used by Bitcoin is called the **longest branch** or deepest branch.

```
Blockchian can be represented as a DAG: <Bi, Pi>
```

Each peer of the blockchain executes:

```
Say i receieves blocks: <Bj, Pj> from j
then,

Bi = (Bi U Bj)
Pi = (Pi U Pj)
```


## Question

Say, current state of blockchian is

```
Blockchain: [B0] 
```
Dave and Eve both are trying to solve the puzzle (note they might have different set of transaction list)

```
Dave: B1 {t1, t2, t5, t7}

Eve: B1 {t1, t3, t6}
```

say, Dave won the context and proposes his block `B1` which every one receieved and added to their ledger.


```
Blockchain: [B0] -> [B1]
```

In that case what will happen to transactions which were present in the Eve's blocks `{t3, t6}`?




