


The Double Ratchet algorithm is used by two parties to exchange encrypted messages based on a shared secret key. 




Typically the parties will use some key agreement protocol to agree on the shared secret key. 
Following this, the parties will use the Double Ratchet to send and receive encrypted messages.



> The parties derive new keys for every Double Ratchet message so that earlier keys cannot be calculated from later ones.



##  Diffie-Hellman ratchet

If an attacker steals one party's sending and receiving chain keys, the attacker can compute all future message keys and decrypt all future messages. To prevent this, the Double Ratchet combines the symmetric-key ratchet with a DH ratchet which updates chain keys based on Diffie-Hellman outputs.



https://signal.org/docs/specifications/doubleratchet/