import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from './navbarSlice';

const appStore = configureStore({
    reducer: {
        navbar: navbarReducer,
    },
})

export default appStore;