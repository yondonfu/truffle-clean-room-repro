pragma solidity ^0.4.17;


contract Hello {
  uint256 foo;

  function getFoo() public view returns (uint256) {
    return foo;
  }

  function setFoo(uint256 _foo) public {
    foo = _foo;
  }
}
