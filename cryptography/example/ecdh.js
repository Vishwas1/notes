const { createECDH } = require('crypto');

const aliceECDH = createECDH('secp256k1');
aliceECDH.generateKeys()
const aliceKp = {
    privateKey: aliceECDH.getPrivateKey('hex', 'compressed'),
    publicKey: aliceECDH.getPublicKey('hex', 'compressed')
}



// Prints keys
console.log("Alice Keypair = ", aliceKp);

const bobECDH = createECDH('secp256k1');
bobECDH.generateKeys()
const bobKp = {
    privateKey: bobECDH.getPrivateKey('hex', 'compressed'),
    publicKey: bobECDH.getPublicKey('hex', 'compressed')
}
console.log("Bob Keypair = ", bobKp);


const alice_secret = aliceECDH.computeSecret(bobKp.publicKey, 'hex', 'hex');
console.log("Secret computed by Alice = ", alice_secret)

const bob_secret = bobECDH.computeSecret(aliceKp.publicKey, 'hex', 'hex');
console.log("Secret computed by Bob = ", bob_secret)