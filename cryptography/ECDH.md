The ECDH (Elliptic Curve Diffie–Hellman Key Exchange) is anonymous key agreement scheme, **which allows two parties, each having an elliptic-curve public–private key pair, to establish a shared secret over an insecure channel.**



ECDH is very similar to the classical DHKE (Diffie–Hellman Key Exchange) algorithm, but it uses ECC point multiplication instead of modular exponentiations.

 ECDH is based on the following property of EC points:

 ```
If,

a = alicePrivateKey
b = bobPrivateKey
G = ECC elliptic curve generator point

And, 

alicePubKey = a * G
bobPubKey = b * G

Then,

secret = (b * G) * a = (a * G) * b

OR

secret = alicePrivateKey * bobPublicKey  = bobPrivateKey * alicePubKey
```

Node js implementation

```js
const { createECDH } = require('crypto');

// Keypair for Alice
const aliceECDH = createECDH('secp256k1');
aliceECDH.generateKeys()

// Keypair for Bob
const bobECDH = createECDH('secp256k1');
bobECDH.generateKeys()

const alice_secret = aliceECDH.computeSecret(bobECDH.getPublicKey('hex', 'compressed'), 'hex', 'hex');
console.log("Secret computed by Alice = ", alice_secret)

const bob_secret = bobECDH.computeSecret(aliceECDH.getPublicKey('hex', 'compressed'), 'hex', 'hex');
console.log("Secret computed by Bob = ", bob_secret)
```

Output

```bash
Secret computed by Alice =  890fb762f30a8da64771f253f859e5f5cda760e0c7d8e34140e7145b32fa642b
Secret computed by Bob =  890fb762f30a8da64771f253f859e5f5cda760e0c7d8e34140e7145b32fa642b
```
