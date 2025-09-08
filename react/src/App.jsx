import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import DataTable from "./Components/DataTable";
import { coinContext } from "./context/context";
import CryptoPage from "./Components/CryptoPage";
import HomePage from "./HomePage";
import SignUp from "./Components/SignUp";
import { store } from "./Redux/store/store";
import { Provider } from "react-redux";
import CryptoHomePage from "./Components/CryptoHomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/:id" element={<CryptoHomePage />}></Route>
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
