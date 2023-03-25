import React from "react";
import whiteTick from "./assets/whiteTick.svg";
import penthouse from "./assets/penthouse.png";
function Property() {
  return (
    <div className="flex font-pSans items-center h-[25rem] p-2 space-x-6 overflow-hidden">
      <div className=" h-[24rem] w-[16rem]">
        {" "}
        <img src={penthouse} alt="" className="h-full w-full" />
      </div>
      {/* <img src={glow} alt="" className="absolute " /> */}
      <div className="">
        <div className="font-bold text-2xl  text-[rgba(0,0,0,0.7)]">
          D21, DLF, Central Delhi,
          <br /> Rajiv Chowk, New Delhi - 110055
        </div>
        <div className="text-sm font-light text-[rgba(0,0,0,0.6)] italic mt-4 ">
          Luxury penthouse located in the heart of Central Delhi
        </div>
        <div className="flex flex-row space-x-8 mt-6">
          <div className="flex flex-col">
            <div className="font font-medium text-[rgba(0,0,0,0.7)] text-2xl flex items-center justify-center">
              2207
            </div>
            <div className="text-sm text-[rgba(0,0,0,0.6)]">sq ft Area</div>
          </div>
          <div className="flex flex-col ">
            <div className="font font-medium text-[rgba(0,0,0,0.7)] text-2xl flex items-center justify-center">
              2
            </div>
            <div className="text-sm text-[rgba(0,0,0,0.6)]">bedrooms</div>
          </div>
          <div className="flex flex-col">
            <div className="font font-medium text-[rgba(0,0,0,0.7)] text-2xl flex items-center justify-center">
              2
            </div>
            <div className="text-sm text-[rgba(0,0,0,0.6)]">bathrooms</div>
          </div>
          <div className="flex flex-col">
            <div className="font font-medium text-[rgba(0,0,0,0.7)] text-2xl flex items-center justify-center">
              2002
            </div>
            <div className="text-sm text-[rgba(0,0,0,0.6)]">year built</div>
          </div>
        </div>

        <div className="flex space-x-4 mt-10">
          <div className="h-12 w-1/2 bg-[#5A7BF3] hover:bg-[#5574e7] rounded-2xl flex text-white items-center justify-center space-x-3 mt-6 cursor-pointer">
            <img src={whiteTick} alt="" className="h-1/2" />
            <span className="font-medium select-none">Invest</span>
          </div>
          <div className="h-12 w-1/2 bg-white border-2 border-[#5A7BF3] rounded-2xl flex text-[#5A7BF3] items-center justify-center space-x-3 mt-6 cursor-pointer">
            {/* <img src={whiteTick} alt="" className="h-1/2" /> */}
            <span className="font-medium select-none ">more details</span>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Property;
