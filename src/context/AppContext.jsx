import { onAuthStateChanged } from "@firebase/auth";
import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { CoinList } from "../configs/api";
import { auth } from "../configs/firebase";

const App = createContext();

const AppContext = ({ children }) => {
  const [currency, setCurrency] = useState("USD");
  const [symbol, setSymbol] = useState("$");
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    type: "success",
  });
  const [user, setUser] = useState(null);
  const fetchCoins = async () => {
    setLoading(true);
    const { data } = await axios.get(CoinList(currency));

    setCoins(data);
    setLoading(false);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) setUser(user);
      else setUser(null);
    });
  }, []);

  useEffect(() => {
    if (currency === "USD") setSymbol("$");
  }, [currency]);

  return (
    <App.Provider
      value={{
        currency,
        setCurrency,
        symbol,
        coins,
        loading,
        fetchCoins,
        alert,
        setAlert,
        user,
      }}
    >
      {children}
    </App.Provider>
  );
};

export default AppContext;

export const AppState = () => {
  return useContext(App);
};
