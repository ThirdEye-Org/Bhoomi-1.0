import React from "react";
import profileBuilding from "./assets/profileBuilding.png";
import profilebuilding2 from "./assets/profilebuilding2.png";
function ProfileHero() {
  return (
    <div className="flex flex-col h-screen justify-center">
      <div className="font-pSans font-extrabold text-6xl">Owned properties</div>
      <div className="ds border-b-2 border-[#5A7BF3] w-1/2 mt-5" />
      <div className="font-pSans font-normal text-[rgba(0,0,0,0.69)] text-base w-3/4 mt-5">
        Regdgdoho lorem upsim soagha loreoahg ophapsgohapsdhlasdgjoash
        gapgohafdsoiah oiha
      </div>
      <div className="flex flex-row mt-16 space-x-10">
        <div className="relative overflow-hidden rounded-2xl ">
          <img src={profileBuilding} alt="" className="  h-96 w-72" />
          <div className="bg-gradient-to-t from-[rgba(0,0,0,0.62)]  rounded-2xl  h-96 w-72 top-0 absolute" />
          <div className="absolute bottom-5 w-72 p-4 flex flex-col">
            <div className="font-semibold  font-pSans text-xl z-[1]   text-white">
              D21, DLF, Central Delhi, Rajiv Chowk, New Delhi - 110055
            </div>
            <div className=" text-[rgba(255,255,255,0.79)] font-pSans text-xs italic font-light">
              Verified
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-2xl ">
          <img src={profilebuilding2} alt="" className="  h-96 w-72" />
          <div className="bg-gradient-to-t from-[rgba(0,0,0,0.62)]  rounded-2xl  h-96 w-72 top-0 absolute" />
          <div className="absolute bottom-5 w-72 p-4 flex flex-col">
            <div className="font-semibold  font-pSans text-xl z-[1]   text-white">
              10/7, Old Campus, GGSIPU-110077
            </div>
            <div className=" text-[rgba(255,255,255,0.79)] font-pSans text-xs italic font-light">
              Invested
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileHero;
