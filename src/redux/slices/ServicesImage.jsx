import { createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
  LOADING: "LOADING",
});

const ServicesImage = createSlice({
  name: "ServicesImage",
  initialState: {
    data: [],
    status: STATUSES.SUCCESS,
  },
  reducers: {
    setServicesImage(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setServicesImage, setStatus } = ServicesImage.actions;
export default ServicesImage.reducer;




// ERROR 
// export function fetchServicesImage(id) {
//   return async function fetchServicesImageThunk(dispatch) {
//     dispatch(setStatus(STATUSES.LOADING));
//     try {
//       const res = await fetch(`https://fakestoreapi.com/products/${id}`);
//       const data = await res.json();
      
//       dispatch(setServicesImage(data));
//       dispatch(setStatus(STATUSES.SUCCESS));
//     } catch (error) {
//       console.error(error);
//       dispatch(setStatus(STATUSES.ERROR));
//     }
//   };
// }



export function fetchServicesImage(id) {
  return async function fetchServicesImageThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);

      // Check if the response is okay (status code 200-299)
      if (!res.ok) {
        throw new Error(`Error: ${res.status} ${res.statusText}`);
      }

      const data = await res.json();

      dispatch(setServicesImage(data));
      dispatch(setStatus(STATUSES.SUCCESS));
    } catch (error) {
      console.error(error);
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
