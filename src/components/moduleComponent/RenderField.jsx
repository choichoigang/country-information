import React from "react";
import styled from "styled-components";
import { baseInput } from "../../style/css";

const RenderField = ({ input, label, type, meta: { touched, error } }) => {
  return (
    <RenderFieldWrapper>
      <div className="label_wrapper">
        <label>{label}</label>
      </div>
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched && error && <span className="error">{error}</span>}
      </div>
    </RenderFieldWrapper>
  );
};

const RenderFieldWrapper = styled.div`
  input {
    width: 100%;

    ${baseInput}
  }

  .label_wrapper {
    margin-top: 20px;

    label {
      font-size: ${({ theme: { typo } }) => typo.P_01};
      font-weight: bold;
      margin-top: 12px;
    }
  }

  .error {
    color: #ff605c;
    margin: 8px 0px;
  }
`;

export default RenderField;
