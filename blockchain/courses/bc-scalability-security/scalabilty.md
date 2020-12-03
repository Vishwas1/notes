we shall cover how
to design a scalable and secure blockchain algorithm.


- To be secure, we need
a consensus algorithm that works over
the Internet and it's not affected
by unexpected communication delays. 

- **To be scalable, we need to get rid of bottlenecks.**



> It is naive to assume that
communication over the Internet is synchronous,
as there are too many factors that can
delay the communication of messages.  


These factors include natural disasters,
unexpected congestions,
human misconfigurations, and of
course malicious activities from
attackers who want to delay
communications in order to steal assets.


Unfortunately, with pure **asynchrony** we
cannot solve consensus in the presence of failures. So what do we do then?

So how do we come up with a solution
when we do not know how long a message will take? 


### Solution


The key is to assume partial synchrony,
that is weaker than synchrony
but stronger than asynchrony.

By assuming partial synchrony,
every message takes less than
a bounded amount of time to reach their destination.

What is important is
that the bound on the time it takes to
deliver a message **is not known by the algorithm**. 


A very popular Byzantine consensus solution
that assumes partial synchrony is PBFT,
short for **Practical Byzantine Fault Tolerance.**

> This solution relies on a process taking
the special role of a leader while others are followers.
The leader is responsible for sending
messages to all other processes.
As each process does not know how
long it takes for messages to be delivered,
it progresses as soon as it receives messages
from 2f+1 processes or from the leader. 


## But is this viable for Blockchai?

Now that we know that the popular solution to
the Byzantine consensus problem is to use a leader,
we need to understand if this is viable for blockchain. 
the leader becomes a bottleneck at large-scale

important to note first that the process that
plays the role of the leader typically changes over time. 

It is therefore, hard for
a client or wallet application to know
which process is the leader
and to send requests to this leader. 


>  the leader is a bottleneck that
prevents the information to be
exchanged rapidly between nodes.
I

> It is therefore, better for
scalability for all processes to propose
transactions than having a leader
trying to impose its set of transactions. 


## Leader-based is not suitable for blockchain

1.  the consensus does not leverage all the links.
This means the leader tries to impose its block,
disallowing other processes from proposing blocks.

2.  the time it takes for a leader to propagate the block is limited by
the upload capacity of the leader and the lowest download capacity of the followers. it may take time for the followers to accept the leaders block and
this time grows with the number of processes in the network 

### solution


The key to scalability here is to decide a block that grows with the number of
participants in the consensus.

Additionally, to leverage the bandwidth between all nodes, we must decide a block
that is contributed by multiple processes rather than just one.

> So instead of proposing blocks, let's have processes propose sets of transaction that will be included in the block. 


how? 

- Firstly all the processes propose a set of transactions,
- then they exchange these sets between themselves.
- From there the processes decide a block.


**Set Byzantine Consensus**

The Set Byzantine Consensus problem is to ensure the properties of agreement and
termination, just like the properties of the previews Byzantine consensus
 
Nonetheless, it also requires a validity property that differs from before.
The validity that we ensure is the following.
A decided set of transactions is a non-conflicting set of valid transactions
taken from the union of the proposed sets.
Moreover, to avoid trivial solutions to this problem,

the validity property requires that if all nodes are correct and propose a common
valid non-conflicting set of transactions, then this subset is the decided set. 

---



we saw that traditional consensus solution do not
scale due to the nature of
the consensus problem definition.
As the consensus, is a central component of blockchains.
A non-scalable consensus limits
the performance of the block chain that uses it. 


In our last lecture, we redefined
the byzantine consensus problem into
the set byzantine consensus problem.


## democratic byzantine fault tolerant algorithm


It is a solution that can be used to scale. 


- It has an estimate `est` of the value to decide.
- It has a round number `r` that is initially zero. 
- an array of binary values called `bin-values[]`, indexed by the round number 
- and auxiliary binary value `b` 
- and a set of auxiliary values.


Two types of messae
Finally, two types of
messages are used by this algorithm.


- EST[r]: Est of r used at round, are to be rebroadcast, the estimate.
- AUX[r]: An AUX of r used at round r broadcast bin-values of r.


 DBFT uses two other algorithms;

- a binary consensus algorithm: 
A binary consensus algorithm solves
the classic byzantine consensus problem
applied to binary values,
where processes proposed and decide either zero or one

- a binary value broadcast algorithm.: When a process invokes BV broadcast, it sends the binary value to other processes that insert this value in the bin values set of this correct participating process. 


https://www.redbellyblockchain.io/researchpapers

