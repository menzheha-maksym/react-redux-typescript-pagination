import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface PagesState {
  pages: Array<number>;
  activePage: number;
  nextButtonActive: boolean;
  prevButtonActive: boolean;
}

const initialState: PagesState = {
  pages: [],
  activePage: 1,
  nextButtonActive: false,
  prevButtonActive: false,
};

export const pagesSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    nextPage: (state) => {
      state.activePage += 1;
    },
    prevPage: (state) => {
      state.activePage -= 1;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.activePage = action.payload;
    },
    addPages: (
      state,
      action: PayloadAction<{ itemsCount: number; itemsPerPage: number }>
    ) => {
      const buttonsCount = Math.ceil(
        action.payload.itemsCount / action.payload.itemsPerPage
      );
      const buttonsArr = [];
      for (let i = 1; i < buttonsCount + 1; i++) {
        buttonsArr.push(i);
      }
      state.pages = buttonsArr;
    },
    enableNextButton: (state) => {
      state.nextButtonActive = true;
    },
    disableNextButton: (state) => {
      state.nextButtonActive = false;
    },
    enablePrevButton: (state) => {
      state.prevButtonActive = true;
    },
    disablePrevButton: (state) => {
      state.prevButtonActive = false;
    },
  },
});

export const {
  nextPage,
  prevPage,
  setPage,
  addPages,
  enableNextButton,
  disableNextButton,
  enablePrevButton,
  disablePrevButton,
} = pagesSlice.actions;

export const selectActivePage = (state: RootState) => state.page.activePage;
export const selectPages = (state: RootState) => state.page.pages;
export const selectNextButton = (state: RootState) =>
  state.page.nextButtonActive;
export const selectPrevButton = (state: RootState) =>
  state.page.prevButtonActive;

export default pagesSlice.reducer;
