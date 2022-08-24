import { createSlice } from '@reduxjs/toolkit';
import {
  singnupUser,
  loginUser,
  logoutUser,
  fetchCurentUser,
  updateAvatar,
} from './user-operations';

const initialUserState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  authentication: false,
  loading: false,
};

const user = createSlice({
  name: 'userSlice',
  initialState: initialUserState,
  extraReducers: {
    [singnupUser.pending]: state => {
      state.authentication = false;
      state.loading = true;
    },
    [singnupUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.authentication = true;
      state.user = payload.user;
      state.token = payload.token;
    },
    [singnupUser.rejected]: state => {
      state.authentication = false;
      state.loading = false;
    },
    [loginUser.pending]: state => {
      state.loading = true;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.isLoggedIn = true;
      state.authentication = true;
      state.loading = false;
      state.user = payload.user;
      state.token = payload.token;
    },
    [loginUser.rejected]: state => {
      state.loading = false;
    },
    [logoutUser.pending]: state => {
      state.isLoggedIn = false;
    },
    [logoutUser.fulfilled]: () => initialUserState,
    [logoutUser.rejected]: state => {
      state.isLoggedIn = false;
    },
    [fetchCurentUser.pending]: state => {
      state.loading = true;
      state.isLoggedIn = false;
      state.authentication = false;
    },
    [fetchCurentUser.fulfilled]: state => {
      state.loading = false;
      state.isLoggedIn = true;
      state.authentication = true;
    },
    [fetchCurentUser.rejected]: state => {
      state.loading = false;
      state.isLoggedIn = false;
      state.authentication = false;
    },

    [updateAvatar.pending]: state => {
      state.loading = true;
    },
    [updateAvatar.fulfilled]: state => {
      state.loading = false;
    },
    [updateAvatar.rejected]: state => {
      state.loading = false;
    },
  },
});

const userReduser = user.reducer;

export default userReduser;
