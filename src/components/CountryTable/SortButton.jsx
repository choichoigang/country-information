import React from "react";
import Button from "../moduleComponent/Button";

const SortButton = ({ name, isActive, handleClick }) => {
  return (
    <Button
      fillColor={isActive ? "#38d9a9" : "#181818"}
      width={"10%"}
      onClick={() => {
        handleClick(name);
      }}
    >
      {name}
    </Button>
  );
};

export default SortButton;
