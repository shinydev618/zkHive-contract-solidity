// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const nftCollection = await hre.ethers.getContractFactory("Flappybee");
  const greeter = await nftCollection.deploy(
    // "FlappyBee",
    // "BEET",
    // "100000000000000000000000000000000",
    // "0x0b043cf92214D72ec5AcE6e54805797d627448E1" // mine test
    // "0x4d175A3ae6f70398eAC94c79afcebb1fFd8abd6B" // project owner's wallet
    // "0x302dc96a4398E9Dc08ac3f5324B70661C21750aD" //mine
  );

  await greeter.deployed();

  console.log("Greeter deployed to:", greeter.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
