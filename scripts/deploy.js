// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
 // addresses
  const [owner,user1,user2,user3,user4,user5] = await hre.ethers.getSigners();

// constract deployments
// NFTmint
const NFTmint = await hre.ethers.getContractFactory("NFTmint");
const contract_nftmint = await NFTmint.deploy(); //instance of cont
await contract_nftmint.deployed();
console.log("Address of NFTmint contract : ",contract_nftmint.address
  );
// BMToken
const BMToken = await hre.ethers.getContractFactory("BMToken");
const contract_bmttoken = await BMToken.deploy(); //instance of cont
await contract_bmttoken.deployed();
console.log("Address of BMToken contract : ",contract_bmttoken.address
  );

const BMToken1155 = await hre.ethers.getContractFactory("BMToken1155");
const contract_bmtoken1155 = await BMToken1155.deploy(); //instance of cont
await contract_bmtoken1155.deployed();
console.log("Address of BMToken1155 contract : ",contract_bmtoken1155.address
    );

const Bhoomi = await hre.ethers.getContractFactory("Bhoomi");
const contract_bhoomi = await Bhoomi.deploy(5,20,contract_bmttoken.address,100,contract_nftmint.address,contract_bmtoken1155.address);
await contract_bhoomi.deployed();
console.log("Address of Bhoomi contract : ",contract_bhoomi.address
    );

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
