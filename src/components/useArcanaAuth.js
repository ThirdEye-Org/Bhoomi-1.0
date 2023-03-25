import { AuthProvider } from "@arcana/auth";
import { useEffect, useState, useContext } from "react";
import { userContext } from "../App";
//Config
const appAdd = "70ab0782a9cad9a68a47b69f12c98c9ab8c5109b";

let auth = new AuthProvider(appAdd);

function useArcanaAuth() {
  const {
    initialized,
    setInitialized,
    loggedIn,
    setLoggedIn,
    setAccount,
    web3init,
    setweb3init,
  } = useContext(userContext);

  const initializeAuth = async () => {
    await auth.init({ position: "right" });
    setInitialized(true);
    setweb3init({ provider: auth.provider });
  };

  //Social Login

  const login = async (socialType) => {
    if (initialized) {
      const ans = await auth.loginWithSocial(socialType);
      console.log(ans);
      setLoggedIn(true);
    }
  };

  //Email Link/ Passwordless login
  const loginWithLink = async (email) => {
    if (initialized) {
      await auth.loginWithLink(email);
      setLoggedIn(true);
    }
  };

  //Getting user Accounts
  const getAccounts = async () => {
    if (initialized) {
      // console.log(auth.provider)
      console.log("Start");

      const acc = await auth.provider.request({ method: "eth_accounts" });
      console.log("end");
      return acc;
    }
  };

  //Logout
  const logout = async () => {
    if (initialized && loggedIn) {
      await auth.logout();
      setLoggedIn(false);
    }
  };

  useEffect(() => {
    const checkLogin = async () => {
      // console.log(auth);
      // console.log( )
      await auth.init();
      if (await auth.isLoggedIn()) {
        setLoggedIn(true);
      }
    };
    checkLogin();
  }, []);

  return {
    initializeAuth,
    login,
    loginWithLink,
    getAccounts,
    logout,
  };
}

export default useArcanaAuth;
