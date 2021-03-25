import React from "react";
import styled, { css } from "styled-components";

const Button = ({
  onClick,
  width,
  children = "Button",
  themes = "primary",
  size = "small",
  fillColor = "#000000",
  hoverColor = "#38d9a9",
  disabled = false,
}) => {
  return (
    <ButtonWrapper
      themes={themes}
      size={size}
      width={width}
      fillColor={fillColor}
      hoverColor={hoverColor}
      disabled={disabled}
    >
      {children}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button`
  border: none;
  overflow: visible;
  outline: none;

  border-radius: 16px;
  line-height: 1;
  font-weight: 600;

  transition: 0.3s;

  width: ${(props) => props.width && props.width};

  &:hover {
    background: ${(props) => props.hoverColor};
  }

  &:active {
    opacity: 0.7;
  }

  ${(props) =>
    props.themes === "primary" &&
    css`
      background-color: ${props.fillColor};
      color: #ffffff;
    `}

  ${(props) =>
    props.themes === "secondary" &&
    css`
      color: ${props.fillColor};
      border-color: ${props.fillColor};
      background-color: #ffffff;
      border: 1px solid;
    `}

  ${(props) =>
    props.themes === "tertiary" &&
    css`
      background-color: #ffffff;
      color: ${props.fillColor};
    `}

    /* Button Size */

    ${(props) =>
    props.size === "small" &&
    css`
      height: 3rem;
      font-size: 1.4rem;
      padding: 0 0.875rem;
    `}

    ${(props) =>
    props.size === "medium" &&
    css`
      height: 2.5rem;
      font-size: 1rem;
      padding: 0 1rem;
    `}
    ${(props) =>
    props.size === "big" &&
    css`
      height: 3rem;
      font-size: 1.125rem;
      padding: 0 1.5rem;
    `}

      &:disabled {
    cursor: not-allowed;
    opacity: 0.2;
  }
`;

export default Button;
