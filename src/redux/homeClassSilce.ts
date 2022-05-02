import { createSlice } from "@reduxjs/toolkit";

export interface HomeClassState {
  skip: number;
  activePage: number;
}

const initialState: HomeClassState = {
  skip: 0,
  activePage: 1,
};

export const homeClassSlice = createSlice({
  name: "homeClass",
  initialState,
  reducers: {},
});

export default homeClassSlice.reducer;
