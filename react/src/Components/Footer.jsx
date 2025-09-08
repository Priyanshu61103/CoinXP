import React from "react";
import { useSelector,useDispatch } from "react-redux"
const Footer = () => {

  const mode = useSelector((state) => state.mode.value);

  return (
    <div>
      <footer> 
        <div className={mode === "light"?"text-black bg-white":"text-white bg-black"}>
          <div className="flex justify-center mt-2">
            <div className="md:w-300 w-100 h-1 bg-orange-600 "></div>
          </div>
          <div className="flex justify-center m-5 text-sm font-sans">
             Copyright©2025,CoinXP-All rights reserved
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
