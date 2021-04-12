const nacl = require('tweetnacl')
const bs58check = require('bs58check')
const ed2curve = require('ed2curve')
nacl.util = require('tweetnacl-util')

function encodeBase58Check(input) {
    return bs58check.encode(Buffer.from(input))
}

function decodeBase58Check(str) {
    return bs58check.decode(str)
}

function generateKeyPair() {
    const keyPair = nacl.sign.keyPair()
    const publicBuffer = Buffer.from(keyPair.publicKey)
    const secretBuffer = Buffer.from(keyPair.secretKey)
    return {
        publicKey: encodeBase58Check(publicBuffer),
        privateKey: secretBuffer.toString('hex')
    }
}

function encrypt(msg, publicKey) {
    const ephemeralKeyPair = nacl.box.keyPair()
    const pubKeyUInt8Array = decodeBase58Check(publicKey)
    const nonce = nacl.randomBytes(nacl.box.nonceLength)

    const encryptedMessage = nacl.box(
        Buffer.from(msg),
        nonce,
        ed2curve.convertPublicKey(pubKeyUInt8Array),
        ephemeralKeyPair.secretKey
    )

    const ciphertext = Buffer.from(encryptedMessage).toString('hex') + "." + Buffer.from(ephemeralKeyPair.publicKey).toString('hex') + "." + Buffer.from(nonce).toString('hex')
    return ciphertext;
}

function decrypt(cipher, secretKey) {
    const receiverSecretKeyUint8Array = ed2curve.convertSecretKey(Buffer.from(secretKey, 'hex'))
    if (!cipher) throw new Error("Cipher text can not be empty")
    if (!secretKey) throw new Error("Secret or Private key can not be empty")
    const encryptedData = cipher.split(".");

    if (!encryptedData || encryptedData.length != 3) throw new Error("Malformed cipher text")

    const nonce = Buffer.from(encryptedData[2], 'hex')
    const ciphertext = Buffer.from(encryptedData[0], 'hex')
    const ephemPubKey = Buffer.from(encryptedData[1], 'hex')
    const decrypted = nacl.box.open(
        ciphertext,
        nonce,
        ephemPubKey,
        receiverSecretKeyUint8Array
    )
    return decrypted ? nacl.util.encodeUTF8(decrypted) : decrypted
}

function generateKeyPairFromSecretKey(privateKey) {
    if (!privateKey) throw new Error("Privatekey must be passsed")
    const keyPair = nacl.sign.keyPair.fromSecretKey(Buffer.from(privateKey, 'hex'))
    const publicBuffer = Buffer.from(keyPair.publicKey)
    const secretBuffer = Buffer.from(keyPair.secretKey)
    return {
        publicKey: encodeBase58Check(publicBuffer),
        privateKey: secretBuffer.toString('hex')
    }
}

module.exports = {
    generateKeyPair,
    encrypt,
    decrypt,
    generateKeyPairFromSecretKey
}

////// TEST
// const message = "Bomb the US!";
// const kp = generateKeyPair();
// console.log(kp);
// console.log('---------------------------------------------');

// const newKp = generateKeyPairFromSecretKey(kp.privateKey)
// console.log(newKp);
// console.log('---------------------------------------------');


// const ciphertext = encrypt(message, kp.publicKey);
// console.log(ciphertext);
// console.log('---------------------------------------------');

// const plainText = decrypt(ciphertext, kp.privateKey);
// console.log(plainText);
// console.log('---------------------------------------------');
// console.log(message == plainText);