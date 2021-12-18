//We're going to use this function to deploy the contracts to our local network.
const main = async () => {
//We're going to use this const to get the person who waved
    const [deployer] = await hre.ethers.getSigners();
//--------------------------------------------------------------------------
//We're going to use this const to get the wallet balance
    const deployerBalance = await deployer.getBalance();
//--------------------------------------------------------------------------
//We're going to use this const to get the contract factory
    const Token = await hre.ethers.getContractFactory("WavePortal");
//--------------------------------------------------------------------------
/*Now we are going to await out contract to be deployed*/
    const contract = await Token.deploy();
//--------------------------------------------------------------------------
/*Now let's just invoke the async function above*/
    await contract.deployed(); 
//--------------------------------------------------------------------------
/*Now, let's just log everything to the console*/
    console.log(
    'Deployer account: ', deployer.address, '\n',
    'Deployer balance: ', deployerBalance.toString(), '\n',
    'Contract address: ', contract.address
    );
//--------------------------------------------------------------------------
}
//--------------------------------------------------------------------------
/*Let's just run everything
ps: To deploy it to the localhost we shall use the command
****npx hardhat run scripts/deploy.js --network localhost****
*/
const run = async() => {
    try {
        await main();
        process.exit(0);
    } catch (e) {
        console.log(e);
        process.exit(1);
    }
}
//--------------------------------------------------------------------------

run();