import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { Field, reduxForm, reset } from "redux-form";
import { addCountryTableAction } from "../../store/module/countryTable";

import styled from "styled-components";
import Button from "../moduleComponent/Button";
import RenderField from "../moduleComponent/RenderField";

import { INIT_TABLE_FORM } from "../../constants/countryTable";
import { nameRequired, onlyNumber } from "../../validation/countryTable";

const CountryTableForm = ({ handleSubmit }) => {
  const dispatch = useDispatch();

  const [isToggle, setIsToggle] = useState(false);

  const setModalToggle = () => setIsToggle((prevState) => !prevState);

  const dispatchAddTable = (table) => {
    dispatch(addCountryTableAction(table));
    dispatch(reset("countryTableForm"));
  };

  const onSubmitTableForm = (formData) => dispatchAddTable(formData);

  return (
    <CountryTableFormWrapper>
      <Button width="3.6rem" onClick={setModalToggle}>
        +
      </Button>

      {isToggle && (
        <From
          onSubmit={handleSubmit((formData) => {
            onSubmitTableForm(formData);
          })}
        >
          <Field
            name="name"
            type="text"
            label="Name"
            className="form_input"
            component={RenderField}
            validate={nameRequired}
          />

          <Field
            name="alpha2Code"
            type="text"
            label="Alpha2Code"
            className="form_input"
            component={RenderField}
          />

          <Field
            name="callingCodes"
            type="text"
            label="CallingCodes"
            className="form_input"
            component={RenderField}
            validate={onlyNumber}
          />
          <p className="comment">
            When entering multiple callingCodes, use ","
          </p>

          <Field
            name="capital"
            type="text"
            label="Capital"
            className="form_input"
            component={RenderField}
          />

          <Field
            name="region"
            type="text"
            label="Region"
            className="form_input"
            component={RenderField}
          />

          <div className="button_area">
            <Button width="100%" fillColor="#00CA42">
              Add
            </Button>
            <Button width="100%" fillColor="#FF605C" onClick={setModalToggle}>
              Close
            </Button>
          </div>
        </From>
      )}
    </CountryTableFormWrapper>
  );
};

const CountryTableFormWrapper = styled.div`
  position: relative;
  margin: 30px 0px;
`;

const From = styled.form`
  position: absolute;
  top: 36px;
  display: flex;
  flex-direction: column;
  width: 360px;

  padding: 12px;
  background-color: #ffffff;
  border: 1px solid #e1e4e8;
  border-radius: 8px;

  .button_area {
    display: flex;
  }

  .comment {
    padding: 4px 0px;
    font-size: 1.2rem;
    word-break: break-word;
    color: #5f5e57;
  }
`;

const CountryTableAddForm = reduxForm({
  form: "countryTableForm",
  initialValues: INIT_TABLE_FORM,
})(CountryTableForm);

export default CountryTableAddForm;
