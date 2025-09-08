import React, { useEffect, useState } from "react";
import LineChart from "./LineChart";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { coinContext2 } from "../context/context2";
import { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";

const CryptoPage = () => {
  const obj = useContext(coinContext2);
  const [apiDetail, setApiDetail] = useState(obj.apiInfo);
  const [historicalData, setHistoricalData] = useState([[]]);
  const [spinner, setSpinner] = useState(true);
  const [content, setContent] = useState(false);
  const [days, setdays] = useState(10);
  const currency = useSelector((state) => state.currency.value);
  const currencySign = useSelector((state) => state.currencySign.value);
  const mode = useSelector((state) => state.mode.value);
  useEffect(() => {
    setTimeout(() => {
      setSpinner(false);
      setContent(true);
    }, "3000");
    const colorChanger = () => {
      const body = document.querySelector("body");
      if (mode === "light") {
        body.style.backgroundColor = "white";
      } else {
        body.style.backgroundColor = "black";
      }
    };
    const fetchDataForChart = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          "x-cg-demo-api-key": "CG-t5peAaz9T1PRfYApjF9eNJ2D",
        },
      };
      let info;
      if (currency.payload == undefined) {
        info = await fetch(
          `https://api.coingecko.com/api/v3/coins/${obj.id}/market_chart?vs_currency=${currency}&days=${days}`,
          options
        );
      } else {
        info = await fetch(
          `https://api.coingecko.com/api/v3/coins/${obj.id}/market_chart?vs_currency=${currency.payload}&days=${days}`,
          options
        );
      }
      const apiData2 = await info.json();
      setHistoricalData(apiData2);
      //console.log(apiData2);
    };

    const DataFetchingFromAPI = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          "x-cg-demo-api-key": "CG-t5peAaz9T1PRfYApjF9eNJ2D",
        },
      };
      let data;
      if (currency.payload == undefined) {
        data = await fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&name=${obj.name}&order=market_cap_desc`,
          options
        );
      } else {
        data = await fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.payload}&name=${obj.name}&order=market_cap_desc`,
          options
        );
      }
      const apiInfo = await data.json();
      setApiDetail(apiInfo);
    };
    colorChanger();
    DataFetchingFromAPI();
    fetchDataForChart();
  }, [currency, currencySign ,mode]);
  // console.log({ id });
  const arr = apiDetail.filter((data) => data.id == obj.id);
  // console.log(arr);

  return (
    <div>
      {spinner && (
        <div className="flex justify-center items-center w-full h-screen">
          <div className="h-15 w-15 rounded-full border-6 border-t-blue-800 border-blue-500 animate-spin"></div>
        </div>
      )}

      <div>
        {content &&
          arr.map((data) => (
            <div
              key={data.id}
              className={
                mode === "light"
                  ? "w-full h-200 mt-5 text-black bg-white"
                  : "w-full h-200 mt-5 text-white bg-black"
              }
            >
              <div>
                <div className="flex justify-center mt-20">
                  <img src={data.image} alt="" className="h-30 w-30" />
                </div>
                <div className="text-4xl flex justify-center mt-5">
                  <h1>
                    {data.name}-{data.symbol}
                  </h1>
                </div>
                <div className="flex justify-center mt-10">
                  <LineChart historicalData={historicalData} />
                </div>
                <div>
                  <div className="mt-20">
                    <div className="flex justify-center text-sm ">
                      <div className="mr-2 lg:mr-0 w-200 flex justify-around">
                        <div>Crypto Market Rank</div>
                        <div>{data.market_cap_rank}</div>
                      </div>
                    </div>
                    <div className="flex justify-center mt-2">
                      <div className="w-130 h-1 bg-orange-600"></div>
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="flex justify-center text-sm ">
                      <div className="w-200 flex justify-around">
                        <div>Current Price</div>
                        <div>
                          {currencySign} {data.current_price}
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center mt-2">
                      <div className="w-130 h-1 bg-orange-600"></div>
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="flex justify-center text-sm ">
                      <div className="ml-5 lg:ml-0 w-188 flex justify-around">
                        <div>Market Cap</div>
                        <div>
                          {currencySign} {data.market_cap}
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center mt-2">
                      <div className="w-130 h-1 bg-orange-600"></div>
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="flex justify-center text-sm ">
                      <div className="w-200 flex justify-around">
                        <div>24 Hour high</div>
                        <div>
                          {currencySign} {data.high_24h}
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center mt-2">
                      <div className="w-130 h-1 bg-orange-600"></div>
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="flex justify-center text-sm ">
                      <div className="w-200 flex justify-around">
                        <div>24 Hour low</div>
                        <div>
                          {currencySign} {data.low_24h}
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center mt-2">
                      <div className="w-130 h-1 bg-orange-600"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        <Footer />
      </div>
    </div>
  );
};

export default CryptoPage;
