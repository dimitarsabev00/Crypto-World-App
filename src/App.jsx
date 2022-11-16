import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import AlertBox from "./components/AlertBox";
import { lazy, Suspense } from "react";
import { CircularProgress } from "@mui/material";
const HomePage = lazy(() => import("./pages/HomePage"));
const CoinPage = lazy(() => import("./pages/CoinPage"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));
function App() {
  return (
    <Router>
      <div
        style={{
          backgroundColor: "#14161a",
          color: "white",
          minHeight: "100vh",
        }}
      >
        <Header />
        <Suspense
          fallback={
            <div style={{ display: "flex", justifyContent: "center" }}>
              <CircularProgress
                style={{ color: "gold" }}
                size={250}
                thickness={1}
              />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/coins/:id" element={<CoinPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Suspense>
      </div>
      <AlertBox />
    </Router>
  );
}

export default App;
