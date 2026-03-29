import { createSlice } from "@reduxjs/toolkit";
export const counterSlice = createSlice({
    name:'conter',
    initialState:{
        value:0
    },
    reducers:{
        // Action to increment the counter
        increment:(state)=>{
            state.value += 1
        },
        // Action to decrement the counter
        decrement:(state)=>{
            state.value -= 1
        }
    }
    }
)
// Export the action creators and the reducer for use in the application
export const {increment, decrement} = counterSlice.actions
export default counterSlice.reducer