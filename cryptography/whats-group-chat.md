Clients exchange message that are protected with a  a `MessageKey` using AES256 in CBC mode for encryption and `HMAC-SHA256` for authentication 

The `MessageKey` changes for each message transmitted and acts like a session key.

The `MessageKey` is derived from a sender’s `ChainKey` that “ratchets” forward with every message sent .  Additionally, a new `ECDH agreement` is performed with each message roundtrip to create a new `ChainKey` .

 This provides forward secrecy through the combination of both an immediate “hash ratchet” and a round trip “DH ratchet.”

## How MessageKey is calcualated using ChainKey

Each time a new `MessageKey` is needed by a message sender, it is calculated as:

```
MessageKey = HMAC-SHA256(ChainKey, 0x01) 
ChainKey = HMAC-SHA256(ChainKey, 0x02)
```
This causes the `ChainKey` to “ratchet” forward, and also means that a stored `MessageKey` can’t be used to derive current or past values of the `ChainKey`.


## ChaniKey from RootKey

Each time a message is transmitted, an `ephemeral` Curve25519 public key is advertised along with it .

Once a response is received, a new Chain Keyand Root Key are calculated as:



## Group

Messages to WhatsApp groups build on the pairwise encrypted sessions outlined above to achieve efficient server-side fan-out for most messages sent to groups. This is accomplished using the “Sender Keys” component of the Signal Messaging Protocol .

1. Alice generates a random `ChainKey` of 32 byte.
2. Alice generate a Cureve25519 keypair, called `signatureKeyPair`
3. Alice combines the 32-byte `ChainKey` and the `publickey` from the Signature Key into a `SenderKey` message 
    ```
        SenderKey = (ChainKey, publickey)
    ```
4. The sender individually encrypts the `SenderKey` to each member of the group


## 4 time Diffi hellman

 