import React, { useState } from "react";
import bhoomiLogo from "./assets/bhoomiLogo.png";
import Login from "./Login";
import { userContext } from "../App";
import Modal from "./Modal";
import BuyToken from "./BuyToken";
function Navbar() {
  const { loggedIn } = React.useContext(userContext);
  const [buyTokens, setBuyTokens] = useState(false);
  const toggleBuyTokens = () => {
    setBuyTokens(!buyTokens);
  };

  return (
    <div className="fixed top-8 left-0 w-screen flex z-[2]">
      <div>
        <img src={bhoomiLogo} alt="" className="h-12 cursor-pointer ml-8 " />
      </div>
      <div className="flex ml-auto mr-10 space-x-8">
        {loggedIn ? (
          <>
            {" "}
            <div className="font-pSans font-normal text-base flex justify-center items-center text-[rgba(0,0,0,0.80)] cursor-pointer hover:underline  ">
              User profile
            </div>
            <div
              className="font-pSans font-normal text-base flex justify-center items-center text-[rgba(0,0,0,0.80)] cursor-pointer hover:underline "
              onClick={toggleBuyTokens}
            >
              Buy Bhoomi tokens
            </div>
            {buyTokens && (
              <Modal
                children={<BuyToken />}
                toggleBuyTokens={toggleBuyTokens}
              />
            )}
            <div className="font-pSans font-normal text-base flex justify-center items-center text-[rgba(0,0,0,0.80)] cursor-pointer border px-6  border-[rgba(0,0,0,0.80)] rounded-full hover:bg-black hover:text-white">
              Validate
            </div>
          </>
        ) : (
          <Login />
        )}
      </div>
    </div>
  );
}

export default Navbar;
