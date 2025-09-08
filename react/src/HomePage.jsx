import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import DataTable from "./Components/DataTable";
import { coinContext } from "./context/context";
import CryptoPage from "./Components/CryptoPage";
import Footer from "./Components/Footer";
import SignUp from "./Components/SignUp";
import { useSelector, useDispatch } from "react-redux";
import { setMode } from "./Redux/slice/slice";
import { setCurrency } from "./Redux/slice/slice2";
import { setCurrencySign } from "./Redux/slice/slice3";
import { setVisible } from "./Redux/slice/slice4";

const HomePage = () => {
  const [apiData, setApiData] = useState("");
  const [apiDataComplete, setApiDataComplete] = useState("");
  const [name, setName] = useState("");
  const [apiDataCopy, setApiDataCopy] = useState("");
  const [fade, setFade] = useState(false);
  const mode = useSelector((state) => state.mode.value);
  const currency = useSelector((state) => state.currency.value);
  const currencySign = useSelector((state) => state.currencySign.value);
  const visible = useSelector((state)=>state.visible.value);
  const dispatch = useDispatch();
  const DataFetchingFromAPI2 = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-t5peAaz9T1PRfYApjF9eNJ2D",
      },
    };
    console.log(currencySign);
    console.log(currency.payload);
    let data;
    if (currency.payload == undefined) {
      data = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&names=${name}&order=market_cap_desc&per_page=10`,
        options
      );
    } else {
      data = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.payload}&names=${name}&order=market_cap_desc&per_page=10`,
        options
      );
    }
    const apiInfo = await data.json();
    setApiDataCopy(apiInfo);
  };

  useEffect(() => {
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
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&names=${name}&order=market_cap_desc&per_page=10`,
          options
        );
      } else {
        data = await fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.payload}&names=${name}&order=market_cap_desc&per_page=10`,
          options
        );
      }
      const apiInfo = await data.json();
      setApiData(apiInfo);
    };

    const DataFetchingFromAPIComplete = async () => {
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
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&names=${name}&order=market_cap_desc`,
          options
        );
      } else {
        data = await fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.payload}&names=${name}&order=market_cap_desc`,
          options
        );
      }
      const apiInfo = await data.json();
      setApiDataComplete(apiInfo);
    };

    const colorChanger = () => {
      const body = document.querySelector("body");
      if (mode === "light") {
        body.style.backgroundColor = "white";
      } else {
        body.style.backgroundColor = "black";
      }
    };
    DataFetchingFromAPI();
    DataFetchingFromAPIComplete();
    colorChanger();
    DataFetchingFromAPI2();
  }, [currency, mode]);
  
  const signUpController = () => {
    const fader = document.querySelectorAll(".mainDiv");
    console.log(visible);
    dispatch(setVisible());
    if (!visible) {
      fader.forEach((element) => {
        element.style.animation = "fade-in 0.5s";
      });
    } else {
      fader.forEach((element) => {
        element.style.animation = "none";
      });
    }
  };
  return (
    <coinContext.Provider
      value={{
        fade,
        setFade,
        visible,
        setVisible,
        apiData,
        setApiData,
        apiDataComplete,
        setApiDataComplete,
        apiDataCopy,
        setApiDataCopy,
        name,
        setName,
        signUpController,
      }}
    >
      <div>
        <div className="mainDiv z-0">
          <Navbar />
        </div>
        <div>
          <SignUp />
        </div>
        <div className="mainDiv z-0">
          <Hero />
          <DataTable />
        </div>
      </div>
    </coinContext.Provider>
  );
};

export default HomePage;
