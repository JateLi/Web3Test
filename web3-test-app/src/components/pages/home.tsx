import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import { useHistory } from "react-router-dom";
import { ContactItem } from "../contact/contactItem";

export const Home: React.FC = () => {
  const history = useHistory();
  const contacts: readonly Contact[] = useSelector(
    (state: ContactState) => state.contacts,
    shallowEqual
  );
  const navigateTo = (address: string) => {
    history.push(address);
  };

  return (
    <main className={"center login"}>
      <button onClick={() => navigateTo("/edit")} className={"customButton"}>
        Adding Button
      </button>
      {contacts.map((item: Contact) => (
        <ContactItem contact={item} key={item.id} />
      ))}
      ;
    </main>
  );
};
