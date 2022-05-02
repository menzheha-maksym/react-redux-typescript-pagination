import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export type Page = {
  activePage: number;
};

export interface PagesState {
  pages: Array<number>;
  activePage: number;
}

const initialState: PagesState = {
  pages: [],
  activePage: 1,
};

export const pagesSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    nextPage: (state) => {
      state.activePage = state.activePage + 1;
    },
    prevPage: (state) => {
      state.activePage = state.activePage - 1;
    },
  },
});

export const { nextPage, prevPage } = pagesSlice.actions;

export const activePage = (state: RootState) => state.page.activePage;

export default pagesSlice.reducer;
