import React from "react";
import styled, { css } from "styled-components";

const FormFrame = ({ children, onSubmit, layout = "Modal" }) => {
  return (
    <FormFrameWrapper layout={layout} onSubmit={onSubmit}>
      {children}
    </FormFrameWrapper>
  );
};

const FormFrameWrapper = styled.form`
  ${({ layout }) =>
    layout === "Modal" &&
    css`
      position: absolute;
      display: flex;
      flex-direction: column;
      width: 360px;
      top: 36px;

      padding: 12px;
      border: 1px solid #e1e4e8;
      border-radius: 8px;

      background-color: ${({ theme: { color } }) => color.white};
      box-shadow: ${({ theme: { boxShadow } }) => boxShadow.base};
    `}
`;

export default FormFrame;
