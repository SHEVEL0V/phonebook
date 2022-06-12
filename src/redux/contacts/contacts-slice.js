import { createSlice } from '@reduxjs/toolkit';
import {
  getContact,
  addContact,
  deleteContact,
} from './contact-operations';

const contactsInitialState = {
  data: [],
  loadingFetch: false,
  loadingAdd: false,
  loadingDelete: false,
  error: false,
};

const contacts = createSlice({
  name: 'contactsSlice',
  initialState: contactsInitialState,
  extraReducers: {
    [getContact.pending]: state => {
      state.loadingFetch = true;
    },
    [getContact.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.loadingFetch = false;
    },

    [addContact.pending]: (state, { payload }) => {
      state.loadingAdd = true;
    },
    [addContact.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.loadingAdd = false;
    },
    [deleteContact.pending]: (state, { payload }) => {
      state.loadingDelete = true;
    },
    [deleteContact.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.loadingDelete = false;
    },
  },
});

const contactsReduse = contacts.reducer;

export default contactsReduse;
