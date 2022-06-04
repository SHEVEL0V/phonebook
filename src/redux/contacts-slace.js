import { createSlice } from '@reduxjs/toolkit';
import { loginUser } from './contact-operations';

const initialUserState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const user = createSlice({
  name: 'userSlice',
  initialState: initialUserState,
  extraReducers: {
    [loginUser.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
  },
});

export default user;
