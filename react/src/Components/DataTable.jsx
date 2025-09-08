import React from "react";
import { useContext } from "react";
import { coinContext } from "../context/context";
import { Link } from "react-router-dom";
import { useSelector , useDispatch } from "react-redux";
import { setMode } from "../Redux/slice/slice"; 
import { setCurrency } from "../Redux/slice/slice2";
import { setCurrencySign } from "../Redux/slice/slice3";
import Footer from "./Footer";

const DataTable = () => {
  const obj = useContext(coinContext);
  const arr = obj.apiData;
  const mode = useSelector((state)=>state.mode.value);
  const currency = useSelector((state)=>state.currency.value);
  const currencySign = useSelector((state)=>state.currencySign.value);
   return (
      <div className={mode==="light"?"bg-white":"bg-black"}>
        <div className="h-10 md:h-20 flex justify-center items-center mt-10 md:mt-20">
          <div
            className={mode==="dark"?"h-10 md:h-20 w-90 md:w-220 flex justify-around items-center rounded-t-2xl text-white bg-orange-500":"h-10 md:h-20 w-90 md:w-220 flex justify-around items-center rounded-t-2xl text-black bg-orange-500"}
          >
            <div className="w-10 flex items-center justify-start text-xs md:text-lg">
              <p>#</p>
            </div>
            <div className="w-10 md:w-45 flex items-center justify-start text-xs md:text-lg">
              <p>Coins</p>
            </div>
            <div className="w-10 md:w-25 flex items-center justify-start text-xs md:text-lg">
              <p>Price</p>
            </div>
            <div className="w-15 md:w-40 flex items-center justify-start text-xs md:text-lg">
              <p>24H Change</p>
            </div>
            <div className="w-15 md:w-35 flex items-center justify-start text-xs md:text-lg">
              <p>Market Cap</p>
            </div>
          </div>
        </div>

        <div className="min-h-200 flex justify-center mb-20 text-xs md:text-lg">
          <div className={mode==="light"?"text-white":"text-black"}>
            {arr.map((data) => (
              <div
                key={data.market_cap_rank}
                className={mode === "light"?"h-15 md:h-20 w-90 md:w-220 flex justify-around items-center  border-4 border-t-0 border-orange-600 bg-black":"h-15 md:h-20 w-90 md:w-220 flex justify-around items-center  border-4 border-t-0 border-orange-600 bg-white"}
              >
                <p className="ml-2 md:ml-0 mr-2 md:mr-0">{data.market_cap_rank}</p>
                <div className="w-40 md:w-55 flex md:gap-2 items-center justify-start">
                  <img src={data.image} alt="" className="h-5 w-5 md:h-10 md:w-10" />
                  <p>
                    <Link to={`/${data.id}`} state={{apiInfo : arr , name : obj.name }}>
                      {data.name}-{data.symbol}
                    </Link>
                  </p>
                </div>
                <div className="w-25 md:w-30 flex items-center justify-start">
                  <p>
                    {currencySign} {data.current_price}
                  </p>
                </div>
                <div className="w-25 md:w-35 flex items-center justify-start">
                  {data.price_change_percentage_24h >= 0 && (
                    <p className="text-green-400">
                      {data.price_change_percentage_24h}
                    </p>
                  )}
                  {data.price_change_percentage_24h < 0 && (
                    <p className="text-red-500">
                      {data.price_change_percentage_24h}
                    </p>
                  )}
                </div>
                <div className="w-42 flex items-center justify-start">
                  <p>
                    {currencySign} {data.market_cap}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

         <Footer/>
      </div>
  );
};

export default DataTable;
