import { configureStore } from "@reduxjs/toolkit";
import recruitment from "./Recruitment/recruitment";
import pendingClearance from "./PendingClearance/pendingClearance";
import quotations from "./Quotations/quotations";
import activeAdvisors from "./ActiveAdvisors/activeAdvisors";
import weeklyNotes from "./WeeklyNotes/weeklyNotes";

export const store = configureStore({
  reducer: {
    recruitment,
    pendingClearance,
    quotations,
    activeAdvisors,
    weeklyNotes,
  },
});
