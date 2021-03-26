import React from "react";
import Button from "../moduleComponent/Button";

const SortButton = ({ name, isActive, handleClick }) => {
  return (
    <Button
      fillColor={isActive ? "#30C1F2" : "#181818"}
      hoverColor={"#30C1F2"}
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
