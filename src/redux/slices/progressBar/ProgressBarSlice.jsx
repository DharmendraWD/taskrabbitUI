import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 0,
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            if (state.value < 3) {
                state.value += 1;
            }
        },
        reset: (state) => {
            state.value = 0;
        },
    },
});

export const { increment, reset } = counterSlice.actions;
export default counterSlice.reducer;
