//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

let segundos = 0
let reversa = 99999

//render your react application
setInterval(() => {
    segundos++
    reversa--
    ReactDOM.createRoot(document.getElementById('app')).render(
        <Home segundos={segundos}
              reversa={reversa}
        />
    );
}, 1000)


