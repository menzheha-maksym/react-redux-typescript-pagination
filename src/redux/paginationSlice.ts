import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface PagesState {
  pages: Array<number>;
  activePage: number;
  nextButtonActive: boolean;
  prevButtonActive: boolean;
  skip: number;
}

const initialState: PagesState = {
  pages: [],
  activePage: 1,
  nextButtonActive: false,
  prevButtonActive: false,
  skip: 0,
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
    setSkip: (state, action: PayloadAction<number>) => {
      state.skip = action.payload;
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
  setSkip,
} = pagesSlice.actions;

export const selectActivePage = (state: RootState) => state.page.activePage;
export const selectPages = (state: RootState) => state.page.pages;
export const selectNextButton = (state: RootState) =>
  state.page.nextButtonActive;
export const selectPrevButton = (state: RootState) =>
  state.page.prevButtonActive;
export const selectSkip = (state: RootState) => state.page.skip;

export default pagesSlice.reducer;
