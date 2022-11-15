import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { CoinList } from "../configs/api";

const App = createContext();

const AppContext = ({ children }) => {
  const [currency, setCurrency] = useState("USD");
  const [symbol, setSymbol] = useState("$");
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCoins = async () => {
    setLoading(true);
    const { data } = await axios.get(CoinList(currency));

    setCoins(data);
    setLoading(false);
  };

  useEffect(() => {
    if (currency === "USD") setSymbol("$");
  }, [currency]);

  return (
    <App.Provider
      value={{ currency, setCurrency, symbol, coins, loading, fetchCoins }}
    >
      {children}
    </App.Provider>
  );
};

export default AppContext;

export const AppState = () => {
  return useContext(App);
};
