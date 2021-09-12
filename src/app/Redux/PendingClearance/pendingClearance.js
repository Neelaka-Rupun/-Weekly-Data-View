import { createSlice } from "@reduxjs/toolkit";

const iff = (condition, then, otherwise) => (condition ? then : otherwise);

const dataOfRequirement = [
  {
    Week: 1,
    Proposals: 3,
    Suspense: 25000,
    Renewals: 12000,
    Revivals: 2000,
  },
  {
    Week: 2,
    Proposals: 3,
    Suspense: 250000,
    Renewals: 120000,
    Revivals: 25000,
  },
  {
    Week: 3,
    Proposals: 3,
    Suspense: 250000,
    Renewals: 120000,
    Revivals: 25000,
  },
  {
    Week: 4,
    Proposals: 3,
    Suspense: 250000,
    Renewals: 120000,
    Revivals: 25000,
  },
];

export const initialState = {
  pendingClearanceData: {
    loading: false,
    data: dataOfRequirement,
    error: null,
  },
};

export const pendingClearanceSlice = createSlice({
  name: "pendingClearance",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    pendingClearanceStart(state, { payload }) {
      return {
        ...state,
        pendingClearanceData: { ...state.pendingClearanceData, loading: true },
      };
    },
    pendingClearanceSuccess(state, { response }) {
      response = dataOfRequirement;
      return {
        ...state,
        pendingClearanceData: {
          ...state.pendingClearanceData,
          loading: false,
          data: response.data ? response.data.body : response.data,
          error: null,
        },
      };
    },
    pendingClearanceError(state, { response }) {
      return {
        ...state,
        pendingClearanceData: {
          ...state.pendingClearanceData,
          loading: false,
          data: null,
          error: response
            ? iff(response.data, response.data.message, response.data)
            : null,
        },
      };
    },
    pendingClearanceReset(state, { response }) {
      return {
        ...state,
        pendingClearanceData: initialState.pendingClearanceData,
      };
    },
  },
});

export const {
  pendingClearanceStart,
  pendingClearanceSuccess,
  pendingClearanceError,
  pendingClearanceReset,
} = pendingClearanceSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const fetchPendingClearance = (state) =>
  state.pendingClearance.pendingClearanceData;

export default pendingClearanceSlice.reducer;
