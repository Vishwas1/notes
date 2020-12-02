- https://tools.ietf.org/id/draft-goldbe-vrf-01.html
- https://research.nccgroup.com/2020/02/24/reviewing-verifiable-random-functions/ 


- 4 functions VRF

```
# Section 5.1. ECVRF Proving
ecvrf_prove(sk, alpha_string) -> pi_string

# Section 5.2. ECVRF Proof To Hash
ecvrf_proof_to_hash(pi_string) -> beta_string | "INVALID"

# Section 5.3. ECVRF Verifying
ecvrf_verify(y, pi_string, alpha_string) -> ("VALID", beta_string) | "INVALID"
```
