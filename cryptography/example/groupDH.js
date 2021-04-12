// Group message
// Key sharing using quad dh

const { encrypt, decrypt } = require('./aes');
const {
    createECDH,
} = require('crypto');


const ALGORITHM = "secp256k1"
const aliceECDH = createECDH(ALGORITHM);
const keyStore = {
    admin: "",
    users: {}
};

function generate() {
    aliceECDH.generateKeys()
    const aliceKp = {
        privateKey: aliceECDH.getPrivateKey('hex', 'compressed'),
        publicKey: aliceECDH.getPublicKey('hex', 'compressed')
    }
    return aliceKp
}

function computeSecret(compressedPrivateKeyPartyA, compressedPublicKeyOfPartyB) {
    aliceECDH.setPrivateKey(compressedPrivateKeyPartyA, "hex");
    const secret = aliceECDH.computeSecret(compressedPublicKeyOfPartyB, 'hex', 'hex');
    return secret
}

function getPublicKeyFromPrivateKey(privateKey) {
    aliceECDH.setPrivateKey(privateKey, "hex");
    return aliceECDH.getPublicKey('hex', 'compressed');
}

async function addUser(repoSecretKey, adminPrivateKey, receiverPublicKey) {
    keyStore.admin = getPublicKeyFromPrivateKey(adminPrivateKey)
    const dhPairSharedKey = computeSecret(adminPrivateKey, receiverPublicKey);
    const ct = await encrypt(repoSecretKey, dhPairSharedKey);
    keyStore.users[receiverPublicKey] = ct;
}

async function getRepoKey(receieverPrivateKey) {
    const adminPublicKey = keyStore.admin;
    const receieverPublicKey = getPublicKeyFromPrivateKey(receieverPrivateKey);
    const ct = keyStore.users[receieverPublicKey];
    const dhPairSharedKey = computeSecret(receieverPrivateKey, adminPublicKey);
    const pt = await decrypt(ct, dhPairSharedKey);
    return pt;
}


// Usage
async function start() {
    const vishwas = generate(); // Say vishwas is admin of repo
    const pallavi = generate();
    const shravan = generate();

    const repoPassword = 'Password1@' // Vishwas decides a password


    ///// vishwas being admin of the repo wants to add bob and chaile as user
    ///// In order for vishwas to add a user 'say pallavi', she has to provide pallavi's publickey
    // First I will add myself
    await addUser(repoPassword, vishwas.privateKey, vishwas.publicKey);

    await addUser(repoPassword, vishwas.privateKey, pallavi.publicKey);
    await addUser(repoPassword, vishwas.privateKey, shravan.publicKey);


    // pallavi can retrive the repoPassword
    const ptAtPallavi = await getRepoKey(pallavi.privateKey);

    // shravan can retrive the repoPassword
    const ptAtCharli = await getRepoKey(shravan.privateKey);

    console.log({
        ptAtCharli,
        ptAtPallavi
    })

    console.log(keyStore)

    // // Alice side
    // const masterSecretKey = "Password1@";
    // const alice_bob_secret = computeSecret(aliceKeys.privateKey, bobKeys.publicKey);
    // const CTab = await encrypt(masterSecretKey, alice_bob_secret);
    // const alice_charlie_secret = computeSecret(aliceKeys.privateKey, charlieKeys.publicKey);
    // const CTac = await encrypt(masterSecretKey, alice_charlie_secret);

    // // Bob side
    // const bober_alice_secret = computeSecret(bobKeys.privateKey, aliceKeys.publicKey);
    // const PTab = await decrypt(CTab, bober_alice_secret)
    // const bober_charli_secret = computeSecret(bobKeys.privateKey, charlieKeys.publicKey);


    // // Charlie side
    // const charlie_alice_secret = computeSecret(charlieKeys.privateKey, aliceKeys.publicKey);
    // const PTac = await decrypt(CTac, charlie_alice_secret)
    // const charlie_bober_secret = computeSecret(charlieKeys.privateKey, bobKeys.publicKey);



    // console.log('ALICE<>BOBER', alice_bob_secret == bober_alice_secret);
    // console.log('ALICE<>CHARLI', alice_charlie_secret == charlie_alice_secret);
    // console.log('BOBER<>CHARLI', bober_charli_secret == charlie_bober_secret);



    // console.log("alice-bob", {
    //     CTab,
    //     PTab
    // });

    // console.log("alice-bob", {
    //     CTac,
    //     PTac
    // });
}



start()