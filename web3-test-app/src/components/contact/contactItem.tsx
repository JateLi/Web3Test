import * as React from "react";
import { Avata } from "../util/avata";

type Props = {
  contact: Contact;
  onSendAddress: (id: number) => void;
};

export const ContactItem: React.FC<Props> = ({ contact, onSendAddress }) => {
  return (
    <div className={"Contact"} onClick={() => onSendAddress(contact.id)}>
      <div>
        <Avata name={contact.title} />
      </div>
      <div>
        <p>{contact.title}</p>
      </div>
    </div>
  );
};
