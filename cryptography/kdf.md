In cryptography we often use passwords instead of binary keys, because passwords are easier to remember, to write down and can be shorter.

When a certain algorithm needs a key (e.g. for encryption or for digital signing) a key derivation function (password -> key) is needed.

Key derivation function (KDF) is a function which transforms a variable-length password to fixed-length key (sequence of bits):

```
function(password) -> key
```

> As very simple KDF function, we can use SHA256: just hash the password. Don't do this, because it is insecure. Simple hashes are vulnerable to dictionary attacks.

As more complicated KDF function, you can derive a password by calculating HMAC(salt, msg, SHA256) using some random value called "salt", which is stored along with the derived key and used later to derive the same key again from the password.

Using HKDF (HMAC-based key derivation) for key derivation is less secure than modern KDFs, so experts recommend using stronger key derivation functions like PBKDF2, Bcrypt, Scrypt and Argon2.

PBKDF2, Bcrypt, Scrypt and Argon2 are significantly stronger key derivation functions and are designed to survive password guessing (brute force) attacks.

By design secure key derivation functions use salt (random number, which is different for each key derivation) + many iterations (to speed-down eventual password guessing process). This is a process, known as key stretching.


## PBKDF2

PBKDF2 is a simple cryptographic key derivation function, which is resistant to dictionary attacks and rainbow table attacks. 

 The PBKDF2 algorithm is described in the Internet standard RFC 2898 (PKCS #5).

 ```
 key = pbkdf2(password, salt, iterations-count, hash-function, derived-key-len)

 ```

 Today PBKDF2 is considered old-fashioned and less secure than modern KDF functions, so it is recommended to use Bcrypt, Scrypt or Argon2 instead. We shall explain all these KDF functions in details later in this section.

## Scrypt

Scrypt (RFC 7914) is a strong cryptographic key-derivation function (KDF). It is memory-intensive, designed to prevent GPU, ASIC and FPGA attacks (highly efficient password cracking hardware).

```
key = Scrypt(password, salt, N, r, p, derived-key-len)
```

N – iterations count (affects memory and CPU usage), e.g. 16384 or 2048
r – block size (affects memory and CPU usage), e.g. 8
p – parallelism factor (threads to run in parallel - affects the memory, CPU usage), usually 1
password– the input password (8-10 chars minimal length is recommended)
salt – securely-generated random bytes (64 bits minimum, 128 bits recommended)
derived-key-length - how many bytes to generate as output, e.g. 32 bytes (256 bits)

In the MyEtherWallet crypto wallet, the default Scrypt parameters are N=8192, r=8, p=1.

These settings are not strong enough for crypto wallets, but this is how it works. The solution is to use long and complex password to avoid password cracking attacks.
