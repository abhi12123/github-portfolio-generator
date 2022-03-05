import { configureStore } from "@reduxjs/toolkit";
import devtoDataSlice from "./devtoDataSlice";
import filledDataSlice from "./filledDataSlice";
import githubDataSlice from "./githubDataSlice";

export default configureStore({
    reducer:{
        githubData : githubDataSlice,
        devtoData : devtoDataSlice,
        filledData : filledDataSlice
    }
})