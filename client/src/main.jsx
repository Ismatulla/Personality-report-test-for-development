import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider } from "react-redux";
import store from "./stores/store.jsx";

import "./typography/colors/colors.css";
import "./typography/typography.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <GoogleOAuthProvider clientId="849651981874-dmni4fkaqmipuo8r9g2lrlg0n8qa2fpn.apps.googleusercontent.com">
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </GoogleOAuthProvider>
    </React.StrictMode>
  </Provider>
);
