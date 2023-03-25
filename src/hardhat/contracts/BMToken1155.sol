// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract BMToken1155 is ERC1155, Ownable {
    constructor()
        ERC1155("https://bafybeieya6b2wi232gb75f2lntjuoqx4dlsjy3uwgbfhlfuf32eiujvpua.ipfs.dweb.link/1.json")
    {}
    mapping(uint=>uint) minted;
    function mint( address to,uint256 id, uint256 amount)
        public      
    {
        require(id>0,"invalid id");
        _mint(to, id, amount, "");
        minted[id]+=amount;
    }

}