import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counterSlice';

export const store = configureStore({
    reducer:{
        // Adding the counter reducer to the store
        counter:counterReducer

    }
})
