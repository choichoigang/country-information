import { call, takeLatest, put } from "redux-saga/effects";
import {
  getCountryTableLoadAction,
  getCountryTableSuccessAction,
  getCountryTableFailureAction,
} from "../module/countryTable";

import { getCountryTable } from "../../api/countryTable";
import shortid from "shortid";

function* getCountryTableLoad() {
  try {
    const { data } = yield call(getCountryTable);

    yield put(
      getCountryTableSuccessAction(
        data.map((table) => ({ tableId: shortid.generate(), ...table }))
      )
    );
  } catch (err) {
    yield put(getCountryTableFailureAction(err));
  }
}

export default function* countryTableSaga() {
  yield takeLatest(getCountryTableLoadAction, getCountryTableLoad);
}
