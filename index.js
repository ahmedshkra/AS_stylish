import React from "react";
import {BrowserRouter} from "react-router-dom";
import {createRoot} from "react-dom/client"
import App from "./app";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import "C:/Users/Elmotakhasess/Desktop/AS_STORE/stylish/src/s.css"



createRoot(document.getElementById("root")).render(
<BrowserRouter>            
  <App/>
</BrowserRouter>);


