import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../features/counterSlice.js'
import {productsApi} from "../services/api.js";


export const store = configureStore({
    reducer: {
        counter: counterSlice,
        [productsApi.reducerPath]: productsApi.reducer,
    },
    middleware: (getState) =>
        getState().concat(productsApi.middleware),
})