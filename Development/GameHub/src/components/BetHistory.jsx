import React from "react";
import "../index.css"; 

const BetHistory = () => {
  return (
    <div className="bet-history">
      <h3>BET HISTORY</h3>
      <div className="bet-tabs">
        <button className="active">All Bets</button>
        <button>Won</button>
        <button>Lost</button>
        <button>Open Bets</button>
      </div>
      <div className="bet-entry">
        <p><strong>02 JUL, 15:08</strong> | ID: USER ACCOUNT</p>
        <p>STAKE: ZMW 5.00 | ODDS: 2.83</p>
        <p className="cashout">Cashout Available: ZMW 4.19</p>
        <p className="payout">PAYOUT: ZMW 14.14</p>
      </div>
    </div>
  );
};

export default BetHistory;
