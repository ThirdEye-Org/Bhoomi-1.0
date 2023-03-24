import {  AuthProvider } from "@arcana/auth";
import { useEffect, useState } from "react";

//Config
const appAdd = "bf633a57dd19e7f491ada891b1607f79942b98a2";

let auth = new AuthProvider(appAdd);

function useArcanaAuth() {
  const [initialized, setInitialized] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const initializeAuth = async () => {
    await auth.init({ position: "right" });
    setInitialized(true);
  };

  //Social Login

  const login = async (socialType) => {
    if (initialized) {
      const ans =await auth.loginWithSocial(socialType);
      console.log(ans);
      setLoggedIn(true);
      window.location.reload();
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
      return await auth.provider.request({ method: "eth_accounts" });
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
      console.log(auth);
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
    loggedIn,
    login,
    loginWithLink,
    getAccounts,
    logout,
    initialized,
  };
}

export default useArcanaAuth;