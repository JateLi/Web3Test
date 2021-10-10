import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Dispatch } from "redux";
import { useSelector, shallowEqual } from "react-redux";
import {
  addContact,
  removeContact,
  editContact,
} from "../../store/actionCreator";
import { NavHeader } from "../util/navHeader";

export const Edit: React.FC<any> = ({ match }) => {
  const history = useHistory();
  const contactId = match.params.id;

  // Find the right contact item.
  const contacts: readonly Contact[] = useSelector(
    (state: ContactState) => state.contacts,
    shallowEqual
  );

  const selectedItem = contacts.find(({ id }) => id === Number(contactId));

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

  const udpateContact = React.useCallback(
    (contact: Contact) => dispatch(editContact(contact)),
    [dispatch]
  );

  useEffect(() => {
    // Overwrite to textInput field.
    if (!selectedItem) return;
    setContact(selectedItem);
  }, [selectedItem]);

  const addNewContact = () => {
    if (!contact) return;
    if (contactId) {
      //Edit contact
      udpateContact(contact);
    } else {
      addingContact(contact);
    }

    history.push("/home");
  };

  const deleteContact = () => {
    if (!contact) return;
    removingContact(contact);
    history.push("/home");
  };

  const inputFieldValidate = () => {
    // TODO check input field
    return true;
  };

  const returnValidateMessage = () => {
    // TODO check input field
    return "Error message";
  };

  return (
    <>
      <form className={"EditContact center login"}>
        <NavHeader title={"Edit"} leftNav={() => history.push("/home")} />
        <input
          type="text"
          id="title"
          placeholder="Name"
          onChange={handleContactData}
          value={contact.title}
        />
        <input
          type="text"
          id="body"
          placeholder="Address"
          onChange={handleContactData}
          value={contact.body}
        />
        <button
          onClick={addNewContact}
          className={"customButton"}
          disabled={contact === undefined ? true : false}
        >
          Save
        </button>
        {!!contactId && (
          <button
            className={"customDeleteButton"}
            onClick={deleteContact}
            disabled={contact === undefined ? true : false}
          >
            Delete
          </button>
        )}
      </form>
    </>
  );
};
