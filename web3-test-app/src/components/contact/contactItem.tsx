import * as React from "react";

type Props = {
  contact: Contact;
};

export const ContactItem: React.FC<Props> = ({ contact }) => {
  return (
    <div
      className="Contact"
      onClick={() => {
        console.log("test");
      }}
    >
      <div>
        <h1>{contact.title}</h1>
        <p>{contact.body}</p>
      </div>
    </div>
  );
};
