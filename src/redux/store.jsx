import { configureStore } from "@reduxjs/toolkit";
import HeroRowsOptionReducer from "./slices/HeroRowMenu";
import PopularProjectReducer from "./slices/PopularProject";
import ServicesImageReducer from './slices/ServicesImage'
import counterReducer from './slices/progressBar/ProgressBarSlice'

const store = configureStore({
    reducer:{
        HeroRowsOption:HeroRowsOptionReducer,
        PopularProject:PopularProjectReducer,
        ServicesImage:ServicesImageReducer,
        counter: counterReducer,
    }
})

export default store;