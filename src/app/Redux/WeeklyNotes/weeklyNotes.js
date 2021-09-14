import { createSlice } from "@reduxjs/toolkit";

const iff = (condition, then, otherwise) => (condition ? then : otherwise);

const dataOfWeeklyNotes = [
  {
    Week: 1,
    data: [
      {
        description: "Recruitmentprogram at school",
        status: false,
      },
      {
        description: "Leads campaign",
        status: true,
      },
      {
        description: "New advisor Training",
        status: false,
      },
    ],
    date: "07.04.2019",
    action: "Completed",
  },
  {
    Week: 2,
    data: [
      {
        description: "5 Pending to be followed 15 th",
        status: false,
      },
      {
        description: "Advise Kumara on productivity",
        status: false,
      },
    ],
    date: "14.04.2019",
    action: "Pending",
  },
  {
    Week: 3,
    data: [
      {
        description: "Education campaign",
        status: true,
      },
      {
        description: "Get New",
        status: true,
      },
    ],
    date: "21.04.2019",
    action: "Absent",
  },
  {
    Week: 4,
    data: [
      {
        description: "Fill 5 M GAP",
        status: "",
      },
      {
        description: "Plan MDRT drive",
        status: "",
      },
    ],
    date: "",
    action: "Pending",
  },
];

export const initialState = {
  weeklyNotesData: {
    loading: false,
    data: dataOfWeeklyNotes,
    error: null,
  },
};

export const quotationsSlice = createSlice({
  name: "weeklyNotes",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    weeklyNotesStart(state, { payload }) {
      return {
        ...state,
        weeklyNotesData: { ...state.weeklyNotesData, loading: true },
      };
    },
    weeklyNotesSuccess(state, { response }) {
      response = dataOfWeeklyNotes;
      return {
        ...state,
        weeklyNotesData: {
          ...state.weeklyNotesData,
          loading: false,
          data: response.data ? response.data.body : response.data,
          error: null,
        },
      };
    },
    weeklyNotesError(state, { response }) {
      return {
        ...state,
        weeklyNotesData: {
          ...state.weeklyNotesData,
          loading: false,
          data: null,
          error: response
            ? iff(response.data, response.data.message, response.data)
            : null,
        },
      };
    },
    weeklyNotesReset(state, { response }) {
      return {
        ...state,
        weeklyNotesData: initialState.weeklyNotesData,
      };
    },
  },
});

export const {
  weeklyNotesStart,
  weeklyNotesSuccess,
  weeklyNotesError,
  weeklyNotesReset,
} = quotationsSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const fetchWeeklyNotes = (state) => state.weeklyNotes.weeklyNotesData;

export default quotationsSlice.reducer;
