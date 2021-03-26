import React, { useState, useContext } from "react";

import { useDispatch } from "react-redux";
import { Field, reduxForm, reset } from "redux-form";
import { addCountryTableAction } from "../../store/module/countryTable";

import styled, { ThemeContext } from "styled-components";
import Button from "../moduleComponent/Button";
import RenderField from "../moduleComponent/RenderField";
import FormFrame from "../frame/FormFrame";

import { INIT_TABLE_FORM } from "../../constants/countryTable";
import { required, onlyNumber } from "../../validation/countryTable";

const CountryTableForm = ({ handleSubmit }) => {
  const dispatch = useDispatch();
  const { color } = useContext(ThemeContext);

  const [isToggle, setIsToggle] = useState(false);

  const setModalToggle = () => setIsToggle((prevState) => !prevState);

  const dispatchAddTable = (table) => {
    dispatch(addCountryTableAction(table));
    dispatch(reset("countryTableForm"));
  };

  const onSubmitTableForm = (formData) => dispatchAddTable(formData);

  return (
    <CountryTableFormWrapper>
      <Button onClick={setModalToggle}>Add</Button>

      {isToggle && (
        <FormFrame
          onSubmit={handleSubmit((formData) => {
            onSubmitTableForm(formData);
          })}
        >
          <Field
            name="name"
            type="text"
            label="Name"
            component={RenderField}
            validate={required}
          />

          <Field
            name="alpha2Code"
            type="text"
            label="Alpha2Code"
            component={RenderField}
          />

          <Field
            name="callingCodes"
            type="text"
            label="CallingCodes"
            component={RenderField}
            validate={onlyNumber}
          />
          <p className="comment">
            {`When entering multiple callingCodes, use ","\n ex) 1234,5678`}
          </p>

          <Field
            name="capital"
            type="text"
            label="Capital"
            component={RenderField}
          />

          <Field
            name="region"
            type="text"
            label="Region"
            component={RenderField}
          />

          <div className="button_area">
            <Button fillColor={color.green}>Add</Button>
            <Button fillColor={color.red} onClick={setModalToggle}>
              Close
            </Button>
          </div>
        </FormFrame>
      )}
    </CountryTableFormWrapper>
  );
};

const CountryTableFormWrapper = styled.div`
  position: relative;
  margin: 30px 0px;

  .button_area {
    display: flex;
  }
`;

const CountryTableAddForm = reduxForm({
  form: "countryTableForm",
  initialValues: INIT_TABLE_FORM,
})(CountryTableForm);

export default CountryTableAddForm;
