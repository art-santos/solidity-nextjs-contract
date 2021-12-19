// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract WavePortal {
/*This is going to be the type of our variable that's going to store the value of waves.
this is also going to be a state variable.
*/
    uint256 totalWaves;

/*First, lets create an event for every wave that has been created.*/
    event NewWave(address indexed from, uint256 timestamp, string message);
//--------------------------------------------------------------------------------------  
/*Secondly, let's define an sctructure for our object wave, pretty much like types or interfaces in typescript*/
    struct Wave {
        address waver; //address of the people who's sending the wave
        string message; //string containing the message of the wave
        uint256 timestamp; //timestamp of the wave
    }
//--------------------------------------------------------------------------------------
/*Thirdly, let's say to our contract the we are going to store not just one, but many waves,
That are going to be contained by an array of waves.
*/
    Wave[] waves;
//--------------------------------------------------------------------------------------
/*Fourthly, let's define a function that will be called when someone wants to send a wave.*/
    constructor(){
        console.log("I'M THE SMART CONTRACT, BITCH!");
    }
//--------------------------------------------------------------------------------------
/* This public function is going to both sum 1 everytime someone waves in our contract and 
also return the user who waved.
We're are also going to pass _message as a parameter of the function and so on.

ps: msg.sender is the method used to return the wallet address of the user who waved.
pss: the public keyword is the one responsible for letting us call our functions in the js script for example.
*/
    function wave(string memory _message) public {
    totalWaves += 1;
    console.log("%s has waved", msg.sender, _message);
//--------------------------------------------------------------------------------------
/*Let's use a function right here to push some new waves to that Wave[] array that we've created 
up there.
*/
    waves.push(Wave(msg.sender, _message, block.timestamp));
//--------------------------------------------------------------------------------------
/*let's also create a new wake following the patterns we've stablished*/
    emit NewWave(msg.sender, block.timestamp, _message);
    }

//--------------------------------------------------------------------------------------
/*Here we are going to get all the messages they've sent to us as long with the waves*/
    function getAllWaves() public view returns (Wave[] memory) {
        return waves;
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

