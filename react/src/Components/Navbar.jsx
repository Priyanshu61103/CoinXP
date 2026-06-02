import React from "react";
import { useContext } from "react";
import { coinContext } from "../context/context";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setMode } from "../Redux/slice/modeSlice";
import { setCurrency } from "../Redux/slice/currencySlice";
import { setCurrencySign } from "../Redux/slice/currencySignSlice";
import { setVisible } from "../Redux/slice/visibileSlice";
const Navbar = () => {
  const obj = useContext(coinContext);
  const mode = useSelector((state) => state.mode.value);
  const currency = useSelector((state) => state.currency.value);
  const currencySign = useSelector((state) => state.currencySign.value);
  const visible = useSelector((state) => state.visible.value);
  const dispatch = useDispatch();

  const currencyChanger = (event) => {
    dispatch(setCurrency(event.target.value));
    dispatch(setCurrencySign(event.target.value));
  };

  return (
    <div className={mode==="light"?"h-25 w-full flex items-center justify-around border-b-4 bg-white border-orange-600":"h-25 w-full flex items-center justify-around border-b-4 bg-black border-orange-600"}>
      <div>
        <Link to="/">
          <div className="flex items-center">
            <img
              src="../coinlogo.png"
              alt=""
              className="h-8 w-10 md:h-10 md:w-12"
            />
            <h1 className=" text-xl md:text-2xl text-sans text-orange-600 mr-1">
              Coin
            </h1>
            <h1 className="text-xl md:text-2xl font-bold text-sans text-orange-600">
              XP
            </h1>
          </div>
        </Link>
      </div>

      <div className="h-15 w-60">
        <select
          name=""
          id="countryDropdown"
          className={
            mode === "dark"
              ? "text-white h-8 w-15 border-2 border-white rounded-sm"
              : "text-black h-8 w-15 border-2 border-black rounded-sm"
          }
          onChange={currencyChanger}
        >
          <option value="inr" className="bg-orange-600">
            INR
          </option>
          <option value="usd" className="bg-orange-600">
            USD
          </option>
          <option value="eur" className="bg-orange-600">
            EUR
          </option>
        </select>

        <div>
          <button
            className={
              mode === "light"
                ? "h-10 w-10 rounded-full border-2 border-black bg-black  flex justify-center items-center"
                : "h-10 w-10 rounded-full border-2 border-white bg-white flex justify-center items-center"
            }
            onClick={() => dispatch(setMode())}
          >
            <img src="light-mode.png" alt="" className="h-6 w-6" />
          </button>
        </div>
        <div>
          <button
            className={
              mode === "light"
                ? "w-25 h-10 md:w-30 bg-orange-600  rounded-full flex justify-center items-center gap-2 font-semibold text-white"
                : "w-25 h-10 md:w-30 bg-orange-600 rounded-full flex justify-center items-center gap-2 font-semibold text-black"
            }
            onClick={obj.signUpController}
          >
            Sign up
            <img src="arrow_icon.png" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
