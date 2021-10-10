import * as React from "react";

type Props = {
  contact: Contact;
  onEditContact: (id: number) => void;
  onSendAddress: (id: number) => void;
};

export const ContactItem: React.FC<Props> = ({
  contact,
  onEditContact,
  onSendAddress,
}) => {
  return (
    <div className={"Contact"}>
      <div onClick={() => onEditContact(contact.id)}>
        <h1>{contact.title}</h1>
      </div>
      <div>
        <p>{contact.body}</p>
      </div>
      <button onClick={() => onSendAddress(contact.id)}>Send</button>
    </div>
  );
};
