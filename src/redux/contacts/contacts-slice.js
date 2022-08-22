import { createSlice } from '@reduxjs/toolkit';
import { getContact, addContact, deleteContact, addStatusFavorite } from './contact-operations';

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
    [getContact.rejected]: state => {
      state.loadingAdd = false;
    },

    [addContact.pending]: state => {
      state.loadingAdd = true;
    },
    [addContact.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.loadingAdd = false;
    },
    [addContact.rejected]: state => {
      state.loadingAdd = false;
    },
    [deleteContact.pending]: (state, { payload }) => {
      state.loadingDelete = true;
    },
    [deleteContact.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.loadingDelete = false;
    },
    [deleteContact.rejected]: state => {
      state.loadingAdd = false;
    },

    [addStatusFavorite.pending]: state => {
      state.loadingAdd = true;
    },
    [addStatusFavorite.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.loadingAdd = false;
    },

    [addContact.rejected]: state => {
      state.loadingAdd = false;
    },
  },
});

const contactsReduse = contacts.reducer;

export default contactsReduse;
