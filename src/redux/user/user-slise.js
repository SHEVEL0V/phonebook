import { createSlice } from '@reduxjs/toolkit';
import {
  singnupUser,
  loginUser,
  logoutUser,
} from './user-operations';

const initialUserState = {
  user: { name: null, email: null, password: null },
  token: null,
  isLoggedIn: false,
  loadinng: false,
};

const user = createSlice({
  name: 'userSlice',
  initialState: initialUserState,
  extraReducers: {
    [singnupUser.pending]: state => {
      state.loadinng = true;
    },
    [singnupUser.fulfilled]: state => {
      state.loadinng = false;
    },
    [loginUser.pending]: state => {
      state.loadinng = true;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [logoutUser.fulfilled]: () => initialUserState,
  },
});

const userReduser = user.reducer;

export default userReduser;
