import "./App.css";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import React, { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/home";
import NFTmint from "./abis/NFTmint.json";
import detectEthereumProvider from "@metamask/detect-provider";
const Web3 = require("web3");

// ABIs

export const userContext = React.createContext();

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [initialized, setInitialized] = React.useState(false);
  const [account, setAccount] = React.useState(null);
  const [email, setEmail] = React.useState(null);

  //web3 state
  const [web3Api, setWeb3Api] = useState({
    provider: null,
    web3: null,
  });

  const [nftmintcontract, setNftmintContract] = useState(null);
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
      const accounts = await web3Api.web3.eth.getAccounts();
      console.log(accounts);
      setAccount(accounts[0]);
    };
    web3Api.web3 && getAccounts();
  }, [web3Api.web3, account]);

  //creating a contract instance

  useEffect(() => {
    const contractInstance = async () => {
      const nftcontabi = NFTmint.abi;
      const nftcontadd = "0xE5409D80F93Aa22698C8828A75a340A20980A360";

      let contract = new web3Api.web3.eth.Contract(nftcontabi, nftcontadd);
      console.log("mera\n");
      console.log(contract);

      setNftmintContract(contract);
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
      }}
    >
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </Router>
    </userContext.Provider>
  );
}

export default App;
