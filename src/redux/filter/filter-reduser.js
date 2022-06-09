import { createReducer } from '@reduxjs/toolkit';
import { addValueFilter } from './filter-action';

export const filterValue = createReducer('', {
  [addValueFilter]: (_, { payload }) => payload,
});
