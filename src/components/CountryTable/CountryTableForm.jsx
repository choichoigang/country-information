import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { Field, reduxForm, reset } from "redux-form";
import { addCountryTableAction } from "../../store/module/countryTable";

import styled from "styled-components";
import Button from "../moduleComponent/Button";

import { checkCallingCodes } from "../../util/countryTable";
import { INIT_TABLE_FORM, FORM_ERROR } from "../../constants/countryTable";

const CountryTableForm = () => {
  const dispatch = useDispatch();
  const {
    countryTable: { data },
    form: {
      countryTableForm: { values },
    },
  } = useSelector((state) => state);

  const [isToggle, setIsToggle] = useState(false);

  const setModalToggle = () => setIsToggle((prevState) => !prevState);

  const dispatchAddTable = (table) => {
    dispatch(addCountryTableAction(table));
    dispatch(reset("countryTableForm"));
  };

  const onSubmitTableForm = (e) => {
    e.preventDefault();
    const isRequiredValue = values.name;
    const callingCodes = checkCallingCodes(values.callingCodes);

    if (!isRequiredValue) return window.confirm(FORM_ERROR.name);
    if (!callingCodes) return window.confirm(FORM_ERROR.callingCodes);

    const isOverlap = data.some(({ name }) => name === isRequiredValue);

    isOverlap
      ? window.confirm(FORM_ERROR.shipped)
      : dispatchAddTable({ ...values, callingCodes });
  };

  return (
    <CountryTableFormWrapper onSubmit={onSubmitTableForm}>
      <Button width={"3.6rem"} onClick={setModalToggle}>
        +
      </Button>

      {isToggle && (
        <From onSubmit={onSubmitTableForm}>
          <div>
            <label htmlFor="name">name</label>
            <Field
              name="name"
              type="text"
              component="input"
              className="form_input"
            />
          </div>
          <div>
            <label htmlFor="alpha2Code">alpha2Code</label>
            <Field
              name="alpha2Code"
              type="text"
              component="input"
              className="form_input"
            />
          </div>
          <div>
            <label htmlFor="callingCodes">callingCodes</label>
            <Field
              name="callingCodes"
              type="text"
              component="input"
              className="form_input"
            />
          </div>
          <div>
            <label htmlFor="capital">capital</label>
            <p className="comment">
              The callingCode can be used multiple by separating it with ",".
            </p>
            <Field
              name="capital"
              type="text"
              component="input"
              className="form_input"
            />
          </div>

          <div>
            <label htmlFor="region">region</label>
            <Field
              name="region"
              type="text"
              component="input"
              className="form_input"
            />
          </div>

          <div className="button_area">
            <Button
              width="100%"
              fillColor={"#00CA42"}
              onClick={onSubmitTableForm}
            >
              Add
            </Button>
            <Button width="100%" fillColor={"#FF605C"} onClick={setModalToggle}>
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

  .form_input {
    display: inline-block;
    width: 100%;
    margin: 12px 0px;
    height: 36px;
    border: 1px solid #181818;
    border-radius: 4px;
  }

  .button_area {
    display: flex;
  }

  .comment {
    padding: 4px 0px;
    font-size: 1.2rem;
    word-break: break-word;
    color: #5f5e57;
  }

  label {
    font-size: 1.4rem;
    font-weight: bold;
  }
`;

const CountryTableAddForm = reduxForm({
  form: "countryTableForm",
  initialValues: INIT_TABLE_FORM,
})(CountryTableForm);

export default CountryTableAddForm;
