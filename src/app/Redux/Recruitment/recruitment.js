import { createSlice } from "@reduxjs/toolkit";

const iff = (condition, then, otherwise) => (condition ? then : otherwise);

const dataOfRequirement = [
  {
    Week: 1,
    Existing: 6,
    Registrations: 20,
    NewCodes: 10,
  },
  {
    Week: 2,
    Existing: 6,
    Registrations: 20,
    NewCodes: 10,
  },
  {
    Week: 3,
    Existing: 6,
    Registrations: 20,
    NewCodes: 10,
  },
  {
    Week: 4,
    Existing: 6,
    Registrations: 20,
    NewCodes: 10,
  },
];

export const initialState = {
  recruitmentData: {
    loading: false,
    data: dataOfRequirement,
    error: null,
  },
};

export const recruitmentSlice = createSlice({
  name: "recruitment",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    fetchRecruitmentStart(state, { payload }) {
      return {
        ...state,
        recruitmentData: { ...state.recruitmentData, loading: true },
      };
    },
    fetchRecruitmentSuccess(state, { response }) {
      response = dataOfRequirement;
      return {
        ...state,
        recruitmentData: {
          ...state.recruitmentData,
          loading: false,
          data: response.data ? response.data.body : response.data,
          error: null,
        },
      };
    },
    fetchRecruitmentError(state, { response }) {
      return {
        ...state,
        recruitmentData: {
          ...state.recruitmentData,
          loading: false,
          data: null,
          error: response
            ? iff(response.data, response.data.message, response.data)
            : null,
        },
      };
    },
    fetchRecruitmentReset(state, { response }) {
      return {
        ...state,
        recruitmentData: initialState.recruitmentData,
      };
    },
  },
});

export const {
  fetchRecruitmentStart,
  fetchRecruitmentSuccess,
  fetchRecruitmentError,
  fetchRecruitmentReset,
} = recruitmentSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const fetchRecruitment = (state) => state.recruitment.recruitmentData;

export default recruitmentSlice.reducer;
