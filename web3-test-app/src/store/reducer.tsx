import * as actionTypes from "./actionTypes";

// TODO Empty Mock Data
const initialState: ContactState = {
  contacts: [
    {
      id: 11111,
      title: "John Smith",
      body: "libero tempore, cum soluta nobis est eligendi",
    },
    {
      id: 22222,
      title: "Jack Doe",
      body: "pedita distinctio quas molestias excepturi sint",
    },
    {
      id: 123321,
      title: "Walter White",
      body: "Harum quidem rerum folestias excepturi sint",
    },
    {
      id: 121,
      title: "Jesse Pinkman",
      body: "Harum quidem rerum f sint",
    },
  ],
};

const reducer = (
  state: ContactState = initialState,
  action: ContactAction
): ContactState => {
  switch (action.type) {
    case actionTypes.ADD_CONTACT:
      const newContact: Contact = {
        id: Math.random(), // not really unique but it's just an example
        title: action.contact.title,
        body: action.contact.body,
      };
      return {
        ...state,
        contacts: state.contacts.concat(newContact),
      };
    case actionTypes.REMOVE_CONTACT:
      const updatedContacts: Contact[] = state.contacts.filter(
        (contact) => contact.id !== action.contact.id
      );
      return {
        ...state,
        contacts: updatedContacts,
      };
    case actionTypes.EDIT_CONTACT:
      const index = state.contacts.findIndex(
        (contact) => contact.id !== action.contact.id
      );
      console.log(index);
      const updatedEditContacts = state.contacts.splice(
        index,
        1,
        action.contact
      );
      console.log(updatedEditContacts);
      return {
        ...state,
        contacts: updatedEditContacts,
      };
  }
  return state;
};

export default reducer;
