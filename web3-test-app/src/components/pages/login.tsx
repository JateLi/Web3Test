import React, { useState } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { useHistory } from "react-router-dom";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../wallet/connector";
import "../../styles/styles.css";
import { useEagerConnect, useInactiveListener } from "../../hooks/hooks";

export const Login: React.FC = () => {
  const { account, activate } = useWeb3React();
  const store = require("store");
  const history = useHistory();

  const accountState = store.get("Account");
  const [activatingConnector, setActivatingConnector] = useState<any>();

  const contacts: readonly Contact[] = useSelector(
    (state: ContactState) => state.contacts,
    shallowEqual
  );

  async function connect() {
    try {
      await activate(injected);
      store.set("Account", true);
      history.push("/home");
    } catch (ex) {
      console.log(ex);
    }
  }

  // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
  const triedEager = useEagerConnect(accountState);

  // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
  useInactiveListener(!triedEager || !!activatingConnector);

  return (
    <main className={"center login"}>
      <span className={"customLabel"}>{account}</span>
      <button type="button" onClick={connect} className={"customButton"}>
        Connect to MetaMask
      </button>
    </main>
  );
};
