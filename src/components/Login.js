import React from "react";

import { userContext } from "../App";
import useArcanaAuth from "./useArcanaAuth";

const Login = () => {
  const [loading, setLoading] = React.useState(true);
  const [email, setEmail] = React.useState("");
  const [account, setAccount] = React.useState("");

  const {
    initializeAuth,
    loggedIn,
    getAccounts,
    login,
    loginWithLink,
    logout,
    initialized,
  } = useArcanaAuth();

  const initialize = async () => {
    await initializeAuth();
  };

  const handleLogout = async () => {
    await logout();
  };


    // const {web3auth,setWeb3auth , provider ,setProvider} = React.useContext(userContext)
  React.useEffect(() => {
    initialize();
  }, []);

  React.useEffect(() => {
    const loadDetails = async () => {
      if (initialized) {
        if (loggedIn) {
          const acc = await getAccounts();
          console.log(acc)
          setAccount(acc[0]);
          setLoading(false);
        } else {
          setLoading(false);
        }
      }
    };
    loadDetails();
  }, [initialized, loggedIn]);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };


  return (
    <div className="border border-black rounded-full text-xl p-4" onClick={()=>{login("google")}}>
      Connect your wallet
    </div>
  );
};

export default Login;
