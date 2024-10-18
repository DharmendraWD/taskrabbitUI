import { createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
  LOADING: "LOADING",
});

const heroRowsOptionSlice = createSlice({
  name: "heroRowsOption",
  initialState: {
    data: [],
    status: STATUSES.SUCCESS,
  },
  reducers: {
    setHeroRowsOption(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setHeroRowsOption, setStatus } = heroRowsOptionSlice.actions;
export default heroRowsOptionSlice.reducer;

export function fetchHeroRowsOption(clickedItemId = 1) {

  return async function fetchHeroRowsOptionThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${clickedItemId}`);
      const data = await res.json();
      dispatch(setHeroRowsOption(data));
      dispatch(setStatus(STATUSES.SUCCESS));
    } catch (error) {
      console.error(error);
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
