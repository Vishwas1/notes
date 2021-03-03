

function add() external  returns (uint){
    uint a;
    utin b;
    uint c;

    assembly{
        c := add(a+b)
    }

    return c;
}