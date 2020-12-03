A Hyperchain is a special kind of blockchain that sticks to an already existing chain. They are going to be called child and parent chain, respectively.


The parent chain can be almost any blockchain in the world.  In general, we want to use some big existingPoW based chains (at the time of writing, preferably Bitcoin or Ethereum) to reuse their burned work tomaintain the stability of the child chain. 


We also propose a PoS–like election system to choose leaders onthe hyperchain.


>  In this case, however, we employ a very reliable — and, most importantly, unpredictable —source of randomness — the state of the parent chain. 


Having this machinery, it seems natural to start a new election each time a (key)block has been minedon the parent chain.  


The next leader shall be chosen depending on the hash of that block and selected withchances proportional to their stake.

We define a group of leadership candidates called ”delegates.” Each delegate needs to express their will of participation in the upcoming election by publishing a commitment transaction onto the parent chain. 

Itis important that they clearly declare their view of the child chain and over which block they are going tocompete. . Therefore, the commitment must consist of:

- The subject of delegation on the child chain
- The block over which the delegate is going to build
- Signature of the delegate from the child chain

The elected leader will be required to publish the key block on the child chain with a cryptographic proof(referencing the parent) of their right to lead the upcoming generation and publish micro blocks.


## Election process and staking

The most convenient way to organize the election process is to create a smart contract on the hyperchain,which would manage the stake and evaluate PoF penalties.

### following features of a staking contract: