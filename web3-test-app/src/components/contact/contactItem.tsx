import * as React from "react";

type Props = {
  contact: Contact;
};

export const ContactItem: React.FC<Props> = ({ contact }) => {
  return (
    <div className={"Contact"}>
      <div
        onClick={() => {
          console.log("test");
        }}
      >
        <h1>{contact.title}</h1>
      </div>
      <div>
        <p>{contact.body}</p>
      </div>
      <button onClick={() => console.log("send")}>Send</button>
    </div>
  );
};
