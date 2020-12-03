#  Greedily Heaviest Observable Subtree (GHOST) protocol

> This protocol seeks to address
the problem of wasting the correct
miner's work when selecting
the longest branch that is used by Bitcoin


GHOST chooses the haviest subtree amoung all the possible subtrees.

> Read different between GHOST vs Longest chain


Whereas Bitcoin longest protocol would choose the deepest or longest branch.


Ex.:
```
                 _ [b4] - [b6]
                |
         -[b2] - [b5] - [b8] - [b13]
        |             |
[genisis]             - [b10]
        |
         -[b1] - [b3] - [b7] - [b9] - [b12]
```

Between b1 and b2, we see that the depths of b1 is five, but the depths of b2 is only four. This is why the bitcoin will select the `[b1] - [b3] - [b7] - [b9] - [b12]` branch.


We should also note that b2 has more descendants than b1. If we look closer, we can see that b2 has six descendants, while b1 has only four descendants. This is why the GHOST Protocol selects b2. The protocol then proceed among
the children of b2 and selects b5, because b5 has more descendants. In these case, three, while b4 has only one. 

The protocol repeats this process and chooses b8,because b8 has one descendant
while b10 as zero descendant. Finally, it chooses b13 as the last remaining block. 

> This is because GHOST chooses the heaviest subtree among all the possible subtrees. 


