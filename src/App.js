import "./App.css";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import ThreeScene from "./ThreeScene";
import React from "react";
import Modal from "./components/Modal";

export const userContext = React.createContext();

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [initialized, setInitialized] = React.useState(false);
  const [account, setAccount] = React.useState(null);
  const [email, setEmail] = React.useState(null);

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
      <div>
        {/* <ThreeScene/>
        <Navbar /> */}
        {/* <Profile /> */}
        {/* <Model/> */}
        {/* <Home /> */}
        <Modal/>
      </div>
    </userContext.Provider>
  );
}

export default App;
