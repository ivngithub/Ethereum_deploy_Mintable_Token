// SPDX-License-Identifier: MIT
pragma solidity 0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


contract MTToken is ERC20 {

    constructor() public ERC20("MTToken Token", "MT") {}

    function mint(address account, uint256 amount) public {
        _mint(account, amount);
    }
}

