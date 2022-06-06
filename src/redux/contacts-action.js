import { createAction } from '@reduxjs/toolkit';

export const addValueFilter = createAction('contacts/addValueFilter');

export const pending = createAction('loading/pending');

export const fulfilled = createAction('loading/fulfilled');

export const rejected = createAction('loading/rejected');
