## Failure in distributed system

> "A distributed system is one in which the failure of a computer you did not even know existed can render your own computer unusable". - Laslie Lamport, 1987

### Failure classificaiton

In distributed system there can be two types of failure.

### Crash failure

A server halts but behaves correctly until it halts.

Example of crash failure:

```
                    Time
--------------------------------------------->

        send(msg1)   send(msg2)
P ---------|-----------|---------X Crash
    Execution of Node P
```

### Abritary (Byzantine) failure: 

A server may produce arbitrary responses at arrbitrary times. 

Example of Abritary (Byzantine) failure:

```
                    Time
--------------------------------------------->

        send($#&!)
           |send(msg1)
           |  |send(msg1)      recv(msg2)
P ---------|--|---|-------------|------------>
       Execution of Node P
```

Important thing to note here is, a node is correct if it never fails. Hence Byzantine failure is more dangerous.
