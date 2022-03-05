import { createSlice } from "@reduxjs/toolkit";

export const githubDataSlice = createSlice({
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

export const {setData} = githubDataSlice.actions
export default githubDataSlice.reducer