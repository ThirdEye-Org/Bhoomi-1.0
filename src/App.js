import "./App.css";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import React, { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/home";
import NFTmint from "./abis/NFTmint.json";
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

  console.log(web3Api);

  // const [nftmintcontract, setNftmintContract] = useState(null);
  // useEffect(() => {
  //   const loadProvider = async () => {
  //     if (web3Api.provider) {
  //       setWeb3Api({
  //         web3: new Web3(web3Api.provider),
  //         provider: web3Api.provider,
  //       });
  //     } else {
  //       console.error("provider is not setted");
  //     }
  //   };

  //    loadProvider();
  // }, [web3Api.provider]);

  // useEffect(() => {
  //   const getAccounts = async () => {
  //     const accounts = await web3Api.web3.eth.getAccounts();
  //     console.log(accounts);
  //     setAccount(accounts[0]);
  //   };
  //   web3Api.web3 && getAccounts();
  // }, [web3Api.web3, account]);

  // //creating a contract instance

  // useEffect(() => {
  //   const contractInstance = async () => {
  //     const cont_abi = NFTmint.abi;
  //     const cont_add = "0x95CF384debE358258D0fFA736B35B9a53A86eA1B";
  //     let contract = new web3Api.web3.eth.Contract(cont_abi, cont_add);
  //     console.log(contract);

  //     setNftmintContract(contract);
  //   };
  //   web3Api.web3 && contractInstance();
  // }, [web3Api.web3]);

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
