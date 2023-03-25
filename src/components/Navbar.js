import React from "react";
import bhoomiLogo from "./assets/bhoomiLogo.png";
import Login from "./Login";
import { userContext } from "../App";
function Navbar() {
  const {loggedIn} = React.useContext(userContext);
  return (
    <div className="fixed top-8 left-0 w-screen flex z-[2]">
      <div>
        <img src={bhoomiLogo} alt="" className="h-12 cursor-pointer ml-8 " />
      </div>
      <div className="flex ml-auto mr-10 space-x-8">
        <div className="font-pSans font-normal text-base flex justify-center items-center text-[rgba(0,0,0,0.80)] cursor-pointer ">
          User profile
        </div>
        <div className="font-pSans font-normal text-base flex justify-center items-center text-[rgba(0,0,0,0.80)] cursor-pointer">
          Buy Bhoomi tokens
        </div>
        {
          loggedIn ? (<div className="font-pSans font-normal text-base flex justify-center items-center text-[rgba(0,0,0,0.80)] cursor-pointer border px-6  border-[rgba(0,0,0,0.80)] rounded-full hover:bg-black hover:text-white">
          Validate
        </div>): <Login />
        }
      </div>
    </div>
  );
}

export default Navbar;
