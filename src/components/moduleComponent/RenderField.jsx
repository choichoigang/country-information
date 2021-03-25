import React from "react";
import styled from "styled-components";

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
    display: inline-block;
    width: 100%;
    margin: 12px 0px;
    height: 36px;
    border: 1px solid #181818;
    border-radius: 4px;
  }

  .label_wrapper {
    margin-top: 20px;

    label {
      font-size: 1.4rem;
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
