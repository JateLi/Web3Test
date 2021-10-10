import * as actionTypes from "./actionTypes";

// TODO Empty Mock Data
const initialState: ContactState = {
  contacts: [
    {
      id: 11111,
      title: "post 1",
      body:
        "Quisque cursus, metus vitae pharetra Nam libero tempore, cum soluta nobis est eligendi",
    },
    {
      id: 22222,
      title: "post 2",
      body:
        "Harum quidem rerum facilis est et expedita distinctio quas molestias excepturi sint",
    },
    {
      id: 123321,
      title: "post 3",
      body:
        "Harum quidem rerum facilis est et expedita distinctio quas molestias excepturi sint",
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
  }
  return state;
};

export default reducer;
