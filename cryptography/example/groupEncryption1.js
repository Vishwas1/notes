const {
    generateKeyPair,
    encrypt,
    decrypt,
    generateKeyPairFromSecretKey
} = require('./asymmetric');

const { v4: uuidv4 } = require('uuid');

const keyStore = {
    users: {}
}

function addUser(adminPrivateKey, memberPublicKey) {
    if (!adminPrivateKey) throw Error("adminPrivateKey must be passed");
    if (!memberPublicKey) throw new Error("Public of member must be passed")

    let repoPassword;
    if (Object.keys(keyStore.users) <= 0) {
        repoPassword = uuidv4();
    } else {
        repoPassword = getRepoKey(adminPrivateKey);
    }
    keyStore.users[memberPublicKey] = encrypt(repoPassword, memberPublicKey);
}

function getRepoKey(privateKey) {
    if (!privateKey) throw Error("privateKey must be passed");
    const keyPair = generateKeyPairFromSecretKey(privateKey)
    if (!keyStore.users[keyPair.publicKey]) throw new Error("User is not added");
    return decrypt(keyStore.users[keyPair.publicKey], keyPair.privateKey);
}

// module.exports = {
//         addUser,
//         getRepoKey
//     }
// Usage
function setupRepo() {
    const vishwasKeyPair = generateKeyPair();
    console.log(vishwasKeyPair)
    const abhijitKeyPair = generateKeyPair();
    console.log(abhijitKeyPair)
    const pallaviKeyPair = generateKeyPair();
    console.log(pallaviKeyPair)

    // Vishwas is adding himself
    addUser(vishwasKeyPair.privateKey, vishwasKeyPair.publicKey);
    console.log('Vishwas got added to the users = ' + keyStore.users[vishwasKeyPair.publicKey])

    // Vishwas is adding Abhijit
    addUser(vishwasKeyPair.privateKey, abhijitKeyPair.publicKey);
    console.log('Abhijit got added to the users = ' + keyStore.users[abhijitKeyPair.publicKey])

    // Abhijit is adding Pallavi
    addUser(abhijitKeyPair.privateKey, pallaviKeyPair.publicKey);
    console.log('Pallavi got added to the users = ' + keyStore.users[pallaviKeyPair.publicKey])

    console.log(keyStore.users)
}

setupRepo()