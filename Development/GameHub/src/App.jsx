import React from "react";
import Navbar from "./components/Navbar";  // ✅ Ensure correct path
import HomePage from "./pages/HomePage";  // ✅ Ensure correct path
import BetHistory from "./components/BetHistory";  // ✅ Ensure correct path
import "./index.css";  // ✅ Ensure index.css is in src/

const App = () => {
  return (
    <div>
      <Navbar />  {/* ✅ Navbar at the top */}
      <HomePage />  {/* ✅ Main content */}
      <BetHistory />  {/* ✅ Bet history section */}
    </div>
  );
};

export default App;
