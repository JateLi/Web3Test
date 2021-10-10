import * as React from "react";

type Props = {
  leftNav?: () => void;
  rightNav?: () => void;
  title: string;
};

export const NavHeader: React.FC<Props> = ({ leftNav, rightNav, title }) => {
  return (
    <div className={"header"}>
      {leftNav ? <button onClick={leftNav}>{"<"}</button> : <div>{""}</div>}
      <div>{title ?? "Test"}</div>
      {rightNav ? (
        <button onClick={rightNav}>{"Edit"}</button>
      ) : (
        <div>{""}</div>
      )}
    </div>
  );
};
