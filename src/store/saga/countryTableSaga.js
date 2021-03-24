import { call, takeLatest, put } from "redux-saga/effects";
import {
  getCountryTableLoadAction,
  getCountryTableSuccessAction,
  getCountryTableFailureAction,
} from "../module/countryTable";

import { getCountryTable } from "../../api/countryTable";

function* getCountryTableLoad() {
  try {
    const { data } = yield call(getCountryTable);

    yield put(getCountryTableSuccessAction(data));
  } catch (err) {
    yield put(getCountryTableFailureAction(err));
  }
}

export default function* countryTableSaga() {
  yield takeLatest(getCountryTableLoadAction, getCountryTableLoad);
}
