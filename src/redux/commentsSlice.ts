import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Comments {
    content: string;
    id: string
}

const initialState: { comments: Comments[] } = {
    comments: []
};

const commentSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {
        fetchComments: (state, action: PayloadAction<Comments[] | undefined>) => {
            if (action.payload) {
                const newComments = action.payload.filter(newComment =>
                    !state.comments.some(existingComment => existingComment.id === newComment.id)
                );
                state.comments = [...state.comments, ...newComments];
            }
        },
        addComments: (state, action: PayloadAction<Comments>) => {  
            const exists = state.comments.some(comment => comment.id === action.payload.id);
            if (!exists) {
                state.comments.push(action.payload);
            }
        },
        removeComment: (state, action: PayloadAction<string>) => {
            state.comments = state.comments.filter(comment => comment.id !== action.payload);
        }
    }
});

export const { fetchComments, addComments, removeComment } = commentSlice.actions;
export default commentSlice.reducer;
