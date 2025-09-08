import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { coinContext2 } from "../context/context2";
import CryptoPage from "./CryptoPage";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setMode } from "../Redux/slice/slice";
import { setCurrency } from "../Redux/slice/slice2";
import { setCurrencySign } from "../Redux/slice/slice3";

const Navbar2 = () => {
  const obj = useContext(coinContext2);
  const navigate = useNavigate();
  const mode = useSelector((state) => state.mode.value);
  const dispatch = useDispatch();
  const goToHome = () => {
    navigate("/");
  };

  const currencyChanger = (event) => {
    dispatch(setCurrency(event.target.value));
    dispatch(setCurrencySign(event.target.value));
  };

  return (
    <div className="h-25 w-full flex items-center justify-around border-b-4 border-orange-600">
      <div>
        <p
          className={
            mode === "light"
              ? "h-10 w-10 text-black text-5xl relative bottom-2"
              : "h-10 w-10 text-white text-5xl relative bottom-2"
          }
          onClick={goToHome}
        >
          ←
        </p>
      </div>

      <div className="h-15 lg:w-60 w-20 flex justify-center items-center">
        <select
          name=""
          id="countryDropdown"
          className={
            mode === "light"
              ? "text-black h-8 w-15 border-2 border-black rounded-sm"
              : "text-white h-8 w-15 border-2 border-white rounded-sm"
          }
          onChange={currencyChanger}
        >
          <option value="inr" className="bg-orange-400">
            INR
          </option>
          <option value="usd" className="bg-orange-400">
            USD
          </option>
          <option value="eur" className="bg-orange-400">
            EUR
          </option>
        </select>
      </div>
    </div>
  );
};

export default Navbar2;
