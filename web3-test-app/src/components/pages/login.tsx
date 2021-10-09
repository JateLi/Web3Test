import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import { useHistory } from "react-router-dom";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../wallet/connector";
import { ContactItem } from "../contact/contactItem";
import "../../styles/styles.css";

export const Login: React.FC = () => {
  const history = useHistory();
  const { activate, account } = useWeb3React();

  const contacts: readonly Contact[] = useSelector(
    (state: ContactState) => state.contacts,
    shallowEqual
  );

  const navigateTo = (address: string) => {
    history.push(address);
  };

  async function connect() {
    try {
      await activate(injected);
    } catch (ex) {
      console.log(ex);
    }
  }

  return (
    <main className={"center login"}>
      <span className={"customLabel"}>{account}</span>
      <button type="button" onClick={connect} className={"customButton"}>
        Connect to MetaMask
      </button>
      <button onClick={() => navigateTo("/edit")} className={"customButton"}>
        Adding Button
      </button>
      {contacts.map((item: Contact) => (
        <ContactItem contact={item} key={item.id} />
      ))}
    </main>
  );
};
