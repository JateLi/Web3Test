import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import { useHistory } from "react-router-dom";
import { ContactItem } from "../contact/contactItem";
import { useWeb3React } from "@web3-react/core";

export const Home: React.FC = () => {
  const history = useHistory();
  const { deactivate } = useWeb3React();
  const store = require("store");
  const contacts: readonly Contact[] = useSelector(
    (state: ContactState) => state.contacts,
    shallowEqual
  );
  const navigateTo = (address: string) => {
    history.push(address);
  };

  async function disconnect() {
    try {
      deactivate();
      store.set("Account", false);
      history.push(`/`);
    } catch (ex) {
      console.log(ex);
    }
  }

  return (
    <main className={"center login"}>
      <button onClick={() => navigateTo("/edit")} className={"customButton"}>
        Adding Button
      </button>
      {contacts.map((item: Contact) => (
        <ContactItem contact={item} key={item.id} />
      ))}
      ;
      <button onClick={() => disconnect()} className={"customButton"}>
        Disconnect
      </button>
    </main>
  );
};
