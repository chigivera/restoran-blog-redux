import { configureStore } from "@reduxjs/toolkit"; 
import blogReducer from "./blog/blogSlice";
import authReducer from "./blog/authSlice";
export const store = configureStore({
    reducer: {
        blog: blogReducer,
        auth:authReducer
    }
})
