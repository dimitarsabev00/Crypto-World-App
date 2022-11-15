import React, { createContext, useContext, useEffect, useState } from "react";

const App = createContext();

const AppContext = ({ children }) => {
  const [currency, setCurrency] = useState("USD");
  const [symbol, setSymbol] = useState("$");

  useEffect(() => {
    if (currency === "USD") setSymbol("$");
  }, [currency]);

  return (
    <App.Provider value={{ currency, setCurrency, symbol }}>
      {children}
    </App.Provider>
  );
};

export default AppContext;

export const AppState = () => {
  return useContext(App);
};
