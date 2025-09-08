import React, { useEffect, useRef, useState } from "react";
import { useContext } from "react";
import { coinContext } from "../context/context";
import { useSelector , useDispatch } from "react-redux";
import { setMode } from "../Redux/slice/slice"; 
import { setCurrency } from "../Redux/slice/slice2";
import { currencySignSlice, setCurrencySign } from "../Redux/slice/slice3";
const Hero = () => {
  const obj = useContext(coinContext);
  const currency = useSelector((state) => state.currency.value);
  const currencySign = useSelector((state) => state.currencySign.value);
  const inputRef = useRef(null);
  const [SuggestionArr, setSuggestionArr] = useState([]);
  const mode = useSelector((state) => state.mode.value);
  const inputHandler = async (e) => {
    const arr = obj.apiDataComplete.filter((element) => {
      return element.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setSuggestionArr(arr);
  };

  const searchHandler = () => {
    const dataFetchBySearch = async () => {
      obj.setName(inputRef.current.value);
      let data;
      if (obj.name === "") {
        obj.setApiData(obj.apiDataCopy);
      } else {
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            "x-cg-demo-api-key": "CG-t5peAaz9T1PRfYApjF9eNJ2D",
          },
        };
        data = await fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.payload}&order=market_cap_desc`,
          options
        );

        const apiInfo = await data.json();
        let searchData = apiInfo.filter((element) => {
          return element.name.toLowerCase().includes(obj.name.toLowerCase());
        });
        obj.setApiData(searchData);
        console.log(apiInfo);
      }
    };

    dataFetchBySearch();
  };

  useEffect(() => {
    searchHandler();
    inputHandler();
  }, [obj.currency]);

  return (
    <div className={mode==="light"?"h-90 w-full flex justify-center bg-white items-center z-0":"h-90 w-full bg-black flex justify-center items-center z-0"}>
        <div>
          <div>
            <div className="flex justify-center items-center mt-30">
              <div className="text-orange-600 text-3xl md:text-6xl font-bold">
                <h1 className="text-center">Largest</h1>
                <h1 className="text-center">Crypto Marketplace</h1>
              </div>
            </div>

            <div className="text-orange-600 text-center md:text-xl text-xs mt-10 md:ml-4">
              <p>Welcome to the world's largest cryptocurrency marketplace. </p>
              <p>Sign up to explore more about cryptos.</p>
            </div>

            <div className="m-7 md:m-10 md:ml-15">
              <input
                ref={inputRef}
                type="text"
                placeholder="Search crypto.."
                className={mode==="light"?"h-10 w-80 md:w-140 rounded-sm bg-black text-white p-4 md:p-7 z-0 ...  focus:outline-0":"h-10 w-80 md:w-140 rounded-sm bg-white text-black p-4 md:p-7 z-0 ...  focus:outline-0"}
                onChange={inputHandler}
                list="coinlist"
              />

              <datalist id="coinlist" className="text-white bg-orange-600">
                {SuggestionArr.map((element) => (
                  <option key={element.id} value={element.name} />
                ))}
              </datalist>

              <button
                className="h-10 w-30 rounded-sm bg-orange-600 text-white relative left-105 bottom-12 hidden md:block z-5..."
                onClick={searchHandler}
              >
                Search
              </button>

              <button
                className="h-8 w-15 rounded-sm bg-orange-600 text-white relative left-63 bottom-9 block md:hidden z-5..."
                onClick={searchHandler}
              >
                Search
              </button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Hero;
