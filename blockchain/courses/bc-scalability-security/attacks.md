## Double spend


### Due to computational power more than 50% of network: 51% attack

Assume we have multiple nodes
with different computational powers.
The computational power of each node is identified
here in terms of millions of hashes per second. 

Say there are 5 nodes, out of which 4 are normal nodes and but one (N5) is Byzantine node. 

```
N1:  3MH/s
N2:  1MH/s
N3:  2MH/s
N4:  3MH/s


N5:  10MH/s
```

As you can see here,
we have a Byzantine node that has
a computational power of 10 million hashes per second.
The overall system has a computational power of
19 million hashes per second in total.The power of the Byzantine node is thus
higher than the total power of the other miners.

> This attack is possible as soon as
Byzantine nodes on strictly more than half of the entire mining power of the system. 



- The Byzantine miner keeps mining until it has a branch
that is longer than the branches that are created by the rest of the system. 
- As strategy proposed by
Bitcoin is to select the longest branch,
the Byzantine miner will have the ability to impose its blocks and the set of transaction it has chosen.

> This means that the branch that contains blocks created by the correct miners will be discarded. 


- The Byzantine miner will therefore override the entire branch. This attack will subsequently allow him to do double spending. So it will be able to reuse the coins it previously used in the discarded transaction. 


### Due Network delay
 
 

 But do Byzantine nodes really
need to own strictly more than
the mining power to double spend?


There are other attacks that exploit
propagation delay of blocks.

Again, in this scenario,
we have one Byzantine miner and four correct miners,
but it doesn't have
more than half of the mining power of the system


> If the propagation of blocks takes time,
then multiple correct miners can
create distinct blocks for the same index
of the blockchain before learning
about the competing candidate blocks


a Byzantine miner can create a longer branch than
any other branches that exist without
more than half of the mining power of the system.

> The method for choosing the longest branch may lead to waste of efforts due to network delays. 





