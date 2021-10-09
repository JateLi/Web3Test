import React from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { Dispatch } from "redux";

import { addContact, removeContact } from "../../store/actionCreator";

export const Login: React.FC = () => {
  const contacts: readonly Contact[] = useSelector(
    (state: ContactState) => state.contacts,
    shallowEqual
  );

  const dispatch: Dispatch<any> = useDispatch();

  const addingContact = React.useCallback(
    (contact: Contact) => dispatch(addContact(contact)),
    [dispatch]
  );

  const removingContact = React.useCallback(
    (contact: Contact) => dispatch(removeContact(contact)),
    [dispatch]
  );

  return (
    <main>
      <div>Test1</div>
      <button
        onClick={() => {
          const a = {
            id: 123,
            title: "string",
            body: "string",
          };
          addingContact(a);
        }}
      >
        Adding Button
      </button>
      {contacts.map((item: Contact) => (
        <div>{item.id}</div>
      ))}
    </main>
  );
};
