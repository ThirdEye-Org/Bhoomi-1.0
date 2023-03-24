import React from "react";

import { userContext } from "../App";
import useArcanaAuth from "./useArcanaAuth";

const Login = () => {
  const{email,setEmail,account,setAccount,initialized,setInitialized , loggedIn,setLoggedIn} = React.useContext(userContext);

  const {
    initializeAuth,
    getAccounts,
    login,
    loginWithLink,
    logout,
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
          setAccount(acc[0]);
          console.log(account)
          // setLoading(false);
        } else {
          // setLoading(false);
        }
      }
    };
    loadDetails();
  }, [initialized, loggedIn]);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };


  return (
    <div className="font-pSans font-normal text-base flex justify-center items-center text-[rgba(0,0,0,0.80)] cursor-pointer border px-6  border-[rgba(0,0,0,0.80)] rounded-full hover:bg-black hover:text-white" onClick={()=>{login("google")}}>
      Connect your wallet 
    </div>
  );
};

export default Login;
