import React, { useState } from "react";
import tokenLogo2 from "./assets/tokenLogo2.png";
import glow from "./assets/glow.png";
import whiteTick from "./assets/whiteTick.svg";
function BuyToken() {
  const [tokens, setTokens] = useState(0);
  const toggleCountAdd = () => {
    setTokens(tokens + 1);
  };
  const toggleCountSubtract = () => {
    if (tokens > 0) {
      setTokens(tokens - 1);
    }
  };
  return (
    <div className="flex font-pSans items-center h-[25rem] p-12 space-x-6 overflow-hidden">
      <img src={tokenLogo2} alt="" className="z-[1] h-60" />
      <img src={glow} alt="" className="absolute " />
      <div className="z-[1]">
        <div className="text-2xl font-bold text-[rgba(0,0,0,0.7)]">
          Buy Bhoomi Tokens
        </div>
        <div className="bord border-b-2 border-[#5A7BF3] w-3/4 mt-2" />
        <div className="text-[rgba(0,0,0,0.6)] font-normal text-xs mt-4">
          BM Tokens are inbuilt tokens of BHOOMI Protocol. They would be used to
          make all sorts of in-app purchases.
        </div>
        <div className="mt-6">
          <div className="flex space-x-6 justify-center ">
            <div className="flex justify-center items-center">
              {" "}
              <div
                className="h-9 w-9 rounded-full text-white bg-[#5769ED] flex items-center justify-center text-4xl cursor-pointer select-none"
                onClick={toggleCountSubtract}
              >
                &#8722;
              </div>
            </div>
            <div className="flex flex-row">
              <div className="text-6xl font-light text-[rgba(0,0,0,0.65)]">
                {tokens}
              </div>
              <div className=" flex items-end font-inter text-[rgba(0,0,0,0.6)]">
                {tokens === 1 || tokens === 0 ? "token" : "tokens"}
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div
                className="h-9 w-9 rounded-full text-white bg-[#5769ED] flex items-center justify-center text-4xl cursor-pointer select-none"
                onClick={toggleCountAdd}
              >
                &#43;
              </div>
            </div>
          </div>
        </div>
        <div className="h-12 w-full bg-[#5A7BF3] rounded-2xl flex text-white items-center justify-center space-x-3 mt-6 cursor-pointer">
          <img src={whiteTick} alt="" className="h-1/2" />
          <span className="fent-medium select-none">Purchase securely</span>
        </div>
      </div>
    </div>
  );
}

export default BuyToken;
