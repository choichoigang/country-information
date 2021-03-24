import { createSlice, createAction } from "@reduxjs/toolkit";

const initialState = {
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
  },
});

export const {
  getCountryTableLoadAction,
  getCountryTableSuccessAction,
  getCountryTableFailureAction,
} = countryTableSlice.actions;

export default countryTableSlice.reducer;
