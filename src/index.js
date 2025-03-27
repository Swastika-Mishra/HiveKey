import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = "dev-sn76bl0jpwone0hi.jp.auth0.com";
const clientId = "EQloOmJ7y4PMavo6D4AzhEpDM62o6qg0";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{ redirect_uri: window.location.origin + "/dashboard",
        audience: "https://hivekey-api",
        scope: "openid profile email"
       }}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Auth0Provider>
);
