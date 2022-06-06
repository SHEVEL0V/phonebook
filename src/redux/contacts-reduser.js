import { createReducer } from '@reduxjs/toolkit';
import {
  addValueFilter,
  pending,
  fulfilled,
  rejected,
} from './contacts-action';

export const filterValue = createReducer('', {
  [addValueFilter]: (_, { payload }) => payload,
});

export const loading = createReducer(
  { status: false, error: false },
  {
    [pending]: state => {
      state.status = true;
      state.error = false;
    },
    [fulfilled]: state => {
      state.status = false;
      state.error = false;
    },
    [rejected]: state => {
      state.status = false;
      state.error = true;
    },
  },
);
