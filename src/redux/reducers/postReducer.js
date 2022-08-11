import { createSlice } from '@reduxjs/toolkit';

export const postSlice = createSlice({
  name: 'postCount',
  initialState: {
    posts: 6,
  },
  reducers: {
    increasePosts: (state) => {
      state.posts += 1;
    },
    decreasePosts: (state) => {
      state.posts -= 1;
    },
  },
});

export const { increasePosts, decreasePosts } = postSlice.actions;

export default postSlice.reducer;
