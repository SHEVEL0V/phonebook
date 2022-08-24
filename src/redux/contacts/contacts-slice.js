import { createSlice } from '@reduxjs/toolkit';
import { getContact, addContact, deleteContact, addStatusFavorite } from './contact-operations';

const contactsInitialState = {
  data: [],
  loadingGet: false,
  loadingAdd: false,
  loadingDelete: false,
  loadingStatus: false,
  response: {},
  id: null,
};

const contacts = createSlice({
  name: 'contactsSlice',
  initialState: contactsInitialState,
  reducers: {
    updateId: (state, { payload }) => {
      state.id = payload;
    },
  },
  extraReducers: {
    [getContact.pending]: state => {
      state.loadingGet = true;
    },
    [getContact.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.loadingGet = false;
    },
    [getContact.rejected]: state => {
      state.loadingGet = false;
    },

    [addContact.pending]: state => {
      state.loadingAdd = true;
    },
    [addContact.fulfilled]: (state, { payload }) => {
      state.loadingAdd = false;
      state.response = payload;
    },
    [addContact.rejected]: state => {
      state.loadingAdd = false;
    },
    [deleteContact.pending]: state => {
      state.loadingDelete = true;
    },
    [deleteContact.fulfilled]: (state, { payload }) => {
      state.loadingDelete = false;
      state.response = payload;
    },
    [deleteContact.rejected]: state => {
      state.loadingDelete = false;
    },

    [addStatusFavorite.pending]: state => {
      state.loadingStatus = true;
    },
    [addStatusFavorite.fulfilled]: (state, { payload }) => {
      state.loadingStatus = false;
      state.response = payload;
    },

    [addContact.rejected]: state => {
      state.loadingStatus = false;
    },
  },
});

export const { updateId } = contacts.actions;

export default contacts.reducer;
