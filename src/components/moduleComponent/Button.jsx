import React from "react";
import styled, { css } from "styled-components";

const Button = ({
  onClick = () => {},

  children = "Button",
  fillColor = "#000000",
  hoverColor = "#38d9a9",
  disabled = false,
}) => {
  return (
    <ButtonWrapper
      fillColor={fillColor}
      hoverColor={hoverColor}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button`
  border: none;
  overflow: visible;
  outline: none;

  padding: 8px 12px;

  border-radius: 8px;
  line-height: 1;
  margin: 0px 4px;
  transition: 0.3s;
  letter-spacing: 0.5px;
  font-weight: 500;

  width: ${(props) => props.width && props.width};
  color: ${({ theme: { color } }) => color.white};
  background-color: ${(props) => props.fillColor};

  &:hover {
    background: ${(props) => props.hoverColor};
  }

  &:active {
    opacity: 0.7;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.2;
  }
`;

export default Button;
