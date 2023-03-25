import "./App.css";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import React, { useEffect, useState } from "react";
const { ethers } = require("ethers");
const { JsonRpcProvider } = require("ethers/providers");
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/home";

// ABIs
import NFTmint from "./abis/NFTmint.json";

export const userContext = React.createContext();

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [initialized, setInitialized] = React.useState(false);
  const [account, setAccount] = React.useState(null);
  const [email, setEmail] = React.useState(null);

  //web3 state
  const [web3init, setweb3init] = useState({
    provider: null,
    signer: null,
    contract: null,
  });

  useEffect(() => {
    const fetchcontract = async () => {
      const nftmintAdd = "0x999ffD676e212622478C348F9aAB2860c03EEEfD";
      const nftmintAbi = NFTmint.abi;
      try {
        const provider = new JsonRpcProvider(
          "https://polygon-mumbai.g.alchemy.com/v2/LHYX8jC-hOYNjZzvd3GdN1ebuegSk6tp"
        );
        const signer = provider.getSigner();
        const nftmintcontract = new ethers.Contract(
          nftmintAdd,
          nftmintAbi,
          signer
        );

        setweb3init({
          provider,
          signer,
          nftmintcontract,
        });
      } catch (error) {
        console.log(error);
      }

      fetchcontract();
    };
  }, [web3init.provider]);

  console.log("Jai sri ram: ", web3init);

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
