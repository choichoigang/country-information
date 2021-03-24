import { all, fork } from "redux-saga/effects";

import countryTableSaga from "./countryTableSaga";

export default function* rootSaga() {
  yield all([fork(countryTableSaga)]);
}
