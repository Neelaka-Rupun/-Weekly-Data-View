import { configureStore } from "@reduxjs/toolkit";
import recruitment from "./Recruitment/recruitment";
import pendingClearance from "./PendingClearance/pendingClearance";
import quotations from "./Quotations/quotations";

export const store = configureStore({
  reducer: {
    recruitment,
    pendingClearance,
    quotations,
  },
});
