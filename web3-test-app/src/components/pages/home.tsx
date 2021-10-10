import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import { useHistory } from "react-router-dom";
import { ContactItem } from "../contact/contactItem";
import { useWeb3React } from "@web3-react/core";
import { NavHeader } from "../util/navHeader";

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

  const onSendAddress = (id: number) => {
    history.push(`/send/${id}`);
  };

  return (
    <main className={"center login"}>
      <NavHeader
        title={"testtest1"}
        leftNav={() => {
          console.log("confirm to logout?");
        }}
        rightNav={() => {
          console.log("Testetest");
        }}
      />
      <button onClick={() => navigateTo("/edit")} className={"customButton"}>
        + New Contact
      </button>
      <div className={"list"}>
        {contacts.map((item: Contact) => (
          <ContactItem
            contact={item}
            key={item.id}
            onSendAddress={onSendAddress}
          />
        ))}
        <div className={"footer center"}>
          <button className={"disconnectButton"} onClick={() => disconnect()}>
            Disconnect
          </button>
        </div>
      </div>
    </main>
  );
};
