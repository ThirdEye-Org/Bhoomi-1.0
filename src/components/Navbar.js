import React from "react";
import bhoomiLogo from "./assets/bhoomiLogo.png";
function Navbar() {
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
        <div className="font-pSans font-normal text-base flex justify-center items-center text-[rgba(0,0,0,0.80)] cursor-pointer border px-6  border-[rgba(0,0,0,0.80)] rounded-full">
          Validate
        </div>
      </div>
    </div>
  );
}

export default Navbar;
