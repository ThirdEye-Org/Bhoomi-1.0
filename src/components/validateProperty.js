import React from "react";
import profilebuilding2 from "./assets/profilebuilding2.png";

function ValidateProperty() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center container mx-auto font-pSans px-32 ">
      <div className="font-bold text-6xl  ">Validate properties</div>
      <div className="w-1/5 border-2 border-[#5A7BF3]" />
      <div className=" text-normal text-center text-[rgba(0,0,0,0.69)] ">
        The NFT is validated by the community of validators, hence power the
        decentralization protocols. <br /> To be a validator who have to stake
        20 BM Tokens that will make sure that the validator work properly
        because if not they are slashed by the smart contract. NFTs are verified
        after 70% of the validators votes on the proof of the ownership.
      </div>
      <div>
        <div className="relative  rounded-2xl ">
          <img src={profilebuilding2} alt="" className="  h-96 w-72" />
          <div className="bg-gradient-to-t from-[rgba(0,0,0,0.62)]  rounded-2xl  h-96 w-72 top-0 absolute" />
          <div className="absolute bottom-5 w-72 p-4 flex flex-col">
            <div className="font-semibold  font-pSans text-xl z-[1]  mb-6 text-white">
              D21, DLF, Central Delhi, Rajiv Chowk, New Delhi - 110055
            </div>
          </div>
          <div className="flex absolute z-[1] -bottom-10  space-x-12 left-10">
            <div className="h-20 w-20 rounded-full cursor-pointer flex items-center justify-center text-white text-3xl bg-[#5A7BF3]">
              &#x2714;
            </div>
            <div className="h-20 w-20 rounded-full cursor-pointer flex items-center justify-center text-[#5A7BF3] text-4xl bg-white border-2 border-[#5A7BF3]">
              &#10006;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ValidateProperty;
