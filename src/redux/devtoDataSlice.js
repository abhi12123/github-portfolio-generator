import { createSlice } from "@reduxjs/toolkit";

export const devtoDataSlice = createSlice({
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

export const {setData} = devtoDataSlice.actions
export default devtoDataSlice.reducer