import "./App.css";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import React, { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/home";
import ValidateProperty from "./components/validateProperty";
import NFTmint from "./abis/NFTmint.json";
import BMToken from "./abis/BMToken.json";
import BMToken1155 from "./abis/BMToken1155.json";
import Bhoomi from "./abis/Bhoomi.json";

import detectEthereumProvider from "@metamask/detect-provider";
const Web3 = require("web3");



export const userContext = React.createContext();

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [initialized, setInitialized] = React.useState(false);
  const [account, setAccount] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [balance, setBalance] = React.useState(0);

  //web3 state
  const [web3Api, setWeb3Api] = useState({
    provider: null,
    web3: null,
  });

  const [contract, setContract] = useState(null);
  useEffect(() => {
    const loadProvider = async () => {
      const provider = await detectEthereumProvider();

      if (provider) {
        provider.request({ method: "eth_requestAccounts" });
        // console.log(provider);
        setWeb3Api({
          web3: new Web3(provider),
          provider,
        });
      } else {
        console.error("Install Metamask");
      }
    };

    loadProvider();
  }, []);

  useEffect(() => {
    const getAccounts = async () => {
      web3Api.web3.eth.getAccounts().then((accounts) => {
        console.log(accounts);
        setAccount(accounts[0]);
        
      });
      // window.location.reload(false);
      
    };
    web3Api.web3 && getAccounts();
  }, [web3Api.web3, account]);

  //creating a contract instance

  useEffect(() => {
    const contractInstance = async () => {
      const nftcontabi = NFTmint.abi;
      const nftcontadd = "0x2A52f24132F6Cf383aeed6d584D2da1b02fcB27e";
      const bmtokenabi = BMToken.abi;
      const bmtokenadd = "0xe017ed1B347fB6CC096ce80ea263C4148e6039D8";
      const bm1155abi = BMToken1155.abi;
      const bm1155add = "0x22D679E80AC8e37EE49FC5f6aF35c10e4AD7Ccad";
      const bhoomiabi = Bhoomi.abi;
      const bhoomiadd = "0xF38f82a6A27DdA0b0980BDF3867eFC3768ac8b5C";

      let contract1 = new web3Api.web3.eth.Contract(nftcontabi, nftcontadd);
      let contract2 = new web3Api.web3.eth.Contract(bmtokenabi, bmtokenadd);
      let contract3 = new web3Api.web3.eth.Contract(bm1155abi, bm1155add);
      let contract4 = new web3Api.web3.eth.Contract(bhoomiabi,bhoomiadd);
      console.log("mera\n");

      setContract({
        nftmint: contract1,
        bmtoken: contract2,
        bm1155: contract3,
        bhoomi:contract4
      });

      console.log(contract)
    };
    web3Api.web3 && contractInstance();
  }, [web3Api.web3]);

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
        contract,
        setContract,
        web3Api
      }}
    >
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/validate" element={<ValidateProperty />} />
          </Routes>
        </div>
      </Router>
    </userContext.Provider>
  );
}

export default App;
