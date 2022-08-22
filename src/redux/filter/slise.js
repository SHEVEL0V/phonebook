import { createSlice } from '@reduxjs/toolkit';

const initialFilterState = {
  favorite: false,
};

const filter = createSlice({
  name: 'filter',
  initialState: initialFilterState,
  reducers: {
    updateFavorite: (state, { payload }) => {
      state.favorite = payload;
    },
  },
});

export const { updateFavorite } = filter.actions;

export default filter.reducer;
