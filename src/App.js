import "./App.css";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import ThreeScene from "./ThreeScene";
import React, { useEffect } from "react";
import { ethers } from "hardhat";

// import abis
import NFTmintABI from "./contracts/NFTmint.json";
import BMTokenABI from "./contracts/BMToken.json";
import BMToken1155ABI from "./contracts/BMToken1155.json";
import BhoomiABI from "./contracts/Bhoomi.json";

export const userContext = React.createContext();

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [initialized, setInitialized] = React.useState(false);
  const [account, setAccount] = React.useState(null);
  const [email, setEmail] = React.useState(null);

  //web3
  const [web3state, setWeb3state] = React.useState({
    provider: null,
    signer: null,
    nftMintContract: null,
    bmTokenContract: null,
    bmToken1155Contract: null,
    bhoomiContract: null,
  });

  useEffect(() => {
    const fetchContract = async () => {
      const nftMintContractAdd = "0x28E12D8541D2D623335861786ee68b73e4f14d5e"; //this point  ;
      const nftMintContractAbi = NFTmintABI.abi;
      try {
        const provider1 = new ethers.provider.WebProvider(web3state.provider);
        const signer = provider1.getSigner();
        const contract = new ethers.Contract(
          nftMintContractAdd,
          nftMintContractAbi,
          signer
        );
        setWeb3state({provider:web3state.provider,
          signer: signer,
          nftMintContract: contract,
          bmTokenContract: null,
          bmToken1155Contract: null,
          bhoomiContract: null,})
      } catch (error) {
        console.log(error);
      }
    };
    fetchContract();
  },[web3state.provider]);

  console.log("oye pols agi pols \n",web3state);
  return (
    <userContext.Provider
      value={{
        loggedIn,
        setLoggedIn,
        initialized,
        setInitialized,
        account,
        setAccount,
        email,
        setEmail,
        web3state,
        setWeb3state,
      }}
    >
      <div>
        {/* <ThreeScene/> */}
        <Navbar />
        <Profile />
        {/* <Model/> */}
        {/* <Home /> */}
      </div>
    </userContext.Provider>
  );
}

export default App;
