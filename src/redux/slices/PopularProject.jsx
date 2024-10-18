import { createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
  LOADING: "LOADING",
});

const PopularProject = createSlice({
  name: "PopularProject",
  initialState: {
    data: [],
    status: STATUSES.SUCCESS,
  },
  reducers: {
    setPopularProject(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setPopularProject, setStatus } = PopularProject.actions;
export default PopularProject.reducer;

export function fetchPopularProject(id) {

  return async function fetchPopularProjectThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const res = await fetch(`https://fakestoreapi.com/products`);
      const alldata = await res.json();
      const data = alldata.slice(0, id);

      dispatch(setPopularProject(data));
      dispatch(setStatus(STATUSES.SUCCESS));
    } catch (error) {
      console.error(error);
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
