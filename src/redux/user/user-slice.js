import { createSlice } from '@reduxjs/toolkit';
import { singnupUser, loginUser, logoutUser, fetchCurentUser } from './user-operations';

const initialUserState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  authentication: false,
  loading: false,
  error: false,
};

const user = createSlice({
  name: 'userSlice',
  initialState: initialUserState,
  extraReducers: {
    [singnupUser.pending]: state => {
      state.authentication = false;
      state.loading = true;
      state.error = false;
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
      state.error = true;
    },
    [loginUser.pending]: state => {
      state.loading = true;
      state.error = false;
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
      state.error = true;
    },
    [logoutUser.pending]: state => {
      state.isLoggedIn = false;
    },
    [logoutUser.fulfilled]: () => initialUserState,
    [logoutUser.rejected]: state => {
      state.isLoggedIn = false;
      state.error = true;
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
      state.error = true;
      state.authentication = false;
    },
  },
});

const userReduser = user.reducer;

export default userReduser;
