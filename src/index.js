import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";  // ✅ Router should be here
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>  {/* ✅ BrowserRouter should ONLY be here */}
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
