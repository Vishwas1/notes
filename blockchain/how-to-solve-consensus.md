We wil learn  how to solve the consensus 

- how to solve the consensus when failures
cannot occur 
- how to solve the consensus when failures
occur.
    - first through crash failures
    - when processes can behave arbitrarily


## Recap

Previously, you learned that consensus can be
defined as a problem along three properties;
**agreement**, **validity**, and **termination**.


- agreement:  no two correct processes
can decide differently
- validity: all the processes must decide
on one of the values that were proposed at the beginning. 
- termination:  means that
every correct process eventually decides. 

## how to solve the consensus when failures cannot occur

1. broadcast everyone proposal to everyone
2. decide on minimum value


### Cost

1. Number of messages / Message complexity
2. Number of bits  / Communication Complexity
3. Time needed to execute the algo / time complexity


Message complexity

Each process will send message to other process except itself. so total `n (n-1)` messages wwhich is `O(n^2)`

Communication Complexity

Each message is of `b` bits. meaning we end up sending `bn(n-1)` bits hence complexit = `O(bn^2)`


Time complexity

All processes broadcast in parallel. It only takes all of one message delays to exchange all messages.

`O(1)`

## how to solve the consensus when failures occur

### Crash failure

let's assume 
1. that there is at most `f` processes that can crash, 
2. and second we need to assume some level of synchrony. Here, we assume that all messages are delivered within a **time-bound** and that this bound is known by the algorithm. This allows a node to detect whether another process expected to reply has crashed because his response was not received.


Algorithm


1. (broadcast everyone proposal to everyone) loop it `f + 1` times where `f<n`;
2. decide on minimum value

Message complexity

(f+1)*n(n-1)

O((f+1)n^2)

Communication Complexity

we note that each message contains up to `n` values.

and each value is represented with `b` bits.

- so each message will be of b*n bits
- each of the process will send mesasges except to itself. n * (n-1)
- total bits would be `b * n * n (n-1)`
- Loop over `f+1` times

(f+1) * b * n * n(n-1) = `O(b(f+1)n^3)`

Time complexity

- O(f+1)


### Byzantine Failure

Assumptions: 

- First we cannot have a synchronous communications.
- We also need to assume that there is a maximum of strictly lower than n over 3 processes that can be byzantine. 

Exponential Information Gathering

n = 4 ,  f = 1


Message complexity

f+1 * n (n-1)

Communication Complexity

O(b * n ^f+1)

Time complexity

O(f+1)
