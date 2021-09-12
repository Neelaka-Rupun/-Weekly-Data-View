import { createSlice } from "@reduxjs/toolkit";

const iff = (condition, then, otherwise) => (condition ? then : otherwise);

const dataOfQuotations = [
  {
    Week: 1,
    Percentage: 20,
    T: 25,
    A: 5,
  },
  {
    Week: 2,
    Percentage: 10,
    T: 25,
    A: 5,
  },
  {
    Week: 3,
    Percentage: 110,
    T: 25,
    A: 35,
  },
  {
    Week: 4,
    Percentage: 110,
    T: 25,
    A: 35,
  },
];

export const initialState = {
  quotationsData: {
    loading: false,
    data: dataOfQuotations,
    error: null,
  },
};

export const quotationsSlice = createSlice({
  name: "quotations",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    quotationsStart(state, { payload }) {
      return {
        ...state,
        quotationsData: { ...state.quotationsData, loading: true },
      };
    },
    quotationsSuccess(state, { response }) {
      response = dataOfQuotations;
      return {
        ...state,
        quotationsData: {
          ...state.quotationsData,
          loading: false,
          data: response.data ? response.data.body : response.data,
          error: null,
        },
      };
    },
    quotationsError(state, { response }) {
      return {
        ...state,
        quotationsData: {
          ...state.quotationsData,
          loading: false,
          data: null,
          error: response
            ? iff(response.data, response.data.message, response.data)
            : null,
        },
      };
    },
    quotationsReset(state, { response }) {
      return {
        ...state,
        quotationsData: initialState.quotationsData,
      };
    },
  },
});

export const {
  quotationsStart,
  quotationsSuccess,
  quotationsError,
  quotationsReset,
} = quotationsSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const fetchQuotations = (state) => state.quotations.quotationsData;

export default quotationsSlice.reducer;
