import * as actionTypes from "./actionTypes";

export function addContact(contact: Contact) {
  const action: ContactAction = {
    type: actionTypes.ADD_CONTACT,
    contact,
  };

  return simulateHttpRequest(action);
}

export function removeContact(contact: Contact) {
  const action: ContactAction = {
    type: actionTypes.REMOVE_CONTACT,
    contact,
  };
  return simulateHttpRequest(action);
}

export function editContact(contact: Contact) {
  const action: ContactAction = {
    type: actionTypes.EDIT_CONTACT,
    contact,
  };
  return simulateHttpRequest(action);
}

export function simulateHttpRequest(action: ContactAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action);
    }, 500);
  };
}
