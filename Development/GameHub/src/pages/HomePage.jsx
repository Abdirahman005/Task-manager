import React from "react";
import Navbar from "../components/Navbar";
import BetHistory from "../components/BetHistory";
import GameCard from "../components/GameCard";
import "../index.css"; 

const HomePage = () => {
  return (
    <div className="homepage">
      <Navbar />
      <div className="container">
        <h1>WELCOME TO GAME HUB!</h1>
        <p className="username">Username</p>

        {/* Balance & Actions */}
        <div className="balance-section">
          <span className="balance">BAL KSH 2,000</span>
          <button className="deposit-btn">Deposit</button>
          <button className="withdraw-btn">Withdraw</button>
        </div>

        {/* Games Section */}
        <div className="games-section">
          <GameCard image="/assets/spin-win.png" title="Spin and Win Game" />
          <GameCard image="/assets/russian-roulette.png" title="Russian Roulette" />
        </div>

        {/* Bet History */}
        <BetHistory />

        {/* Footer */}
        <footer className="footer">
          <p>Contact Us | Services | Resources</p>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;
