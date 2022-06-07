import { createReducer } from '@reduxjs/toolkit';
import { addValueFilter } from './contacts-action';

export const filterValue = createReducer('', {
  [addValueFilter]: (_, { payload }) => payload,
});
