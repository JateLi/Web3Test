import * as React from "react";

type Props = {
  name: string;
};

export const Avata: React.FC<Props> = ({ name }) => {
  const returnAvataName = (nameString: string) => {
    const fullName = nameString.split(" ").map((name) => name.charAt(0));
    const initials = fullName.toString().replace(",", "");
    return initials.toUpperCase();
  };

  return (
    <div className="circle">
      <span className="text">{returnAvataName(name)}</span>
    </div>
  );
};
