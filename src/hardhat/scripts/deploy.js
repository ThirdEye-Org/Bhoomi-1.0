// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const NFTmint = await hre.ethers.getContractFactory("NFTmint");
  const NFTmintContract = await NFTmint.deploy();
  await NFTmintContract.deployed();
  console.log("Adress of NFTmint Contract :", NFTmintContract.address);

  const BMToken = await hre.ethers.getContractFactory("BMToken");
  const BMTokenContract = await BMToken.deploy();
  await BMTokenContract.deployed();
  console.log("Adress of BMToken Contract :", BMTokenContract.address);

  const BMToken1155 = await hre.ethers.getContractFactory("BMToken1155");
  const BMToken1155Contract = await BMToken1155.deploy();
  await BMToken1155Contract.deployed();
  console.log("Adress of BMToken1155 Contract :", BMToken1155Contract.address);

  

  const Bhoomi = await hre.ethers.getContractFactory("Bhoomi");
  const BhoomiContract = await Bhoomi.deploy(5,20,BMTokenContract.address,100,NFTmintContract.address,BMToken1155Contract.address);
  await BhoomiContract.deployed();
  console.log("Adress of Bhoomi Contract :", BhoomiContract.address);


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
