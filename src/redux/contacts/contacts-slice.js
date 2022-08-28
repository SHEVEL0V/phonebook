import { createSlice } from '@reduxjs/toolkit';
import {
  getContact,
  addContact,
  updateContact,
  deleteContact,
  addStatusFavorite,
} from './contact-operations';

const contactsInitialState = {
  data: [],
  loadingGet: false,
  loadingAdd: false,
  loadingUpdate: false,
  loadingDelete: false,
  loadingStatus: false,
  errorUpdate: false,
  errorAdd: false,
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
      state.loadingGet = true;
    },

    [addContact.pending]: state => {
      state.loadingAdd = true;
      state.errorAdd = false;
    },
    [addContact.fulfilled]: (state, { payload }) => {
      state.loadingAdd = false;
      state.errorAdd = false;
      state.response = payload;
    },
    [addContact.rejected]: state => {
      state.loadingAdd = false;
      state.errorAdd = true;
    },
    [updateContact.pending]: state => {
      state.errorUpdate = false;
      state.loadingUpdate = true;
    },
    [updateContact.fulfilled]: (state, { payload }) => {
      state.loadingUpdate = false;
      state.errorUpdate = false;
      state.response = payload;
    },
    [updateContact.rejected]: state => {
      state.errorUpdate = true;
      state.loadingUpdate = false;
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
