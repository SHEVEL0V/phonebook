import { createSlice } from '@reduxjs/toolkit';

const initialPaginationState = {
  page: 1,
  limit: 5,
  favorite: null,
};

const pagination = createSlice({
  name: 'paginationSlice',
  initialState: initialPaginationState,
  reducers: {
    incrementPage: state => {
      state.page += 1;
    },

    decrementPage: state => {
      if (state.page > 1) state.page -= 1;
    },
    updateLimit: (state, { payload }) => {
      state.limit = payload;
    },

    updatePage: (state, { payload }) => {
      state.page = payload;
    },
  },
});

export const { incrementPage, decrementPage, updateLimit, updatePage } = pagination.actions;

export default pagination.reducer;
