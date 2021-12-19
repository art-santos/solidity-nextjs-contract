//--------------------------------------------------------------------------
//Async function responsible for getting the contract
//--------------------------------------------------------------------------
const main = async () => {
//That's the variable that will hold the amount of time the user waved. It's going to store a number.
    let waveCount;
//--------------------------------------------------------------------------
//That's the variable who's going to store the wave action contained in out contract. It's going to store a function.
    let userWave;
//--------------------------------------------------------------------------
//This is the function responsible for getting the message sender
    const [owner, randomPerson] = await hre.ethers.getSigners();
//--------------------------------------------------------------------------
/*this function is responsible for compiling the contract 
ps: the contract name should existe in the folder "contracts"*/
    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
//--------------------------------------------------------------------------
//this is responsible for creating a local ethereum network and running the contract on it
    const waveContract = await waveContractFactory.deploy();
//--------------------------------------------------------------------------
//This is responsible for awaiting until the contract has been deployed to our local eth network
    await waveContract.deployed();
//--------------------------------------------------------------------------
//When everything is deployed our async function will return the contract address
    console.log(`Deployed Wave contract at ${waveContract.address}`);
//--------------------------------------------------------------------------
/*After we've used our first function to get the signers, then we can return
the wallet address of who's the responsible for the action*/
    console.log("Contract deployed by:", owner.address);
//--------------------------------------------------------------------------
//Right now, let's set the waveCount to the be equal the return of uint256 contained by getTotalWaves()
    waveCount = await waveContract.getTotalWaves();
//--------------------------------------------------------------------------
// Now let's invoke our wave action. You can uncomment this function and comment the one bellow.
//  userWave = await waveContract.wave();
//--------------------------------------------------------------------------
//If we want to test the function with some random person, we can do it like this:
/*ps: after the last update, an string is required to run the program*/
    userWave = await waveContract.connect(randomPerson).wave('message');
//--------------------------------------------------------------------------
/*Let's also create an message signed by a random user
ps: bellow there's also another method to create a message signed by a random user*/
    const [_, randomMessager] = await hre.ethers.getSigners();
    const message = await waveContract.connect(randomMessager).wave('a hole new message');
    await message.wait();
//--------------------------------------------------------------------------
/*Let's also get all waves that our frinds have send to us*/
    const waves = await waveContract.getAllWaves();
    console.log("All Waves:", waves);
//--------------------------------------------------------------------------

}
//--------------------------------------------------------------------------
//Runner for the main function. Responsible for trying and catching errors in the exe.
const runContract = async () => {
    try {
        await main();
        process.exit(0);
    } catch (e) {
        console.log(e);
        process.exit(1);
    }
};
/*This is responsible for running the contract when we execute npx on the file
we have to use the command ****npx hardhat run scripts/run.js**** to run the contract*/
runContract();
//--------------------------------------------------------------------------

/*we should run the command npx hardhat cause this way its going to get all the specs we've
setted to hardhat.config.js. That's cause of that we do not need to require("hardhat on every js file we create")*/
//--------------------------------------------------------------------------