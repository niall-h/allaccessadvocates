import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import Map from "./Map";
import "mapbox-gl/dist/mapbox-gl.css";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
