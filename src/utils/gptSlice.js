import { createSlice } from '@reduxjs/toolkit';

const gptSlice = createSlice({

name: 'gpt',
  initialState: {
    showGptSearch: false,
    movieNames: null,
    movieResults: null

  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },

    addGptMovieResult: () => {
      const {movieNames, movieResults} = action.payload;
      state.movieNames = action.movieNames
      state.movieResults = action.movieResults

    }

} 
})

export const { toggleGptSearchView, addGptMovieResult } = gptSlice.actions;
export default gptSlice.reducer;