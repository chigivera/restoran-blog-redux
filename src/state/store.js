import { configureStore } from "@reduxjs/toolkit"; 
import reducer from "./blog/blogSlice";
export const store = configureStore({
    reducer: {
        blog: reducer,
    }
})
