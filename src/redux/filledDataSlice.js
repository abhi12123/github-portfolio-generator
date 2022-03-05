import { createSlice } from "@reduxjs/toolkit";

export const filledDataSlice = createSlice({
    name:'filledData',
    initialState:{
        value:{test:'test'}
    },
    reducers:{
        setData : (state, action) => {
            state.value = action.payload
        }
    }
})

export const {setData} = filledDataSlice.actions
export default filledDataSlice.reducer