## How MAC works? 

Message Authentication Code (MAC) is cryptographic code, calculated by given key and given message:

```
auth_code = MAC(key, msg)
```

Typically, it behaves like a hash function: a minor change in the message or in the key results to totally different MAC value. 

MAC codes, like hashes, are irreversible.

 MAC algorithms are also known as **keyed hash functions**, because they behave like a hash function with a key.


Example

```
HMAC-SHA256('key', 'some msg') = 32885b49c8a1009e6d66662f8462e7dd5df769a7b725d1d546574e6d5d6e76ad
```
The MAC code is digital authenticity code, like a digital signature, but with pre-shared key.


## When we need MAC code? 

- Two parties have exchanged some how a secret key `k`.
- The receiver, receives `message + auth_code` from sender.
- The receiver, wants to be sure that `message` is not tampared, which means that both the key and message are correct and math the MC code.
- In case of tampared message, the auth_code will not match be incorrect.

![](https://gblobscdn.gitbook.com/assets%2F-LhlOQMrG9bRiqWpegM0%2F-LhlOTG3w57kUSFndpUZ%2F-LhlPcfEYN06ifSEnO4l%2FMAC-message-authentication-code.png?alt=media)

Another use of MAC is in Authented Ecnryption

> Authenticated encryption (AE) and authenticated encryption with associated data (AEAD) are forms of encryption which simultaneously assure the confidentiality and authenticity of data. 



# HMAC

HMAC stands for Hash-based Message Authentication Code.  We use it to verify the authenticity and integrity of data transmitted.

**authenticity**: is ensuring that the data was indeed sent by the person who claims to have sent the data

**integrity**: is ensuring that the data was received as it was sent—in other words, the data was not modified after being sent and was received intact.

Simply calculating `hash_func(key + msg)` to obtain a MAC (message authentication code) is considered insecure (see the details). It is recommended to use the HMAC algorithm instead, e.g. HMAC-SHA256 or HMAC-SHA3-512 or other secure MAC algorithm.


```py
HMAC(key, msg, hash_func) -> hash
```


```js
const { createHmac } = require('crypto');
const key = "Password1@";
const hmac = createHmac('sha256', key);
hmac.update('secret messagae to send')
const auth_code = hmac.digest('hex');
console.log(auth_code); // b2ef72d9a97f0cca48d0ca2197437a5f256e1b72b6ba6bdd065677adc6324549
```


## Reference 

- https://www.thearmchaircritic.org/mansplainings/what-is-hmac-and-how-does-it-work
- https://cryptobook.nakov.com/mac-and-key-derivation