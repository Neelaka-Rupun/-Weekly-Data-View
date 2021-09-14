import { createSlice } from "@reduxjs/toolkit";

const iff = (condition, then, otherwise) => (condition ? then : otherwise);

const dataOfActiveAdvisors = [
  {
    Week: 1,
    Percentage: 50,
    T: 25,
    A: 5,
  },
  {
    Week: 2,
    Percentage: 80,
    T: 25,
    A: 5,
  },
  {
    Week: 3,
    Percentage: 20,
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
  activeAdvisorsData: {
    loading: false,
    data: dataOfActiveAdvisors,
    error: null,
  },
};

export const quotationsSlice = createSlice({
  name: "activeAdvisors",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    activeAdvisorsStart(state, { payload }) {
      return {
        ...state,
        activeAdvisorsData: { ...state.activeAdvisorsData, loading: true },
      };
    },
    activeAdvisorsSuccess(state, { response }) {
      response = dataOfActiveAdvisors;
      return {
        ...state,
        activeAdvisorsData: {
          ...state.activeAdvisorsData,
          loading: false,
          data: response.data ? response.data.body : response.data,
          error: null,
        },
      };
    },
    activeAdvisorsError(state, { response }) {
      return {
        ...state,
        activeAdvisorsData: {
          ...state.activeAdvisorsData,
          loading: false,
          data: null,
          error: response
            ? iff(response.data, response.data.message, response.data)
            : null,
        },
      };
    },
    activeAdvisorsReset(state, { response }) {
      return {
        ...state,
        activeAdvisorsData: initialState.activeAdvisorsData,
      };
    },
  },
});

export const {
  activeAdvisorsStart,
  activeAdvisorsSuccess,
  activeAdvisorsError,
  activeAdvisorsReset,
} = quotationsSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const fetchActiveAdvisors = (state) =>
  state.activeAdvisors.activeAdvisorsData;

export default quotationsSlice.reducer;
