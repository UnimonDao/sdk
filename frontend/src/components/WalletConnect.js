import React, { useState } from "react";

export default function WalletConnect() {
  const [wallet, setWallet] = useState(null);

  const connectWallet = async () => {
    if (window.solana) {
      const response = await window.solana.connect();
      setWallet(response.publicKey.toString());
    } else {
      alert("Install Phantom Wallet");
    }
  };

  return (
    <div>
      {wallet ? (
        <p>Connected: {wallet}</p>
      ) : (
        <button onClick={connectWallet}>Connect Wallet</button>
      )}
    </div>
  );
}
