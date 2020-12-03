# 

consensus has a lot of applications.
It can help multiple machines decide on a leader,
it can also help them coordinate an attack.

This means that solving
consensus can help solve other problems.
Some examples include being
able to execute a global application,
ordering messages received at
different locations so that
the information they convey makes sense,
or synchronizing multiple machines
to take a collaborative action

- In the consensus problem,
the nodes propose values,
and they must agree by deciding
one value among these proposed values. 

- So consensus can be defined as
a problem along three properties: 

- Validity: It states that any decided value is a value proposed. It essentially means that the nodes must decide
on one of the values that were proposed at the beginning. 
- Agreement: It states that
no two correct nodes would decide differently. 
- Termination: every correct node eventually decides. 

To achieve consensus we must solve all these three properties.

# Consensus in the context of blockchain

- To construct a blockchain, distributed nodes must agree on a unique block
at a given index of the chain.
So assume correct nodes know that the genesis block is at index 0,
these nodes will therefore have to run a consensus to make sure that they agree
on the block that will be appended at index 1. 
- Blocks are totally ordered
- The problem comes from having
a blockchain that forks.
It is no longer sequence, it becomes a Directed Acyclic Graph or DAG.
- And we want to avoid this disagreement as it may lead to _double spending_.

## When can we NOT solve consensus

1. One famous impossibility result was published in 1985 by Fischer, Lynch and
Paterson.

> Their study showed that there is no solution to the consensus problem among
n nodes if there are failures. 




> So essentially it means in an asynchronous model with failures,
we cannot solve consensus. 


2. Another impossibility result was published by Pease, Shostak and Lamport in 1980

> Their study shows that there is no solution to the consensus problem if
the number of Byzantine nodes is greater than or
equal to 1/3 of the entire nodes that are trying to solve consensus. 


## When can we solve byzantine consensus problem

we can actually solve consensus under two assumptions.

1. One, that we don't have asynchrony.
2. Two, that the number of failures is strictly lower than a third of
the participating nodes. 

Ex:

Assumptions:

- There is a bound on the delay to deliver any message 
    -  Meaning no more asynchrony
- Node consititution: n = 7 , f = 2
    

