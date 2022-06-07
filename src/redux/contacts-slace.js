import { createSlice } from '@reduxjs/toolkit';
import {
  singnupUser,
  loginUser,
  logoutUser,
  getContact,
  addContact,
  deleteContact,
} from './contact-operations';

const initialUserState = {
  user: { name: null, email: null, password: null },
  token: null,
  isLoggedIn: false,
  loadinng: false,
  status: '',
};

const user = createSlice({
  name: 'userSlice',
  initialState: initialUserState,
  extraReducers: {
    [singnupUser.pending]: state => {
      state.loadinng = true;
    },
    [singnupUser.fulfilled]: (state, { meta }) => {
      state.loadinng = false;
      state.status = meta;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [logoutUser.fulfilled]: () => initialUserState,
  },
});
const contactsInitialState = {
  data: [],
  loading: false,
  error: false,
};

const contacts = createSlice({
  name: 'contactsSlice',
  initialState: contactsInitialState,
  extraReducers: {
    // [getContact.pending]: state => state,
    [getContact.fulfilled]: (state, { payload }) => {
      state.data = payload;
    },

    [addContact.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [addContact.fulfilled]: (state, { payload }) => {
      state.loading = false;
    },
    [deleteContact.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [deleteContact.fulfilled]: (state, payload) => {
      state.loading = false;
    },
  },
});

export { contacts, user };
