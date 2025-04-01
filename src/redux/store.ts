import { configureStore } from "@reduxjs/toolkit";
import publicationSlice from "./publicationSlice";
import commentSlice from "./commentsSlice"

const store = configureStore({
    reducer: {
        publications: publicationSlice,
        comments: commentSlice
    }
})

export default store;
