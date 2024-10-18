import { configureStore } from "@reduxjs/toolkit";
import HeroRowsOptionReducer from "./slices/HeroRowMenu";
import PopularProjectReducer from "./slices/PopularProject";
import ServicesImageReducer from './slices/ServicesImage'

const store = configureStore({
    reducer:{
        HeroRowsOption:HeroRowsOptionReducer,
        PopularProject:PopularProjectReducer,
        ServicesImage:ServicesImageReducer
    }
})

export default store;