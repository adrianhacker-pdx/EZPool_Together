import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Portis from "@portis/web3";
import Web3 from "web3";

const portis = new Portis("afe8ce58-3611-4bf3-acc1-369eb522f2af", "mainnet");
const web3 = new Web3(portis.provider);
web3.eth.getAccounts((error, accounts) => {
  console.log(accounts);
});

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
