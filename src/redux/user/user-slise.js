import { createSlice } from '@reduxjs/toolkit';
import {
  singnupUser,
  loginUser,
  logoutUser,
  fetchCurentUser,
} from './user-operations';

const initialUserState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  loading: false,
  error: false,
};

const user = createSlice({
  name: 'userSlice',
  initialState: initialUserState,
  extraReducers: {
    [singnupUser.pending]: state => {
      state.loading = true;
    },
    [singnupUser.fulfilled]: state => {
      state.loading = false;
    },
    [singnupUser.rejected]: state => {
      state.loading = false;
      state.error = true;
    },
    [loginUser.pending]: state => {
      state.loading = true;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.isLoggedIn = true;
      state.loading = false;
      state.user = payload.user;
      state.token = payload.token;
    },
    [loginUser.rejected]: state => {
      state.loading = false;
      state.error = true;
    },
    [logoutUser.fulfilled]: () => initialUserState,
    [logoutUser.rejected]: state => {
      state.isLoggedIn = false;
      state.error = true;
    },
    [fetchCurentUser.pending]: state => {
      state.isLoggedIn = false;
      state.loading = true;
    },
    [fetchCurentUser.fulfilled]: state => {
      state.isLoggedIn = true;
      state.loading = false;
    },
    [fetchCurentUser.rejected]: state => {
      state.isLoggedIn = false;
      state.loading = false;
      state.error = true;
    },
  },
});

const userReduser = user.reducer;

export default userReduser;
