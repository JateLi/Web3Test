import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Dispatch } from "redux";
import { addContact, removeContact } from "../../store/actionCreator";

export const Edit: React.FC = ({}) => {
  const history = useHistory();

  const [contact, setContact] = useState<Contact>({
    id: -1,
    title: "",
    body: "",
  });

  const handleContactData = (e: React.FormEvent<HTMLInputElement>) => {
    setContact({
      ...contact,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const dispatch: Dispatch<any> = useDispatch();

  const addingContact = React.useCallback(
    (contact: Contact) => dispatch(addContact(contact)),
    [dispatch]
  );

  const removingContact = React.useCallback(
    (contact: Contact) => dispatch(removeContact(contact)),
    [dispatch]
  );

  const addNewContact = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("onSubmit");
    if (!contact) return;
    addingContact(contact);
    history.push("/home");
  };

  return (
    <>
      <form onSubmit={addNewContact} className={"EditContact"}>
        <input
          type="text"
          id="title"
          placeholder="Title"
          onChange={handleContactData}
        />
        <input
          type="text"
          id="body"
          placeholder="Description"
          onChange={handleContactData}
        />
        <button disabled={contact === undefined ? true : false}>
          Save Contact
        </button>
        <button disabled={contact === undefined ? true : false}>
          Delete Contact
        </button>
      </form>
    </>
  );
};
