# ERC20

A token is a representation of value, a sort of digital asset 
The Ethereum developers decided to standardize this process, and so the ERC20 ‘Token Standard’ was created. This templated-contract standardization contains a series of functions that enables the issuance, distribution and control of the assets in a formalized, standardized manner.

ERC20 was introdued in (Ethereum Improvment Proposal) [EIP-20](https://eips.ethereum.org/EIPS/eip-20) by  Fabian Vogelsteller and Vitalik Buterin in 2015.


> ERC20 is standard interface for tokens!


## Abstract

The following standard allows for the implementation of a standard API for tokens within smart contracts. This standard provides basic functionality to transfer tokens, as well as allow tokens to be approved so they can be spent by another on-chain third party.

## Methods

- OPTIONAL
    - **name**
        - Returns the name of the token - e.g. "MyToken"
        -   ```
            function name() public view returns (string)
            ```
    - **symbol**
        - Returns the symbol of the token. E.g. “HIX”        
        -   ```
            function symbol() public view returns (string)
            ```
    - **decimals**
        - Returns the number of decimals the token uses - e.g. `8`, means to divide the token amount by `100000000` to get its user representation.
        -   ```
            function decimals() public view returns (uint8)
            ```
- MANDATORY
    - **totalSupply**
        - Returns the total token supply.
        -   ```
            function totalSupply() public view returns (uint256)
            ```
    - **balanceOf**
        - Returns the account balance of an account with provided address `_owner`
        -   ```
            function balanceOf(address _owner) public view returns (uint256 balance)
            ```
    - **transfer**
        - Transfers `_value` amount of tokens to address `_to`, and MUST fire the `Transfer` event. The function SHOULD throw if the message caller’s account balance does not have enough tokens to spend.
        - Note Transfers of `0` values MUST be treated as normal transfers and fire the Transfer event.
        -   ```
            function transfer(address _to, uint256 _value) public returns (bool success)
            ```
    - **transferFrom**
        - Transfers `_value` amount of tokens from address `_from` to address _to, and MUST fire the `Transfer` event.
        - Note Transfers of `0` values MUST be treated as normal transfers and fire the Transfer event.
        -   ```
             function transferFrom(address _from, address _to, uint256 _value) public returns (bool success)   
            ```
    - **approve**
        - Allows `_spender` to withdraw from your account multiple times, up to the `_value` amount. 
        - If this function is called again it overwrites the current allowance with `_value`.
        -   ```
            function approve(address _spender, uint256 _value) public returns (bool success)
            ```
    - **allowance**
        - Returns the amount which `_spender` is still allowed to withdraw from `_owner`.
        -   ```
            function allowance(address _owner, address _spender) public view returns (uint256 remaining)
            ```

## Events

- *Transfer*
    - MUST trigger when tokens are transferred, including zero value transfers.
    - A token contract which creates new tokens SHOULD trigger a Transfer event with the _from address set to `0x0` when tokens are created.
    -   ```
        event Transfer(address indexed _from, address indexed _to, uint256 _value)
        ```
- *Approval*
    - MUST trigger on any successful call to `approve` method
    -   ```
        event Approval(address indexed _owner, address indexed _spender, uint256 _value)
        ```

## Implementation

- [EIP20Interface.sol](https://github.com/ConsenSys/Tokens/blob/fdf687c69d998266a95f15216b1955a4965a0a6d/contracts/eip20/EIP20Interface.sol)

## Optimization

## Attack vectors

- [Ad attack vector on Approve/TransferFrom methods](https://docs.google.com/document/d/1YLPtQxZu1UAvO9cZ1O2RPXBbT0mooh4DYKjA_jp-RLM/edit)

## Reference 

- [EIP 20](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20.md)
- [Blog on understanding token hype](https://medium.com/blockchannel/understanding-the-ethereum-ico-token-hype-429481278f45)
- [OpenZeppelin implementation](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/9b3710465583284b8c4c5d2245749246bb2e0094/contracts/token/ERC20/ERC20.sol)
- [ConsenSys implementation](https://github.com/ConsenSys/Tokens/blob/fdf687c69d998266a95f15216b1955a4965a0a6d/contracts/eip20/EIP20.sol)
- [Tool to create ERC20](https://vittominacori.github.io/erc20-generator/create-token/)
- [Step wise guide for ERC20](https://blockonomi.com/create-ethereum-token/)
- https://forum.openzeppelin.com/t/importing-openzeppelin-contracts-in-remix/1420 