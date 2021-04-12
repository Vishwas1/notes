# Singal protocol shared key sharing &  encrypted messaging

* IPKa	Alice's identity publick key
* IPrivKa	Alice's identity private key

* EPKa	Alice's ephemeral publick key
* EPrivKa	Alice's ephemeral private key

* IPKb	Bob's identity public key
* IPrivKb	Bob's identity private key

* SPKb	Bob's signed public prekey
* SPrivKb	Bob's signed private prekey

* OPKb	Bob's one-time  public prekey
* OPrivKb	Bob's one-time  private prekey

![](https://i.ibb.co/sghVv5N/Untitled.png)

[src](
https://sequencediagram.org/index.html#initialData=C4S2BsFMAICEHsBG0AOBXR4QGcAW0BrSAT2wCgyUBDAJ1AGMRqA7YaKreyS2hpq1tGyQaANxE86IRizaIkFAMTRcImEWLQAtpAHZCJaiBplm8YDHjia0eYgBc0ANoAZAPIA5AOLQAKgFEAJQBZaAAKeGYuaBBmaCwAM0hQHQBKAF0AHWYAYRpdC30QABNIVjBNDWgASQAFAGlECjMLaCsRWyRHJ2D-ABFqgFVQgJDwyOjY6AB3SEgCNpstSOBcDOyAZRAAc2Z9Osb2ZmLoenyqQqEd5kgTlHyNAG5oDYam03NLa06HZw2ACTcgV8fiCoTCbhu0BSMHu8xI6ziAEEhMk2gk2jcALQw1APEj6ADebjeAEYADTQEmNABMlOpiAAzJSAHRsgC+2XCWiomjQKHA8CoJ2W+XR0NUwgMpHiFw601UcWEYg6N1u2FSFDs0CxAD5ldZHM4DohKa9GpTiWT6W86VS3szoGyWez0hQONIYHqDSJHElgPR8HCsYg0McoNLyC0vh0fTRHIH4PApQJNPAMZFIDiQDo8fDiJTsLz7bSPq12jY445SlBLgyaWQ4zq9exOJBuiazW8bbS3WWYzYPVxHNYQAkQJB9MGqthrhc0Pl+21vkP29BtmURHL9JAUKodDQONKZmB8P4GlQlxXW57ul4yudLn1IAlx9B-pBwOAeUrIGc0Ro2BZHEWLQH0-yktAAC8YH-GEdQ0CAoj1FQXaNKkXKgeBNLQbBYTnohyGoTUbwYSBsGMrh4H4bUhEoWhsCpNAmGwQALFRcEEUh9ElogNJMc0nzLh0q53puh6XMI-5sFUGz1MBcm4fUfQAGJhOBkEAD6abBOHaRR0D6eBrGaleK5tkaz61pO0C7vuW7gHiSFytKZkiRZ0DOPQHD0Gg4Dbkc0AAERUNg2DwIwconMUFxUEF0CUhw4WnBwUAnBsVD+poHhoFoiAiMB0BIn0uH+FE8ClPBF5MfpZX0BVkBVehbmDh5MiqDQviQAAHmwMF1TQxAoMA2BhMVZr1Jqq46rqPwdhelLnjxhKdi83a8TS7IJe1Ihdb1fbRsJNh2GJzCPjZz6viA76ft+AiotJkaFVhEEcVVdGmtAS1UGROq6W9rx0cRBw-Sx4GUTB1GA9xxHfakTFg-87GQ3BJJA4t1WCeW3wnc4943BJNlSfkMkkC88mbPUSmqepr1Gf8ek6eDhlM0jpmHdeuNeT5fkBfdIVhRFIBRdAMXAHFCWtsl3lfrcLyZck2W5flNCFcVpXlZVIM1TpdUNU1iCmS1c2eerkN-oNw2jTtnU9cAE3s0JnNdDUGKrDANsWL1osW0NI1CGg9BcGFCR+eAmju3i5gRfAjk4Kc8BaAKyQwAk8A2AgiAsljA4m5nPvWfoqaYlmuJwkQXL3M5rRVKsFwzKF0BoMIxSUmnNjt9MtAnMTf7ECy0AUEPQA)

## [Symmetric-key ratchet] Once the secret key is exchanged, 

Every message sent or received is encrypted with a unique `MessageKey`. The message keys are output keys from the sending and receiving KDF chain. The KDF keys for these chains will be called chain keys.

The KDF inputs for the sending and receiving chains are constant, so these chains don't provide break-in recovery. The sending and receiving chains just ensure that each message is encrypted with a unique key that can be deleted after encryption or decryption. Calculating the next chain key and message key from a given chain key is a single ratchet step in the **symmetric-key ratchet**. The below diagram shows two steps:

![](https://www.signal.org/docs/specifications/doubleratchet/Set0_1.png)

> Because message keys aren't used to derive any other keys, message keys may be stored without affecting the security of other message keys. This is useful for handling lost or out-of-order messages 

## [Diffie-Hellman ratchet] But, the problem is

If an attacker steals one party's sending and receiving chain keys, the attacker can compute all future message keys and decrypt all future messages.

To prevent this, the Double Ratchet combines the symmetric-key ratchet with a DH ratchet which updates chain keys based on Diffie-Hellman outputs.

To implement the DH ratch

- each party generates a DH key pair (a Diffie-Hellman public key and private key)
- Every message from either party begins with a header which contains the sender's current ratchet public key. 
- When a new ratchet public key is received from the remote party, a DH ratchet step is performed *which replaces the local party's current ratchet key pair with a new key pair*.

Alice is initialized with Bob's ratchet public key. Alice's ratchet public key isn't yet known to Bob. As part of initialization Alice performs a DH calculation between her ratchet private key and Bob's ratchet public key:

![](https://www.signal.org/docs/specifications/doubleratchet/Set1_0.png)


Alice's initial messages advertise her ratchet public key. Once Bob receives one of these messages, Bob performs a DH ratchet step: He calculates the DH output between Alice's ratchet public key and his ratchet private key, which equals Alice's initial DH output. Bob then replaces his ratchet key pair and calculates a new DH output:

![](https://www.signal.org/docs/specifications/doubleratchet/Set1_1.png)

Messages sent by Bob advertise his new public key. Eventually, Alice will receive one of Bob's messages and perform a DH ratchet step, replacing her ratchet key pair and deriving two DH outputs, one that matches Bob's latest and a new one.

The DH outputs generated during each DH ratchet step are used to derive new sending and receiving chain keys. The below diagram revisits Bob's first ratchet step. Bob uses his first DH output to derive a receiving chain that matches Alice's sending chain. Bob uses the second DH output to derive a new sending chain:


![](https://www.signal.org/docs/specifications/doubleratchet/Set2_0.png)

As the parties take turns performing DH ratchet steps, they take turns introducing new sending chains:

![](https://www.signal.org/docs/specifications/doubleratchet/Set2_1.png)


 However, Instead of taking the chain keys directly from DH outputs, the DH outputs are used as KDF inputs to a root chain, and the KDF outputs from the root chain are used as sending and receiving chain keys. Using a KDF chain here improves resilience and break-in recovery.


![](https://www.signal.org/docs/specifications/doubleratchet/Set2_2.png)







## References

- https://www.signal.org/docs/specifications/x3dh/#the-x3dh-protocol
- https://www.signal.org/docs/specifications/doubleratchet/
- https://www.redshiftzero.com/signal-protocol/
- https://www.redshiftzero.com/