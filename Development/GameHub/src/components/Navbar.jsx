import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-100 border-b">
      <h1 className="text-xl font-bold">GameHub</h1>

      <div className="flex items-center space-x-4">
        <span>BAL KSH 2,000</span>
        <button className="bg-black text-white px-4 py-2 rounded">Withdraw</button>
        <div className="flex items-center space-x-2">
          <img src="https://via.placeholder.com/30" alt="User" className="rounded-full w-8" />
          <span>Username</span>
          <button className="bg-red-500 text-white px-3 py-1 rounded">Sign out</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
