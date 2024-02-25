import { configureStore } from "@reduxjs/toolkit";
import reducer from "../reducer/reducer";


const store = configureStore({
    reducer: {
        foreCast: reducer
    }
})

export default store;