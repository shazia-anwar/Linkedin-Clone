import { createSlice } from "@reduxjs/toolkit";
import { getAllComments, getAllPosts } from "../../action/postAction";

const initialState = {
    posts: [],
    isError: false,
    postFetched: false,
    isLoading: false,
    loggedIn: false,
    message: "",
    comments: [],
    postId: "",
}

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        reset: () => initialState,
        resetPostId: (state) => {
            state.postId = ""
        },
    },
    
    extraReducers: (builder) => {
        builder
        .addCase(getAllPosts.pending, (state) => {
            state.isLoading = true
            state.message = "Fetching all the posts..."
        })
        .addCase(getAllPosts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.postFetched = true;
            console.log(action.payload.posts);
            state.posts = action.payload.posts.reverse()
            console.log(`HERE`, state.posts)
        })
        .addCase(getAllPosts.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload
        })
        .addCase(getAllComments.fulfilled, (state, action) => {
            state.postId = action.payload.post_id
            state.comments = action.payload.comments
            console.log(state.comments)
        })
    }
})

export const { resetPostId } = postSlice.actions;

export default  postSlice.reducer