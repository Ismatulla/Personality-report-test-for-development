import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./stores/store.jsx";

import "./typography/colors/colors.css";
import "./typography/typography.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
// below test client id ,
// 515811412387-rn7q0kgi17ekqsj3kqpv3p0d8l6caosn.apps.googleusercontent.com

// below prod client id
// 849651981874-dmni4fkaqmipuo8r9g2lrlg0n8qa2fpn.apps.googleusercontent.com