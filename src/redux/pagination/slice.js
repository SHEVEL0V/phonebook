import { createSlice } from '@reduxjs/toolkit';

const initialPaginationState = {
  page: 1,
  limit: 6,
  favorite: null,
};

const pagination = createSlice({
  name: 'paginationSlice',
  initialState: initialPaginationState,
  extraReducers: {
    incrementPage: state => {
      state.page += 1;
    },
    decrementPage: state => {
      state.page -= 1;
    },

    updateLimit: (state, { payload }) => {
      state.limit = payload.limit;
    },

    updateFavorite: (state, { payload }) => {
      state.favorite = payload.favorite;
    },
  },
});

const paginationReduser = pagination.reducer;

export default paginationReduser;
