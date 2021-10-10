import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../wallet/connector";
import "../../styles/styles.css";
import { useEagerConnect, useInactiveListener } from "../../hooks/hooks";
import logo from "../../metamask-fox.svg";

export const Login: React.FC = () => {
  const { account, activate, connector } = useWeb3React();
  const store = require("store");
  const history = useHistory();

  const accountState = store.get("Account");
  const [activatingConnector, setActivatingConnector] = useState<any>();

  async function connect() {
    try {
      await activate(injected);
      store.set("Account", true);
      history.push("/home");
    } catch (ex) {
      console.log(ex);
    }
  }

  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);

  // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
  const triedEager = useEagerConnect(accountState);

  // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
  useInactiveListener(!triedEager || !!activatingConnector);

  return (
    <main className={"center login"}>
      <img src={logo} alt="Logo" className={"logoFigure"} />
      <span className={"customLabel"}>Crypto address book</span>
      <span className={"smallCustomLabel"}>
        The easiest and quickest way to mange and pay your contacts. Connect
        your wallet to begin.
      </span>
      <span className={"customLabel"}>{account}</span>
      <button type="button" onClick={connect} className={"customButton"}>
        Connect to MetaMask
      </button>
    </main>
  );
};
