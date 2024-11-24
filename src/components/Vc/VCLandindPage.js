import React from "react";
import portfoliohero from "../images/bg.jpeg"
import Vc from "./Vc"; 
const VCLandingPage = () => {
  return (
    <div>
        <div
        className="md:h-[35vh] h-[50vh] bg-fixed bg-top md:text-7xl text-5xl font-bold text-white bg-cover flex justify-center items-center "
        style={{ backgroundImage: `url(${portfoliohero})` }}
        >
            <div className="bg-black/50 md:h-[35vh] h-[50vh]  flex justify-center items-center w-[100%]">
                VC's CUP
            </div>
        </div>
        <Vc />
    </div>
  );
};

export default VCLandingPage;
