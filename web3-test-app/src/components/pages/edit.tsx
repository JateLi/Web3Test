import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Dispatch } from "redux";
import { useSelector, shallowEqual } from "react-redux";
import { addContact, removeContact } from "../../store/actionCreator";

export const Edit: React.FC<any> = ({ match }) => {
  const history = useHistory();
  const contactId = match.params.id;

  // Find the right contact item.
  const contacts: readonly Contact[] = useSelector(
    (state: ContactState) => state.contacts,
    shallowEqual
  );

  const selectedItem = contacts.find(({ id }) => id === Number(contactId));
  console.log(selectedItem);

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

  useEffect(() => {
    // Overwrite to textInput field.
    if (!selectedItem) return;
    setContact(selectedItem);
  }, [selectedItem]);

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
          value={contact.title}
        />
        <input
          type="text"
          id="body"
          placeholder="Description"
          onChange={handleContactData}
          value={contact.body}
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
