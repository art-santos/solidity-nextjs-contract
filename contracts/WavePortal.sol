// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract WavePortal {
/*This is going to be the type of our variable that's going to store the value of waves.
this is also going to be a state variable.
*/
    uint256 totalWaves;
//--------------------------------------------------------------------------------------
    constructor(){
        console.log("Yo yo, i am a smart contract");
    }
//--------------------------------------------------------------------------------------
/* This public function is going to both sum 1 everytime someone waves in our contract and 
also return the user who waved.
ps: msg.sender is the method used to return the wallet address of the user who waved.
pss: the public keyword is the one responsible for letting us call our functions in the js script for example.
*/
    function wave() public {
            totalWaves += 1;
            console.log("%s has waved", msg.sender);
        }
//--------------------------------------------------------------------------------------
/*this function is going to be responsible for returning the total amount of times someone has waved.
ps: free functions cannot have visibility error is caused by functions declared outside of classes*/
    function getTotalWaves() public view returns (uint256){
        console.log("Total Waves: %d", totalWaves);
        return totalWaves;
    }
//--------------------------------------------------------------------------------------
}

