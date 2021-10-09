interface Contact {
  id: number;
  title: string;
  body: string;
}

type ContactState = {
  contacts: Contact[];
};

type ContactAction = {
  type: string;
  contact: Contact;
};

type DispatchType = (args: ContactAction) => ContactAction;
