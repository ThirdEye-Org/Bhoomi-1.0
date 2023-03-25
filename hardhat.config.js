require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
    defaultNetwork: "matic",
    networks: {
      hardhat: {
      },
      polygon_mumbai: {
        url: "https://rpc-mumbai.maticvigil.com",
        accounts: [process.env.PRIVATE_KEY]
      }
    },
    etherscan: {
      apiKey: process.env.POLYGONSCAN_API_KEY
  },
  solidity: {
    version: "0.8.18",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
};
