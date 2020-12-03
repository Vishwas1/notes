# The finality gadget

> Finality, in very loose terms, means that once a particular operation has been done, it will forever be etched in history and nothing can revert that operation.
> Some people say that proof-of-work is the one way that finality can be achieved in the blockchain.

The finality gadget leverages the consensus of Phase 0 of Ethereum 2.0 to enhance the security of the existing 1.0 chain; this initiative represents a way the Ethereum community can get value from the 2.0 deployment from day one.

A finality gadget allows for transactions to always optimistically commit but informs the clients that these transactions might be unsafe. As a result, a blockchain can execute transactions optimistically and only commit them after they have been sufficiently and provably audited. 


- https://medium.com/@ralexstokes/how-secure-is-ethereum-2-0-consensus-41523a59f270
- https://medium.com/@ralexstokes/the-finality-gadget-2bf608529e50
- https://arxiv.org/abs/2007.01560
- https://blockgeeks.com/guides/ethereum-casper/
