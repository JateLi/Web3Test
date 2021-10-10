import * as React from "react";

type Props = {
  leftNav?: () => void;
  rightNav?: () => void;
  title: string;
};

export const NavHeader: React.FC<Props> = ({ leftNav, rightNav, title }) => {
  const emptyHolder = <div className={"headerBtm"}>{""}</div>;

  return (
    <div className={"topHeader"}>
      {leftNav ? (
        <button className={"headerBtm"} onClick={leftNav}>
          <span>{"<"}</span>
        </button>
      ) : (
        emptyHolder
      )}
      <div>{title ?? "Test"}</div>
      {rightNav ? (
        <button className={"headerBtm"} onClick={rightNav}>
          <span> {"Edit"}</span>
        </button>
      ) : (
        emptyHolder
      )}
    </div>
  );
};
