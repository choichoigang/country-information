import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import countryTable from "./countryTable";

const reducer = {
  countryTable,
  form: formReducer,
};

const rootReducer = combineReducers(reducer);

export default rootReducer;
