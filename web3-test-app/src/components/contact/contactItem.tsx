import * as React from "react";

type Props = {
  contact: Contact;
  onSendAddress: (id: number) => void;
};

export const ContactItem: React.FC<Props> = ({ contact, onSendAddress }) => {
  return (
    <div className={"Contact"} onClick={() => onSendAddress(contact.id)}>
      <div>
        <h1>{contact.title}</h1>
      </div>
      <div>
        <p>{contact.body}</p>
      </div>
    </div>
  );
};
