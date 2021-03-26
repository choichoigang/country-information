import { createSlice } from "@reduxjs/toolkit";
import shortid from "shortid";

import { INIT_ORDER } from "../../constants/countryTable";
import { sortAscend, sortDescend } from "../../util/sort";
import { convertCallingCodes, findMatchKeyword } from "../../util/countryTable";

const initialState = {
  searchKeyword: "",
  order: {
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

    searchCountryTableAction: (state, { payload }) => {
      state.filteredList = state.data.filter((table) => {
        return findMatchKeyword(
          { ...table, tableId: "" },
          payload.toLowerCase()
        );
      });

      state.searchKeyword = payload;
    },

    reOrderCountryTableAction: (state, { payload }) => {
      state.order = { ...INIT_ORDER, [payload]: !state.order[payload] };

      if (state.filteredList.length)
        state.filteredList = state.order[payload]
          ? sortDescend(state.filteredList, payload)
          : sortAscend(state.filteredList, payload);

      state.data = state.order[payload]
        ? sortDescend(state.data, payload)
        : sortAscend(state.data, payload);
    },

    addCountryTableAction: (state, { payload }) => {
      const newTable = {
        ...payload,
        tableId: shortid.generate(),
        callingCodes: convertCallingCodes(payload.callingCodes),
      };

      if (state.filteredList.length)
        state.filteredList = [newTable, ...state.filteredList];

      state.data = [newTable, ...state.data];
    },

    deleteCountryTableAction: (state, { payload }) => {
      if (state.filteredList.length)
        state.filteredList = state.filteredList.filter(
          (table) => table.tableId !== payload
        );

      state.data = state.data.filter((table) => table.tableId !== payload);
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
  searchCountryTableAction,
} = countryTableSlice.actions;

export default countryTableSlice.reducer;
