import React, { useState } from "react";
import { Link } from "react-router-dom";
import { coinContext2 } from "../context/context2";
import Navbar2 from "./Navbar2";
import CryptoPage from "./CryptoPage";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
const CryptoHomePage = () => {
  const location = useLocation();
  const { apiInfo } = location.state;
  const { name } = location.state;
  const { id } = useParams();
  return (
    <coinContext2.Provider value={{ apiInfo , name , id }}>
      <Navbar2 />
      <CryptoPage />
    </coinContext2.Provider>
  );
};
export default CryptoHomePage;
