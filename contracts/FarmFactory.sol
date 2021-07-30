// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.5.12;

import "./Ownable.sol";
import "./Farm.sol";
import "./IERC20.sol";

contract FarmFactory is Ownable {
    event NewFarmCreated(address indexed farm);

    address[] public farms;

    function createFarm(
        IERC20 _sushi,
        address _devaddr,
        uint256 _sushiPerBlock,
        uint256 _startBlock,
        uint256 _bonusEndBlock
    ) public returns (address newFarm) {
        Farm farm = new Farm(_sushi, _devaddr, _sushiPerBlock, _startBlock, _bonusEndBlock);
        farm.transferOwnership(msg.sender);

        farms.push(address(farm));
        emit NewFarmCreated(address(farm));
        return address(farm);
    }

    function getAllFarms() public view returns (address[] memory) {
        return farms;
    }
}
