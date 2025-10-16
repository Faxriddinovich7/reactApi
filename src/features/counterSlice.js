import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
    name:"",
    fullName: "",
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
            console.log(state.name = "Salom")
        },
        decrement: (state) => {
            state.value -= 1
            console.log(state.name = "A.Ahmad")
        },
    },
})
export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer