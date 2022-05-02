import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import pagesReducer from "./paginationSlice";

export const store = configureStore({
  reducer: {
    page: pagesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
