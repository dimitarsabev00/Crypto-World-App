import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CoinPage from "./pages/CoinPage";
import Header from "./components/Header";
import ErrorPage from "./pages/ErrorPage";
import AlertBox from "./components/AlertBox";
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
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/coins/:id" element={<CoinPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      <AlertBox />
    </Router>
  );
}

export default App;
