import "./App.css";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/home";
import ValidateProperty from "./components/validateProperty";

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
          setEmail
        }}
      >
    <Router>
      <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/validate" element={<ValidateProperty/>} />
        </Routes>
        </div>
      </Router>
      </userContext.Provider>
  
  );
}

export default App;
