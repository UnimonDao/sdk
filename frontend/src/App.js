import React from "react";
import WalletConnect from "./components/WalletConnect";
import Home from "./pages/Home";
import "./styles.css";

function App() {
  return (
    <div className="app">
      <h1>🌾 UNIMON</h1>
      <WalletConnect />
      <Home />
    </div>
  );
}

export default App;
