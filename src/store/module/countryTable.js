import { createSlice } from "@reduxjs/toolkit";
import { sortAscend, sortDescend } from "../../util/sort";
import { convertCallingCodes } from "../../util/countryTable";

const INIT_ORDER = {
  name: false,
  alpha2Code: false,
  callingCodes: false,
  capital: false,
  region: false,
};

const initialState = {
  order: {
    // true : 오름차순
    // false : 내림차순
    name: false,
    alpha2Code: false,
    callingCodes: false,
    capital: false,
    region: false,
  },

  filteredList: [],

  isLoading: false,
  data: null,
  error: null,
};

const countryTableSlice = createSlice({
  name: "countryTable",
  initialState,
  reducers: {
    // fetch actions
    getCountryTableLoadAction: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    getCountryTableSuccessAction: (state, { payload }) => {
      state.data = payload;
      state.isLoading = false;
    },
    getCountryTableFailureAction: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },

    // store actions
    reOrderCountryTableAction: (state, { payload }) => {
      if (state.filteredList.length) console.log("filter");

      state.data = state.order[payload]
        ? sortDescend(state.data, payload)
        : sortAscend(state.data, payload);

      state.order = { ...INIT_ORDER, [payload]: !state.order[payload] };
    },
    addCountryTableAction: (state, { payload }) => {
      state.data = [
        { ...payload, callingCodes: convertCallingCodes(payload.callingCodes) },
        ...state.data,
      ];
    },
    deleteCountryTableAction: (state, { payload }) => {
      state.data = state.data.filter((table) => table.name !== payload);
    },
  },
});

export const {
  getCountryTableLoadAction,
  getCountryTableSuccessAction,
  getCountryTableFailureAction,

  reOrderCountryTableAction,
  addCountryTableAction,
  deleteCountryTableAction,
} = countryTableSlice.actions;

export default countryTableSlice.reducer;
